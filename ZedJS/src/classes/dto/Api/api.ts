import { RateDto } from '../rate/rate.dto'

export class ApiResponseDTO<T> {
  readonly rateLimits?: RateDto
  readonly response: T
}