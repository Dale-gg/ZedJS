## GameModes

```js
import { LolApi } from '../../src'

const api = new LolApi()

export async function gameModesDataDragon () {
  return api.DataDragon.getGameModes()
}
```

---

## GameTypes

```js
import { LolApi } from '../../src'

const api = new LolApi()

export async function gameTypessDataDragon () {
  return api.DataDragon.getGameTypes()
}
```

---

## GetChampion by ID

```js
import { LolApi } from '../../src'
import { RealmServers, Champions } from '../../src/constants'

const api = new LolApi()

export async function getChampionDetailsDataDragon () {
  return api.DataDragon.getChampion(Champions.ZED)
}
```

---

## GetChampionList

```js
import { LolApi } from '../../src'
import { RealmServers, Champions } from '../../src/constants'

const api = new LolApi()

export async function getChampionListDataDragon () {
  return api.DataDragon.getChampion()
}
```

---

## Languages

```js
import { LolApi } from '../../src'

const api = new LolApi()

export async function languagesDataDragon () {
  return api.DataDragon.getLanguages()
}
```

---

## Maps

```js
import { LolApi } from '../../src'

const api = new LolApi()

export async function mapsDataDragon () {
  return api.DataDragon.getMaps()
}
```

---

## Queues

```js
import { LolApi } from '../../src'

const api = new LolApi()

export async function queuesDataDragon () {
  return api.DataDragon.getQueues()
}
```

---

## Realms

```js
import { LolApi } from '../../src'
import { RealmServers } from '../../src/constants'

const api = new LolApi()

export async function realmsDataDragon () {
  return api.DataDragon.getRealms(RealmServers.BRAZIL)
}
```

---

## RunesReforged

```js
import { LolApi } from '../../src'

const api = new LolApi()

export async function runesReforgedDataDragon () {
  return api.DataDragon.getRunesReforged()
}
```

---

## Seasons

```js
import { LolApi } from '../../src'

const api = new LolApi()

export async function seasonsDataDragon () {
  return api.DataDragon.getSeasons()
}
```

---

## SeedMatchs

```js
import { LolApi } from '../../src'

const api = new LolApi()

export async function matchesSeedData () {
  const id = 1
  return api.Seed.matches(id)
}
```

---

## Versions

```js
import { LolApi } from '../../src'

const api = new LolApi()

export async function versionsDataDragon () {
  return api.DataDragon.getVersions()
}
```

---
