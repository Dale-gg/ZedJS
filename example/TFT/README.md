## StaticFiles

```js
import { TftApi } from '../../src'

export function staticFilesExample () {
  const api = new TftApi().StaticFiles
  return [
    api.Champions(),
    api.Hexes(),
    api.Items(),
    api.Traits()
  ]
}
```

---

## SummonerTFT

```js
import { TftApi } from '../../src'
import { configTft } from '../config/config'

const api = new TftApi()

export async function getSummonerTft () {
  return api.Summoner.getByName(configTft.summonerName, configTft.region)
}
```

---

## TftMatchDetails

```js
import { TftApi } from '../../src'
import { configTft } from '../config/config'
import { getSummonerTft } from './SummonerTFT.example'

const api = new TftApi()

export async function matchDetailsTft () {
  const {
    response: {
      puuid
    }
  } = await getSummonerTft()
  const {
    response: [matchId]
  } = await api.Match.list(puuid, configTft.tftRegion)
  return api.Match.get(matchId, configTft.tftRegion)
}
```

---

## TftMatchList

```js
import { TftApi } from '../../src'
import { configTft } from '../config/config'
import { getSummonerTft } from './SummonerTFT.example'

const api = new TftApi()

export async function matchListTft () {
  const {
    response: {
      puuid
    }
  } = await getSummonerTft()
  return api.Match.list(puuid, configTft.tftRegion)
}
```

---

## TftMatchListDetails

```js
import { TftApi } from '../../src'
import { configTft } from '../config/config'
import { getSummonerTft } from './SummonerTFT.example'

const api = new TftApi()

export async function matchListDetailsTft () {
  const {
    response: {
      puuid
    }
  } = await getSummonerTft()
  return api.Match.listWithDetails(puuid, configTft.tftRegion)
}
```

---