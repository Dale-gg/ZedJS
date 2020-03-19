import { INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status-codes'
import { Regions } from '../../../classes/enums'
import { endpointsV4 } from '../../../endpoints/endpoints'
import { ThirdPartyCodeDTO } from '../../../classes/dto/thirdpartycode/third-party-code.dto'
import { ApiResponseDTO } from '../../../classes/dto/api/api'
import { BaseApiLol } from '../base/base.api.lol'

/**
 * Third party methods
 */
export class ThirdPartyCode extends BaseApiLol {
  private errorHandler (e: any) {
    const { statusCode } = e.error || e
    if (statusCode !== INTERNAL_SERVER_ERROR && statusCode !== NOT_FOUND) {
      throw e
    }
  }
  /**
   * Valid codes must be no longer than 256 characters and only use valid characters: 0-9, a-z, A-Z, and -
   * @param encryptedSummonerId
   * @param region
   */
  public async get (encryptedSummonerId: string, region: Regions): Promise<ApiResponseDTO<ThirdPartyCodeDTO>> {
    let code
    let rateLimits
    const params = {
      encryptedSummonerId
    }
    try {
      const data = await this.request<string>(region, endpointsV4.ThirdPartyCode, params)
      rateLimits = data.rateLimits
      code = data.response
    } catch (e) {
      this.errorHandler(e)
      code = null
    }
    return {
      rateLimits,
      response: {
        code
      }
    }
  }
}
