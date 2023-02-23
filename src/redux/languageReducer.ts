
interface LanguageState {
  language: 'en' | 'zh';
  languageList: {name: string, code: string}[];
}
const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    {name: '中文', code: 'zh'},
    {name: 'English', code: 'en'},
  ]
}

// state是store中的旧数据，action是指挥reducer函数做出数据变化的指令
export default (state = defaultState, action: any) => {
  // 返回新数据newState
  return state
}