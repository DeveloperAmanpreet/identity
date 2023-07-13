export const APP_CONSTANTS = {
  DOC_HTML_FILENAME: 'redoc-static.html',
  ENV_VALUE: 'env',
  SERVICE: 'service',
  REGION: 'region',
  TIMESTAMP_FORMAT: 'YYYY-MM-DD HH:mm:ss',
  TYPE_OF_IMPORT: {
    ATTRIBUTE: 'attribute'
  },
  PIM: 'pim',
  API_KEY: 'apiKey',
  USER_ID: 'userId',
  SUB: 'sub',
  ASTERISK: '*'
}

export const ENV = {
  TEST: 'test',
  LOCAL: 'local'
}

export const HEADERS = {
  // standard headers used for authentication and logging
  AUTHORIZATION: 'Authorization',
  aUTHORIZATION: 'authorization',
  CONTENT_LENGTH: 'Content-Length',

  // custom headers used for passing data between middlewares within this library
  X_ACCOUNTS: 'x-accounts',
  X_VERIFIED_TENANT: 'x-verified-tenant',
  X_SUB: 'x-sub',
  X_USER_ID: 'x-user-id',
  X_API_KEY: 'x-api-key',

  //new headers supported as part of standardization
  X_SITE_CONTEXT: 'x-site-context',
  X_FABRIC_REQUEST_ID: 'x-fabric-request-id',
  X_FABRIC_TENANT_ID: 'x-fabric-tenant-id',
  X_FABRIC_STAGE: 'x-fabric-stage'
}

export const TOGGLES = {
  TOKEN_INTROSPECT: 'token-introspect'
}

export const ERR_IN_REQ_LOGS = {
  ERROR_STACK: 'ERR_STACK',
  ERROR_CODE: 'ERR_CODE',
  ERROR_MESSAGE: 'ERR_MESSAGE',
  ERROR_TYPE: 'ERR_TYPE'
}
