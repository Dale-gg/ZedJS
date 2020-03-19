import { LolStatusServiceDTO } from './lol-status-service.dto'

export class LolStatusDTO {
  name: string
  region_tag: string
  hostname: string
  slug: string
  locales: string[]
  services: LolStatusServiceDTO
}
