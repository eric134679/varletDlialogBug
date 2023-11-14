import { defineStore } from 'pinia'
import {language} from "@/lang/index.js";
import {Snackbar} from "@varlet/ui";
import {t} from "@/lang/t.js";

export const useGetLocalStore = defineStore('useGetLocal', {
    state: () => ({
        preferDark: false,
        locale:'zh-CN' ,// i18n 多语言默认设置
        tabBarIndex:0
    }),
    actions: {
        setLocale(locale) {
            if(locale === 'zh-CN')
                Snackbar.success(t('language.switchChinese'))
            else if(locale === 'en-US')
                Snackbar.success(t('language.switchEnglish'))
            this.locale = locale
            language.setI18nLanguage(locale)
        }
    },
    persist: {
        paths: ['preferDark' , 'locale'],
        exclude: []
    }
})