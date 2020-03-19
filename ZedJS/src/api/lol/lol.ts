import { MatchApi } from './match/match'
import { LeagueApi } from './league/league'
import { SummonerApi } from './summoner/summoner'
import { ThirdPartyCode } from './thirdPartyCode/thirdPartyCode'
import { ChampionApi } from './champion/champion'
import { StatusApi } from './status/status'
import { DataDragonService } from './ddragon/DataDragonService'
import { SeedApi } from './seed/seed'
import { BaseApiLol } from './base/base.api.lol'

export class LolApi extends BaseApiLol {
  public readonly Match = new MatchApi(this.getParam())
  public readonly League = new LeagueApi(this.getParam())
  public readonly Summoner = new SummonerApi(this.getParam())
  public readonly ThirdPartyCode = new ThirdPartyCode(this.getParam())
  public readonly Champion = new ChampionApi(this.getParam())
  public readonly Status = new StatusApi(this.getParam())
  public readonly DataDragon = new DataDragonService()
  public readonly Seed = new SeedApi()
}
