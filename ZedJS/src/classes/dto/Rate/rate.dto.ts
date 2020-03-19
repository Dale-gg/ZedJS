export class RateDto {
    Type?: string
    RetryAfter?: number
    AppRateLimit: string
    MethodRateLimit: string
    AppRateLimitCount: string
    MethodRatelimitCount: string
    EdgeTraceId?: string
  }