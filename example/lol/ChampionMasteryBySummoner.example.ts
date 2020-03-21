import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function championMasteryBySummoner () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.Summoner.getByName(config.summonerName, region)
  return await api.Champion.masteryBySummoner(id, region)
}
