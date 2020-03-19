import { LolStatusServiceIncidentsUpdate } from './lol-status-service-incidents-updates.dto'

export class LolStatusServiceStatusIncident {
  active: boolean
  created_at: string
  id: number
  updates: LolStatusServiceIncidentsUpdate
}
