import { Regions } from '../../../classes/enums'
import { endpointsV4, endpointsV3 } from '../../../endpoints/endpoints'
import { ChampionMasteryDTO } from '../../../classes/dto/champion/champion-mastery.dto'
import { BaseApiLol } from '../base/base.api.lol'

/**
 * Third party methods
 */
export class ChampionApi extends BaseApiLol {
  /**
   * Get champion rotation
   * @param region Riot region
   */
  public async rotation (region: Regions) {
    return this.request(region, endpointsV3.ChampionRotation)
  }
  /**
   * Champion mastery by summoner
   * @param encryptedSummonerId
   * @param region
   */
  public async masteryBySummoner (encryptedSummonerId: string, region: Regions) {
    const params = {
      encryptedSummonerId
    }
    return this.request<ChampionMasteryDTO[]>(region, endpointsV4.ChampionMasteryBySummoner, params)
  }
  /**
   * Champion mastery by summoner
   * @param encryptedSummonerId
   * @param region
   */
  public async masteryBySummonerChampion (encryptedSummonerId: string, championId: number, region: Regions) {
    const params = {
      encryptedSummonerId,
      championId
    }
    return this.request<ChampionMasteryDTO>(region, endpointsV4.ChampionMasteryBySummonerChampion, params)
  }
}
