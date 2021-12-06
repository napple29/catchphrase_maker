#!/usr/bin/env node

const outputAffiliationCatchCopy = (content, name) => {
  const obj = {
    0: `【${content}に舞い降りた堕天使★${name}】`,
    1: `【後に${content}の守護神となる者、それが${name}】`,
    2: `【骨の髄まで${content}に忠実★${name}】`,
    3: `【生粋の${content}チルドレン★${name}】`,
    4: `【生まれ変わっても${content}に入りたい。${name}】`,
    5: `【${content}のアルティメットフィクサー（究極の黒幕）${name}】`,
    6: `【${content}の期待の星 ${name}】`,
    7: `【${content}でもう一度青春がしたい。${name}】`,
    8: `【三度の飯より${content}が好き。${name}】`
  }

  const num = Math.floor(Math.random() * 9)
  const catchCopy = obj[num]
  return console.log(catchCopy)
}
const outputSpecialSkill = (content, name) => {
  const obj = {
    0: `【${content}ひとすじ20年・${name}】`,
    1: `【奇跡の${content}使い・${name}名人】`,
    2: `【${content}の鬼・その名も${name}】`,
    3: `【息をするように${content}。${name}】`,
    4: `【夢の中でも${content}したい・${name}】`,
    5: `【${content}なら、${name}の右に出る者はいない】`,
    6: `【寝ても醒めても${content}・${name}】`,
    7: `【百戦錬磨の${content}術・${name}】`,
    8: `【生まれ変わっても${content}したい・${name}】`
  }

  const num = Math.floor(Math.random() * 9)
  const catchCopy = obj[num]
  return console.log(catchCopy)
}

async function main () {
  const { Select } = require('enquirer')

  const choices = new Select({
    name: 'content',
    message: 'キャッチフレーズに、どちらを入れますか?',
    choices: ['特技', '所属']
  })

  await choices
    .run()
    .then()
    .catch(console.error)

  const { Form } = require('enquirer')

  if (choices.value === '所属') {
    const response = new Form({
      name: 'catchCopy',
      message: 'キャッチフレーズに入れたい所属先と名前を入力してください',
      choices: [
        { name: 'contentName', message: '所属' },
        { name: 'username', message: '名前' }
      ]
    })

    await response
      .run()
      .then(value => console.log('\nあなたのキャッチフレーズは…'))
      .then(value => outputAffiliationCatchCopy(response.values.contentName, response.values.username))
      .catch(console.error)
  } else if (choices.value === '特技') {
    const response = new Form({
      name: 'catchCopy',
      message: 'キャッチフレーズに入れたい特技(名詞)と名前を入力してください',
      choices: [
        { name: 'contentName', message: '特技' },
        { name: 'username', message: '名前' }
      ]
    })

    await response
      .run()
      .then(value => console.log('\nあなたのキャッチフレーズは…'))
      .then(value => outputSpecialSkill(response.values.contentName, response.values.username))
      .catch(console.error)
  }
}

main()
