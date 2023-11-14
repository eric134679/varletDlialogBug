import { useGetLocalStore } from '@/store/local.js'
import { darkTheme } from '@/styles/dark'
import { onMounted , ref } from 'vue'
import {StyleProvider , Snackbar} from "@varlet/ui";
import { useDark as d, useToggle } from '@vueuse/core'
import {t}  from '@/lang/t.js'


const LocalStore = useGetLocalStore()
export function useDark() {
  const saved = LocalStore.preferDark
  const isDark = ref(saved || (saved == null && window.matchMedia('(prefers-color-scheme: dark)').matches))
  function updateTheme() {
    if (isDark.value) {
      const isDark = d()
      const toggleDark = useToggle(isDark)
      StyleProvider(darkTheme)
      document.documentElement.classList.toggle( "dark");
      document.documentElement.classList.remove("light");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      StyleProvider(null)
      document.documentElement.classList.toggle( "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  function toggleDark() {
    isDark.value = !isDark.value
    LocalStore.preferDark = isDark.value
    updateTheme()
  }

  onMounted(updateTheme)

  return {
    isDark,
    toggleDark
  }
}
