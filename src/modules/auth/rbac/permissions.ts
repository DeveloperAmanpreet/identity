export class PimPermissions {
  static readonly PimApplication = class {
    static readonly Read = new PimPermissions('pim:v1:application:read')
  }
  static readonly Attributes = class {
    static readonly Create = new PimPermissions('pim:v1:attributes:create')
    static readonly Read = new PimPermissions('pim:v1:attributes:read')
    static readonly Update = new PimPermissions('pim:v1:attributes:update')
    static readonly Delete = new PimPermissions('pim:v1:attributes:delete')
    static readonly Import = new PimPermissions(
      'pim:v1:attributes.import:update'
    )
    static readonly BulkExport = new PimPermissions(
      'pim:v1:attributes.bulkactions.export:update'
    )
    static readonly SettingsRead = new PimPermissions('pim:v1:settings:read')
  }
  static readonly Catalog = class {
    static readonly Create = new PimPermissions('pim:v1:catalog:create')
    static readonly Read = new PimPermissions('pim:v1:catalog:read')
    static readonly Update = new PimPermissions('pim:v1:catalog:update')
    static readonly Delete = new PimPermissions('pim:v1:catalog:delete')
    static readonly Publish = new PimPermissions(
      'pim:v1:catalog.publish:update'
    )
    static readonly SaveDraft = new PimPermissions(
      'pim:v1:catalog.savedraft:update'
    )
    static readonly ChangePrimaryHierarchy = new PimPermissions(
      'pim:v1:catalog.changeprimaryhierarchy:update'
    )
    static readonly Import = new PimPermissions('pim:v1:catalog.import:update')
    static readonly BulkExport = new PimPermissions(
      'pim:v1:catalog.bulkactions.export:update'
    )
    static readonly BulkUpdateValues = new PimPermissions(
      'pim:v1:catalog.bulkactions.updatevalues:update'
    )
    static readonly BulkChangePrimaryHierarchy = new PimPermissions(
      'pim:v1:catalog.bulkactions.changeprimaryhierarchy:update'
    )
    static readonly BulkRead = new PimPermissions(
      'pim:v1:catalog.bulkactions:read'
    )
    static readonly BulkUpdate = new PimPermissions(
      'pim:v1:catalog.bulkactions:update'
    )
    static readonly BulkDelete = new PimPermissions(
      'pim:v1:catalog.bulkactions:delete'
    )
    static readonly RequestReview = new PimPermissions(
      'pim:v1:catalog.requestreview:update'
    )
    static readonly ReviewRead = new PimPermissions(
      'pim:v1:catalog.review:read'
    )
    static readonly ReviewApprove = new PimPermissions(
      'pim:v1:catalog.review.approve:update'
    )
    static readonly ReviewReject = new PimPermissions(
      'pim:v1:catalog.review.reject:update'
    )
    static readonly ReviewComment = new PimPermissions(
      'pim:v1:catalog.review.comment:update'
    )
  }
  static readonly Hierarchy = class {
    static readonly Create = new PimPermissions('pim:v1:hierarchy:create')
    static readonly Read = new PimPermissions('pim:v1:hierarchy:read')
    static readonly Update = new PimPermissions('pim:v1:hierarchy:update')
    static readonly Rename = new PimPermissions(
      'pim:v1:hierarchy.rename:update'
    )
    static readonly Delete = new PimPermissions('pim:v1:hierarchy:delete')
    static readonly ItemAttributesRead = new PimPermissions(
      'pim:v1:hierarchy.itemattributes:read'
    )
    static readonly ItemAttributesSet = new PimPermissions(
      'pim:v1:hierarchy.itemattributes.set:update'
    )
    static readonly HierarchyAttributesRead = new PimPermissions(
      'pim:v1:hierarchy.hierarchyattributes:read'
    )
    static readonly HierarchyAttributesSet = new PimPermissions(
      'pim:v1:hierarchy.hierarchyattributes.set:update'
    ) // HierarchyHierarchyAttributesRead in json file
    static readonly AlternateHierarchyPublish = new PimPermissions(
      'pim:v1:hierarchy.alternate.publish:update'
    )
  }
  static readonly ImportHistory = class {
    static readonly FileSearchRead = new PimPermissions(
      'pim:v1:importhistory.filesearch:read'
    )
    static readonly Download = new PimPermissions(
      'pim:v1:importhistory.download:update'
    )
  }
  static readonly AttributeGroup = class {
    static readonly Create = new PimPermissions(
      'pim:v1:settings.attributegroup:create'
    )
    static readonly Read = new PimPermissions(
      'pim:v1:settings.attributegroup:read'
    )
    static readonly Update = new PimPermissions(
      'pim:v1:settings.attributegroup:update'
    )
    static readonly Delete = new PimPermissions(
      'pim:v1:settings.attributegroup:delete'
    )
  }
  static readonly AttributeMapping = class {
    static readonly Read = new PimPermissions(
      'pim:v1:settings.attributemapping:read'
    )
    static readonly Update = new PimPermissions(
      'pim:v1:settings.attributemapping:update'
    )
  }
  static readonly AdminOnlyPermission = PimPermissions.Catalog.Publish

  private readonly name: string

  constructor(name) {
    this.name = name
  }

  toString() {
    return this.name
  }
}

export class PermissionOperation {
  static readonly AllOf = new PermissionOperation('allOf')
  static readonly OneOf = new PermissionOperation('oneOf')
  private readonly name: string

  constructor(name) {
    this.name = name
  }

  toString() {
    return this.name
  }
}
