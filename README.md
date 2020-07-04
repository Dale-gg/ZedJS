<h1 align="center">
    <img alt="First lib" title="#delicinhas" src=".github/zedjs-logo.png" width="200px" />
</h1>

<h3 align="center">
  ⚔ ZedJS 👾
</h3>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Dale-gg/ZedJS">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Dale-gg/ZedJS">

  <a href="https://github.com/Dale-gg/ZedJS/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Dale-gg/ZedJS">
  </a>

  <a href="https://github.com/Dale-gg/ZedJS/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Dale-gg/ZedJS">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#-technology">🚀 Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">💻 Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tutorial">⏭ Tutorial</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-examples">⏯️ Examples</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">🤔 How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">📝 License</a>
</p>

## 🚀 Technology

This project was developed with the following technologies:

- [NodeJS](https://nodejs.org/en/)
- [RiotAPI](https://developer.riotgames.com/)
- [DDragon](https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html)

## 💻 Project

Fetch all the Riot API with ZedJS lib!

## ⏭ Tutorial

### Install

```js
npm install @dale-gg/ZedJS / yarn add @dale-gg/ZedJS
```

### .env

```js
RIOT_API_KEY=YOUR_API_KEY_ON_.ENV
```

League of Legends:

```js
import { LolApi, Constants } from '@dale-gg/zedjs'

const api = new LolApi()

export async function summonerByNameExample () {
  return await api.Lol.Summoner.getByName('iLenon7', Constants.Regions.BRAZIL)
}
```

Teamfight Tatics:

```js
import { TftApi, Constants } from '@dale-gg/zedjs'

const api = new TftApi()

export async function matchListTft () {
  const {
    response: {
      puuid
    }
  } = api.Summoner.getByName('iLenon7', Constants.Regions.BRAZIL)
  return api.Match.list(puuid, Constants.TftRegions.TftRegions.AMERICAS)
}
```

---

## ⏯️ Examples

You can find the **documentation** here;

- [DOCUMENTATION](https://github.com/Dale-gg/ZedJS/wiki/%F0%9F%93%9D-ZedJS-Docs)

And more **example** on how to use this lib here:

- [EXAMPLES](https://github.com/Dale-gg/ZedJS/tree/master/example)
  
---

## 🤔 How to contribute

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

After the merge of your pull request is done, you can delete your branch.

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE.md) for more details.

---

Made with 🖤 by [Galakticos Team](https://github.com/orgs/Dale-gg/teams/galakticos-team) :wave:
