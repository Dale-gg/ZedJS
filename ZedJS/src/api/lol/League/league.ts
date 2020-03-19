import { endpointsV4 } from '../../../endpoints/endpoints'
import { SummonerLeagueDto } from '../../../classes/dto/league/summoner-league/summoner-league.dto'
import { Queues, Tiers, Divisions, Regions } from '../../../classes/enums'
import { LeagueListDTO } from '../../../classes/dto/league/league-item/league-list.dto'
import { BaseApiLol } from '../base/base.api.lol'

/**
 * League methods
 */
export class LeagueApi extends BaseApiLol {
  /**
   * Get summoner leagues
   * @param encryptedSummonerId Encrypted summoner ID. Max length 63 characters.
   * @param region
   */
  public async bySummoner (encryptedSummonerId: string, region: Regions) {
    const params = {
      encryptedSummonerId
    }
    return this.request<SummonerLeagueDto[]>(region, endpointsV4.SummonerLeague, params)
  }
  /**
   * Get league by id
   * @param leagueId
   * @param region
   */
  public async get (leagueId: string, region: Regions) {
    const params = {
      leagueId
    }
    return this.request<LeagueListDTO>(region, endpointsV4.League, params)
  }
  /**
   * Get challenger league by queue
   * @param queue Note that the queue value must be a valid ranked queue.
   * @param region
   */
  public async getChallengerLeaguesByQueue (queue: Queues, region: Regions) {
    const params = {
      queue
    }
    return this.request<LeagueListDTO>(region, endpointsV4.ChallengerLeaguesByQueue, params)
  }
  /**
   * Get grandmaster league by queue
   * @param queue Note that the queue value must be a valid ranked queue.
   * @param region
   */
  public async getGrandMasterLeagueByQueue (queue: Queues, region: Regions) {
    const params = {
      queue
    }
    return this.request<LeagueListDTO>(region, endpointsV4.GrandMasterLeaguesByQueue, params)
  }
  /**
   * Get master league by queue
   * @param queue Note that the queue value must be a valid ranked queue.
   * @param region
   */
  public async getMasterLeagueByQueue (queue: Queues, region: Regions) {
    const params = {
      queue
    }
    return this.request<LeagueListDTO>(region, endpointsV4.MasterLeaguesByQueue, params)
  }
}
