import { RateLimitDto } from '../rate/rate'

export class ApiResponseDTO<T> {
  readonly rateLimits?: RateLimitDto
  readonly response: T
}