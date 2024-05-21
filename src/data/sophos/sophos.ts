import { env } from 'node:process'
import type { sophosAccessToken, sophosOrganizationInfo,  sophosOrganizationTenants} from '../../types/sophosGeneric'

const { SOPHOS_CLIENT_ID, SOPHOS_CLIENT_SECRET } = env

const API_CENTRAL_URL = 'https://api.central.sophos.com/'
let JWTtoken: string | undefined = undefined
let WAIorganization: string | undefined = undefined
let OrgTenants: Array<string> = []

export async function getJWT(force: boolean = false) {
  if (JWTtoken && !force)
    return JWTtoken
  if (!SOPHOS_CLIENT_ID)
    throw new Error("Missing Sophos Client ID")
  if (!SOPHOS_CLIENT_SECRET)
    throw new Error("Missing Sophos Client SECRET")

  const myHeaders = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
  const urlencoded = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: SOPHOS_CLIENT_ID,
        client_secret: SOPHOS_CLIENT_SECRET,
        scope: 'token',
      })
  try{
    const response = await fetch("https://id.sophos.com/api/v2/oauth2/token", {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    })
    const data = await response.text()
    const jsonData: sophosAccessToken = JSON.parse(data)
    JWTtoken = jsonData.access_token
    return jsonData.access_token
  } catch (error){
    console.error('Error fetching JWT:', error)
    throw error
  }
}

export async function getOrganization(force: boolean = false) {
  if (WAIorganization && !force)
    return WAIorganization
  try {
    const token = await getJWT()
    const myHeaders = new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    })
    const response = await fetch(`${API_CENTRAL_URL}whoami/v1`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    })
    const data = await response.text()
    const jsonData: sophosOrganizationInfo = JSON.parse(data)
    WAIorganization = jsonData.id
    return jsonData.id
  } catch (error) {
    console.error('Error fetching Organization data:', error)
    throw error
  }
}

export async function getTenants() {
  if (OrgTenants.length > 0)
    return OrgTenants
  try {
    const token = await getJWT()
    const organization = await getOrganization()
    const myHeaders = new Headers({
      "Authorization": `Bearer ${token}`,
      "X-Organization-ID": organization,
      "Content-Type": "application/json"
    });
    const response = await fetch(`${API_CENTRAL_URL}organization/v1/tenants`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    })
    const data = await response.text()
    const jsonData: sophosOrganizationTenants = JSON.parse(data)
    const tenants = jsonData.items.map((item) => item.id)
    OrgTenants = tenants
    return tenants
  } catch (error) {
    console.error('Error fetching Tenant data:', error)
    throw error
  }
}
