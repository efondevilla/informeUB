import { env } from 'node:process'

const { PALOALTO_API_KEY, PALOALTO_HOST } = env
if (!PALOALTO_HOST)
  throw new Error("Missing Microsoft Secret ID")
const API_SIEM_URL = `"https://${PALOALTO_HOST}/api/`


// curl -k -X GET "https://161.116.3.25/api/api?type=op&cmd=<show><user><group><list></list></group></user></show>&key=LUFRPT1UcEpGSW83UW9HdTlWMFZnS2VXcjd6RUZkYXc9U1hjMGR4UXhJRW5XN0xvYW1wL2hCdz09"
export async function getPaloAltoAlerts(cmd: string){
  if (!PALOALTO_API_KEY)
    throw new Error("Missing Microsoft Client ID")

  const myHeaders = new Headers({
    "Content-Type": "application/json"
  });
  const params = new URLSearchParams({
    type: 'op',
    cmd,
    key: PALOALTO_API_KEY
  });

  const response = await fetch(`${API_SIEM_URL}api?${params.toString()}`, {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  });
  const data = await response.text()
  return data
}


