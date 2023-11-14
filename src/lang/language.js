import { nextTick } from 'vue'

class Language {
    constructor(i18n) {
        this.i18n = i18n
    }
    /**
     * 
     * @param locale 设置语言
     */
     setI18nLanguage(locale) {
        if (this.i18n.mode === 'legacy') {
            this.i18n.global.locale = locale
        } else {
            this.i18n.global.locale = locale
        }
        let html = document.querySelector('html')
        html && html.setAttribute('lang', locale)
    }

    /**
     * 加载语言包
     * @param locale
     * @returns 
     */
    async loadLocaleMessages(locale) {
        this.setI18nLanguage(locale)
        return nextTick()
    }
}

export default Language