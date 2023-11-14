// snackbar.js
import { Snackbar } from '@varlet/ui'
export const createSnackbar = (type, text) => {
    Snackbar[type](text)
    if (type === 'loading') {
        setTimeout(() => {
            Snackbar.success("加载成功")
        }, 2000)
    }
}
