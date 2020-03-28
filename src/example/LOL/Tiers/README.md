## ChallengerLeagueByQueue

```js
import { LolApi } from '../../src'
import { config } from '../config/config'
import { Queues } from '../../src/constants'

const api = new LolApi()

export async function challengerLeagueByQueueExample () {
  return await api.League.getChallengerLeaguesByQueue(Queues.RANKED_SOLO_5x5, config.region)
}
```

---

## GrandMasterLeagueByQueue

```js
import { LolApi } from '../../src'
import { config } from '../config/config'
import { Queues } from '../../src/constants'

const api = new LolApi()

export async function grandmasterLeagueByQueueExample () {
  return await api.League.getGrandMasterLeagueByQueue(Queues.RANKED_SOLO_5x5, config.region)
}
```

---

## MasterLeagueByQueue

```js
import { LolApi } from '../../src'
import { config } from '../config/config'
import { Queues } from '../../src/constants'

const api = new LolApi()

export async function masterLeagueByQueue () {
  return await api.League.getMasterLeagueByQueue(Queues.RANKED_SOLO_5x5, config.region)
}
```

---

## League

```js
import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function leagueExample () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.Summoner.getByName(config.summonerName, region)
  const {
    response: [league]
  } = await api.League.bySummoner(id, region)
  return await api.League.get(league.leagueId, region)
}
```

---

## LeagueEntries

```js
import { LolApi } from '../../src'
import { Queues, Tiers, Divisions, Regions } from '../../src/constants'

export async function leagueEntriesExample () {
  const api = new LolApi()
  return await api.League.entries(Queues.RANKED_SOLO_5x5, Tiers.BRONZE, Divisions.I, Regions.BRAZIL)
}
```

---
