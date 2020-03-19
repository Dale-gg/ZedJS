import { MatchParticipantsIdentitiesDto } from './match-participantsIdentities.dto'
import { MatchTeamsDto } from './match-teams.dto'
import { MatchParticipantDTO } from './match-participant.dto'

export class MatchDto {
  seasonId: number
  queueId: number
  gameId: number
  participantIdentities: MatchParticipantsIdentitiesDto[]
  gameVersion: string
  platformId: string
  gameMode: string
  mapId: string
  gameType: string
  teams: MatchTeamsDto[]
  participants: MatchParticipantDTO[]
  gameDuration: number
  gameCreation: number
  remake: boolean
}
