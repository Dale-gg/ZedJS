import * as _ from 'lodash'
import { IErrors } from '.'
import { TOO_MANY_REQUESTS } from 'http-status-codes'
import { RateDto } from '../classes/dto/Rate/rate.dto'

const message = 'Rate limit error'

/**
 * Rate limit error
 */
export class RateLimitError extends Error implements IErrors {
  readonly status: number = TOO_MANY_REQUESTS
  readonly rateLimits: RateDto

  constructor (rateLimits: RateDto) {
    super(message)
    this.rateLimits = rateLimits
    Object.setPrototypeOf(this, RateLimitError.prototype)
  }
}
