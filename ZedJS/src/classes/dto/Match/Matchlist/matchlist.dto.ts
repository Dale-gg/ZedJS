import { MatchlistMatches } from './matchlist-match.dto'

export class MatchlistDto {
  matches: MatchlistMatches[]
  totalGames: number
  startIndex: number
  endIndex: number
}