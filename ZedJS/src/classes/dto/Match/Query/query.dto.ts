import { Seasons, Champions } from '../../../enums'

export class MatchQueryDTO {
  champion?: Champions | Champions[]
  queue?: number | number[]
  season?: Seasons | Seasons[]
  endTime?: number
  beginTime?: number
  endIndex?: number
  beginIndex?: number
}
