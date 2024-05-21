export interface sophosSiemEvents {
  has_more: boolean
  items: sophosSiemEvent[]
  next_cursor: string
}

export interface sophosSiemEvent {
  user_id: string
  created_at: string
  source_info: sophosSiemSourceInfo
  customer_id: string
  severity: string
  endpoint_id: string
  endpoint_type: string
  when: string
  source: string
  type: string
  location: string
  id: string
  group: string
  name: string
  threat?: string
  origin?: string
  appSha256?: string
  appCerts?: sophosSiemAppCert[]
  core_remedy_items?: sophosSiemCoreRemedyItem
}

export interface sophosSiemAlerts {
  has_more: boolean
  items: sophosSiemAlert[]
  next_cursor: string
}

export interface sophosSiemAlert {
  javaUUID: string
  actionable: boolean
  customer_id: string
  created_at: string
  severity: string
  threat?: string
  threat_cleanable?: boolean
  event_service_event_id: string
  when: string
  description: string
  source: string
  type: string
  location: string
  id: string
  data: sophosSiemAlertsData
}

export interface sophosSiemAlertsData {
  core_remedy_items?: sophosSiemCoreRemedyItems
  created_at: number
  endpoint_id: string
  endpoint_java_id: string
  endpoint_platform: string
  endpoint_type: string
  event_service_id: sophosSiemEventServiceId
  inserted_at: number
  source_app_id?: string
  source_info: sophosSiemSourceInfo
  threat_id?: sophosSiemThreatId
  threat_status?: string
  user_match_id: sophosSiemUserMatchId
  user_match_uuid?: sophosSiemUserMatchUuid
}

export interface sophosSiemEventServiceId {
  type: number
  data: string
}

export interface sophosSiemSourceInfo {
  ip: string
}

export interface sophosSiemAppCert {
  signer: string
  thumbprint: string
}

export interface sophosSiemCoreRemedyItems {
  items: sophosSiemCoreRemedyItem[]
  totalItems: number
}

export interface sophosSiemCoreRemedyItem {
  type: string
  result: string
  suspendResult: string
  descriptor: string
  processPath: string
  sophosPid: string
}

export interface sophosSiemThreatId {
  timestamp: number
  date: number
}

export interface sophosSiemUserMatchId {
  timestamp: number
  date: number
}

export interface sophosSiemUserMatchUuid {
  type: number
  data: string
}
