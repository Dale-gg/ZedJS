import { MatchParticipantsStatsDto } from './match-participants-stats.dto'
import { MatchParticipantsRuneDto } from './match-participants-rune.dto'
import { MatchParticipantsTimelineDto } from './match-participants-timeline.dto'
import { MatchParticipantsMasteryDto } from './match-participants-mastery.dto'

export class MatchParticipantDTO {
  stats: MatchParticipantsStatsDto
  participantId: number
  runes: MatchParticipantsRuneDto[]
  timeline: MatchParticipantsTimelineDto
  teamId: number
  spell2Id: number
  masteries: MatchParticipantsMasteryDto
  highestAchievedSeasonTier: string
  spell1Id: number
  championId: number
}
