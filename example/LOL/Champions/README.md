## ChampionMasteryBySummoner

```js
import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function championMasteryBySummoner () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.Summoner.getByName(config.summonerName, region)
  return await api.Champion.masteryBySummoner(id, region)
}
```

---

## ChampionMasteryBySummonerChampion

```js
import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function championMasteryBySummonerByChampion () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.Summoner.getByName(config.summonerName, region)
  return await api.Champion.masteryBySummonerChampion(id, 1, region)
}
```

---

## ChampionRotation

```js
import { LolApi } from '../../src'
import { Regions } from '../../src/constants'

export async function championRotationExample () {
  const api = new LolApi()
  return api.Champion.rotation(Regions.BRAZIL)
}
```

---

## ChampionsScore

```js
import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function championsScoreExample () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.Summoner.getByName(config.summonerName, region)
  return await api.Champion.championsScore(id, region)
}
```

---