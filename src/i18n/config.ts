import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translation_en from './en.json'
import translation_zh from './zh.json'

const resources = {
  en: {
    // translation: {
    //   "Welcome to React": "Welcome to React and react-i18next"
    // }
    translation: translation_en
  },
  zh: {
    translation: translation_zh
  }
};
i18n
  // i18n框架会通过使用react-i18next插件来初始化
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // 上面创建的两个JSON文件
    resources,
    // 初始值
    lng: "zh", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      // 不会为了防止XSS攻击强行把HTML字符转化为普通的字符串
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;