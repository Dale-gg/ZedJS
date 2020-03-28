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