import { MatchlistMatches } from './matchlist-match.dto'

export class MatchlistDto {
  /**
   * Matches listing
   */
  matches: MatchlistMatches[]
  /**
   * Total games
   */
  totalGames: number
  /**
   * Start index
   */
  startIndex: number
  /**
   * End index
   */
  endIndex: number
}