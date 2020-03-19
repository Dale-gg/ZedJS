import { MatchlistDto } from '../../../classes/dto/match/matchlist/matchlist.dto'
import { Regions } from '../../../classes/enums'
import { endpointsV4 } from '../../../endpoints/endpoints'
import { MatchDto } from '../../../classes/dto/match/match/Match.dto'
import { MatchQueryDTO } from '../../../classes/dto/match/query/query.dto'
import { NOT_FOUND } from './node_modules/http-status-codes'
import { GenericError } from '../../../errors'
import { ApiResponseDTO } from '../../../classes/dto'
import { BaseApiLol } from '../base/base.api.lol'

/**
 * Match methods
 */
export class MatchApi extends BaseApiLol {
  // Private methods
  private generateResponse (error: GenericError): ApiResponseDTO<MatchlistDto> {
    return {
      rateLimits: error.rateLimits,
      response: {
        matches: [],
        startIndex: 0,
        endIndex: 0,
        totalGames: 0
      }
    }
  }
  private map (match: ApiResponseDTO<MatchDto>) {
    match.response.teams = match.response.teams.map((team) => {
      team.win = (team.win as any) === 'Win'
      return team
    })
    match.response.remake = match.response.teams.every(t => !t.firstTower)
    return match
  }
  /**
   * Get match details
   * @param matchId Match id
   * @param region
   */
  public async get (matchId: number, region: Regions) {
    const params = {
      matchId
    }
    const data = await this.request<MatchDto>(region, endpointsV4.Match, params)
    return this.map(data)
  }
  /**
   * Summoner match listing
   * @param encryptedAccountId Encrypted summoner ID. Max length 63 characters.
   * @param region
   */
  public async list (encryptedAccountId: string, region: Regions, query?: MatchQueryDTO) {
    const params = {
      encryptedAccountId
    }
    try {
      return await this.request<MatchlistDto>(region, endpointsV4.MatchListing, params, false, query)
    } catch (e) {
      if (e.status !== NOT_FOUND) {
        throw e
      }
      return this.generateResponse(e)
    }
  }
}
