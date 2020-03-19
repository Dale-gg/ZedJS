import { BannedChampion } from './match-teams-bans.dto'

export class MatchTeamsDto {
  firstDragon: boolean
  firstInhibitor: boolean
  bans: BannedChampion[]
  baronKills: number
  firstRiftHerald: boolean
  firstBaron: boolean
  riftHeraldKills: number
  firstBlood: boolean
  teamId: number
  firstTower: boolean
  vilemawKills: number
  inhibitorKills: number
  towerKills: number
  dominionVictoryScore: number
  win: boolean
  dragonKills: number
}
