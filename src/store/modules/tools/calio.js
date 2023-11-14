import { defineStore } from 'pinia'
import {ElMessageBox,ElMessage,ElNotification} from 'element-plus'

export const useGetCalioStore = defineStore('useGetCalio', {
    state: () => ({
        textTemplate_default:`亲~非常抱歉给您带来了不便。关于退款问题，根据您所购买的{{{总价}}}元{{{总数}}}张卡片中有{{{损坏数}}}张无法使用的情况，我们会按照购买金额的比例退还给您相应的款项。经计算，每张卡片的实际价格为{{{单价}}}元，所以{{{损坏数}}}张的退款金额为{{{损坏总价}}}元，为了方便退款，我们为您取整退回{{{损坏总价取整}}}元，您看是否可以呢？如果您还有其他需要可以随时联系我们哦，我们将会一如既往的为您提供优质的服务，再次感谢您的支持与信任，期待与您的下次合作！`,
        textTemplate:`亲~非常抱歉给您带来了不便。关于退款问题，根据您所购买的{{{总价}}}元{{{总数}}}张卡片中有{{{损坏数}}}张无法使用的情况，我们会按照购买金额的比例退还给您相应的款项。经计算，每张卡片的实际价格为{{{单价}}}元，所以{{{损坏数}}}张的退款金额为{{{损坏总价}}}元，为了方便退款，我们为您取整退回{{{损坏总价取整}}}元，您看是否可以呢？如果您还有其他需要可以随时联系我们哦，我们将会一如既往的为您提供优质的服务，再次感谢您的支持与信任，期待与您的下次合作！`,
        formInput:{
            sumMoney:0, // 商品总价
            number:0,// 数量
            damagesNum:0,// 损坏
        }
    }),
    getters:{
        // getWebTitle(state) {
        //     return  state.webTitle = state.webTitle + '- 玉兔AI'
        // },
    },
    actions: {
        setTextTemplate(value) {
            this.textTemplate = value
        },
        setDefaultTemplate(){ // 重置
            this.textTemplate = this.textTemplate_default
            ElMessage.success('模板重置成功')
        }
    },
    persist: {
        paths: ['textTemplate', 'formInput'],
        exclude: ['textTemplate_default']
    }
})