/**
 *
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'))
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {}
    }
    root.SwaggerJsClient.IntrospectionResponse = factory(
      root.SwaggerJsClient.ApiClient
    )
  }
})(this, function(ApiClient) {
  'use strict'

  /**
   * The IntrospectionResponse model module.
   * @module model/IntrospectionResponse
   * @version Latest
   */

  /**
   * Constructs a new <code>IntrospectionResponse</code>.
   * @alias module:model/IntrospectionResponse
   * @class
   */
  var exports = function() {
    var _this = this
  }

  /**
   * Constructs a <code>IntrospectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntrospectionResponse} obj Optional instance to populate.
   * @return {module:model/IntrospectionResponse} The populated <code>IntrospectionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean')
      }
      if (data.hasOwnProperty('aud')) {
        obj['aud'] = ApiClient.convertToType(data['aud'], ['String'])
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String')
      }
      if (data.hasOwnProperty('exp')) {
        obj['exp'] = ApiClient.convertToType(data['exp'], 'Number')
      }
      if (data.hasOwnProperty('ext')) {
        obj['ext'] = ApiClient.convertToType(data['ext'], { String: Object })
      }
      if (data.hasOwnProperty('iat')) {
        obj['iat'] = ApiClient.convertToType(data['iat'], 'Number')
      }
      if (data.hasOwnProperty('iss')) {
        obj['iss'] = ApiClient.convertToType(data['iss'], 'String')
      }
      if (data.hasOwnProperty('nbf')) {
        obj['nbf'] = ApiClient.convertToType(data['nbf'], 'Number')
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String')
      }
      if (data.hasOwnProperty('sub')) {
        obj['sub'] = ApiClient.convertToType(data['sub'], 'String')
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(
          data['token_type'],
          'String'
        )
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String')
      }
    }
    return obj
  }

  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined
  /**
   * @member {Array.<String>} aud
   */
  exports.prototype['aud'] = undefined
  /**
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined
  /**
   * @member {Number} exp
   */
  exports.prototype['exp'] = undefined
  /**
   * Session represents arbitrary session data.
   * @member {Object.<String, Object>} ext
   */
  exports.prototype['ext'] = undefined
  /**
   * @member {Number} iat
   */
  exports.prototype['iat'] = undefined
  /**
   * @member {String} iss
   */
  exports.prototype['iss'] = undefined
  /**
   * @member {Number} nbf
   */
  exports.prototype['nbf'] = undefined
  /**
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined
  /**
   * Here, it's sub
   * @member {String} sub
   */
  exports.prototype['sub'] = undefined
  /**
   * @member {String} token_type
   */
  exports.prototype['token_type'] = undefined
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined

  return exports
})