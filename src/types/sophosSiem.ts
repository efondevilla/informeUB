
export interface sophosSiemAlerts{
  has_more: boolean
  next_cursor: string
  items: Array<sophosSiemAlertItem>
}

export interface sophosSiemAlertItem {
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
  core_remedy_items?: sophosSiemCoreRemedyItems
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

