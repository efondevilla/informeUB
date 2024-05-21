import { env } from 'node:process'

const { MICROSOFT_CLIENT_ID, MICROSOFT_OBJECT_ID, MICROSOFT_TENANT_ID, MICROSOFT_SECRET_ID, MICROSOFT_SECRET_VALUE_ID } = env
// const API_CENTRAL_URL = 'https://eu.api.security.microsoft.com'
let JWTtoken: string | undefined = undefined

export async function getMicrosoftJWT(force: boolean = false) {
  if (JWTtoken && !force)
    return JWTtoken
  if (!MICROSOFT_CLIENT_ID)
    throw new Error("Missing Microsoft Client client ID")
  if (!MICROSOFT_SECRET_ID)
    throw new Error("Missing Microsoft Client secret ID")
  if (!MICROSOFT_TENANT_ID)
    throw new Error("Missing Microsoft Client tenant ID")

  const myHeaders = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
  const urlencoded = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: MICROSOFT_CLIENT_ID,
    client_secret: MICROSOFT_SECRET_ID,
    scope: `https://graph.microsoft.com/.default`,
  })

  try{
    const response = await fetch("https://login.microsoftonline.com/" + MICROSOFT_TENANT_ID + "/oauth2/v2.0/token", {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    })
    const data = await response.text()
    const jsonData = JSON.parse(data)
    JWTtoken = jsonData.access_token
    return jsonData.access_token
  } catch (error){
    console.error('Error fetching JWT:', error)
    throw error
  }
}
