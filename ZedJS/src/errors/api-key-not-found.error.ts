import * as HttpCodes from 'http-status-codes'
import { IErrors } from '.'

const message = 'Api key not found'

/**
 * Not api key found
 */
export class ApiKeyNotFound extends Error implements IErrors {
  readonly status = HttpCodes.NOT_IMPLEMENTED
  readonly name = 'ApiKeyNotFound'

  // This isn't a useless constructor because this error doesn't need a message parameter
  constructor () {
    super(message)
    Object.setPrototypeOf(this, ApiKeyNotFound.prototype)
  }
}
