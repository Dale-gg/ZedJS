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