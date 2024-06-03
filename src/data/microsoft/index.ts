import { env } from 'node:process'
export * from './microsoftDefender'

const { MICROSOFT_CLIENT_ID, MICROSOFT_TENANT_ID, MICROSOFT_SECRET_VALUE_ID } = env
let JWTtoken: string | undefined = undefined
export async function getMicrosoftJWT(force: boolean = false) {
  if (JWTtoken && !force)
    return JWTtoken
  if (!MICROSOFT_CLIENT_ID)
    throw new Error("Missing Microsoft Client ID")
  if (!MICROSOFT_SECRET_VALUE_ID)
    throw new Error("Missing Microsoft Secret ID")
  if (!MICROSOFT_TENANT_ID)
    throw new Error("Missing Microsoft Tenant ID")

  const myHeaders = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
  const urlencoded = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: MICROSOFT_CLIENT_ID,
    client_secret: MICROSOFT_SECRET_VALUE_ID,
    scope: 'https://api.securitycenter.microsoft.com/.default',
  })

  try{
    const response = await fetch(`https://login.microsoftonline.com/${MICROSOFT_TENANT_ID}/oauth2/v2.0/token`, {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    })
    const data = await response.text()
    const jsonData = JSON.parse(data)
    // Documentation:
    // https://learn.microsoft.com/en-us/defender-xdr/api-partner-access
    JWTtoken = jsonData.access_token
    return jsonData.access_token
  } catch (error){
    console.error('Error fetching JWT:', error)
    throw error
  }
}
