import { env } from 'node:process'
import { getJWT, getTenants } from './sophos'
import type { sophosSiemAlerts, sophosSiemAlertItem } from '../../types/sophosSiem'

const { SOPHOS_API_REGION } = env

const API_SIEM_URL = `https://api-${SOPHOS_API_REGION}.central.sophos.com/siem/v1/`

export async function getAlerts(){
  const token = await getJWT()
  const tenants = await getTenants()
  const alertsPromises = tenants.map(tenant => getAlert(token, tenant))
  const alerts = await Promise.all(alertsPromises)
  return alerts
}

async function getAlert(token: string, tenant_id: string): Promise<sophosSiemAlertItem[]>{
  console.log(tenant_id)
  const myHeaders = new Headers({
    "Authorization": `Bearer ${token}`,
    "X-Tenant-ID": tenant_id,
    "Content-Type": "application/json"
  });
  const response = await fetch(`${API_SIEM_URL}events`, {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  })
  const data = await response.text()
  const jsonData: sophosSiemAlerts = JSON.parse(data)
  return jsonData.items
}
