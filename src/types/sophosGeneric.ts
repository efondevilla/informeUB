export interface sophosAccessToken {
  access_token: string
  errorCode: string
  expires_in: number
  message: string
  refresh_token: string
  token_type: string
  trackingId: string
}

export interface sophosOrganizationTenants {
  items: sophosOrganizationTenant[]
  pages: sophosPages
}

export interface sophosPages {
  current: number
  size: number
  maxSize: number
}

export interface sophosOrganizationTenant {
  id: string
  showAs: string
  name: string
  dataGeography: string
  dataRegion: string
  billingType: string
  partner: sophosOrganizationTenantPartner
  organization: sophosOrganizationTenantOrganization
  apiHost: string
  status: string
  primary: boolean
  contact: sophosOrganizationTenantContact
}

export interface sophosOrganizationTenantPartner {
  id: string
}

export interface sophosOrganizationTenantOrganization {
  id: string
}

export interface sophosOrganizationTenantContact {
  firstName: string
  lastName: string
  email: string
  phone?: string
  address: sophosOrganizationTenantAddress
}

export interface sophosOrganizationTenantAddress {
  address1: string
  state: string
  countryCode: string
  postalCode: string
}

export interface sophosOrganizationInfo {
  id: string
  idType: string
  apiHosts: sophosOrganizationInfoApiHosts
}

export interface sophosOrganizationInfoApiHosts {
  global: string
}
