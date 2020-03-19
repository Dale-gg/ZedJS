import { LolStatusServiceStatusIncident } from './lol-status-service-indicents.dto'

export class LolStatusServiceDTO {
  name: string
  status: string
  slug: string
  indicents: LolStatusServiceStatusIncident
}
