
import i18n from 'i18next'

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
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action: any) => {
  // 返回新数据newState
  switch (action.type) {
    case 'change_language':
      i18n.changeLanguage(action.payload)
      return { ...state, language: action.payload }
    case 'add_language':
      return {
        ...state,
        languageList: [...state.languageList, action.payload]
      }
    default:
      return state
  }
}