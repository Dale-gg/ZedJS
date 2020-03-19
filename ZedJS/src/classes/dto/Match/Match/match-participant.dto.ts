import { MatchParticipantsStatsDto } from './match-participants-stats.dto'
import { MatchParticipantsRuneDto } from './match-participants-rune.dto'
import { MatchParticipantsMasteryDto } from './match-participants-mastery.dto'

export class MatchParticipantDTO {
  stats: MatchParticipantsStatsDto
  participantId: number
  runes: MatchParticipantsRuneDto[]
  teamId: number
  spell2Id: number
  masteries: MatchParticipantsMasteryDto
  highestAchievedSeasonTier: string
  spell1Id: number
  championId: number
}
