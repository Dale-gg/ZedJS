export class RunesDTO {
  id: number
  key: string
  icon: string
  slots: {
    runes: RunesSlotsDTO[]
  }
}

export class RunesSlotsDTO {
  id: number
  key: string
  icon: string
  name: string
  shortDesc: string
  longDesc: string
}