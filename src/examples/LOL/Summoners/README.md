## SummonerByAccountID

```js
import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function summonerByAccountIDExample () {
  const { region } = config
  const {
    response: {
      accountId
    }
  } = await api.Summoner.getByName(config.summonerName, region)
  return await api.Summoner.getByAccountID(accountId, region)
}
```

---

## SummonerById

```js
import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function summonerByIdExample () {
  const { region } = config
  const { response: { id } } = await api.Summoner.getByName(config.summonerName, region)
  return await api.Summoner.getById(id, region)
}
```

---

## SummonerByName

```js
import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function summonerByNameExample () {
  return await api.Summoner.getByName(config.summonerName, config.region)
}
```

---

## SummonerByPUUID

```js
import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function summonerByPUUIDExample () {
  const { region } = config
  const { response: { puuid } } = await api.Summoner.getByName(config.summonerName, region)
  return await api.Summoner.getByPUUID(puuid, region)
}
```

---
