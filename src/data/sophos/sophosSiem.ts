import { env } from 'node:process'
import { getSophosJWT, getSophosTenants } from '.'
import type { sophosSiemAlerts, sophosSiemAlert, sophosSiemEvents, sophosSiemEvent } from '../../types/sophosSiem'

const { SOPHOS_API_REGION } = env

const API_SIEM_URL = `https://api-${SOPHOS_API_REGION}.central.sophos.com/siem/v1/`

export async function getSophosAlerts(): Promise<Array<Array<sophosSiemAlert>>>{
  const token = await getSophosJWT()
  const tenants = await getSophosTenants()
  const alertsPromises = tenants.map(tenant => getSophosAlert(token, tenant))
  const alerts = await Promise.all(alertsPromises)
  return alerts
}

export async function getSophosEvents(): Promise<Array<Array<sophosSiemEvent>>>{
  const token = await getSophosJWT()
  const tenants = await getSophosTenants()
  const alertsPromises = tenants.map(tenant => getSophosEvent(token, tenant))
  const events = await Promise.all(alertsPromises)
  return events
}

async function getSophosAlert(token: string, tenant_id: string): Promise<Array<sophosSiemAlert>>{
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

async function getSophosEvent(token: string, tenant_id: string): Promise<Array<sophosSiemEvent>>{
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
  const jsonData: sophosSiemEvents = JSON.parse(data)
  return jsonData.items
}
