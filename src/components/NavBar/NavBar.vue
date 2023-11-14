<template>
  <var-app-bar :title="props.title">
    <template #left v-if="leftBtn">
      <var-button
          color="transparent"
          text-color="#fff"
          round
          text>
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
    <template #right>
      <div class="flex items-center">
        <div>
          <var-button text round @click="toggleDarks()" v-if="!isDark">
            <span class="text-xl">☀️</span>
          </var-button>
          <var-button text  round @click="toggleDarks()" v-if="isDark">
            <span class="text-xl">🌙</span>
          </var-button>
        </div>
        <div v-if="language">
          <var-menu v-model:show="languageBtn">
            <var-button
                color="transparent"
                text-color="#fff"
                round
                text>
              <var-icon name="translate" :size="24"  />
            </var-button>
            <template #menu>
              <var-cell ripple class="!w-32 ">
                <div class="flex items-center cursor-pointer" @click="switchLanguage('zh-CN')">
                  <img src="@/components/NavBar/assets/zh.svg" class="w-10 h-6">
                  <span> {{ $t('comp.navBar.chinese') }} </span>
                </div>
              </var-cell>
              <var-cell ripple class="!w-32">
                <div class="flex items-center cursor-pointer" @click="switchLanguage('en-US')">
                  <img src="@/components/NavBar/assets/us.svg" class="w-10 h-6">
                  <span>{{ $t('comp.navBar.english') }} </span>
                </div>
              </var-cell>
            </template>
          </var-menu>
        </div>
      </div>
    </template>
  </var-app-bar>
</template>
<script setup>
import {useDark} from "@/use/index.js";
import {useGetLocalStore} from "@/store/local.js";
import {Snackbar} from "@varlet/ui";
import { t } from '@/lang/t.js'
const LocalStore = useGetLocalStore()
const props = defineProps({
  title: {
    type: String,
    default: '标题'
  },
  leftBtn: {
    type: Boolean,
    default: true
  },
  language: {
    type: Boolean,
    default: true
  }
})
const {isDark, toggleDark} = useDark()

const languageBtn = ref(false)
function switchLanguage(language) {

  LocalStore.setLocale(language)
  languageBtn.value = false
}

function toggleDarks(){
  if(isDark.value){
    Snackbar.success(t('useDarkJs.DarkTips'))
    toggleDark()
  }else {
    Snackbar.success(t('useDarkJs.lightTps'))
    toggleDark()
  }
}
</script>