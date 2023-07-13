export interface RequestContext {
  tenantId?: string
  account?: string
  stage?: string
  userId?: string
  requestId?: string
  Authorization?: string
  xSiteContext?: {
    account?: string
    stage?: string
    channel?: string | number
    date?: string
  }
  user?: {
    id: string
    firstName?: string
    lastName?: string
    email?: string
  }
  permissions?: string[]
}
