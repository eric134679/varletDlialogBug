import { createI18n , useI18n } from 'vue-i18n'
import Language from "./language"
import zh_CN from './zh-CN'
import en_US from './en-US'
// 语言库
const messages = {
    'zh-CN': zh_CN,
    'en-US': en_US
}
//创建实例
let i18n = createI18n({
    datetimeFormats: {},
    numberFormats: {},
    globalInjection: true, //是否全局注入
    silentTranslationWarn: true,
    messages: messages
});

const language = new Language(i18n);
export { language };
export default i18n;