import useClipboard from "vue-clipboard3";
import {ElMessage} from "element-plus";
const { toClipboard } = useClipboard() 

export const getCopyValue = async ()=>{
    // 读取剪贴板中的文本内容
    let copyText = await navigator.clipboard.readText();
    return copyText
}
export const copyInfo = async (str, isHtml = false) => {
   if(isHtml){
       str = str.replace(/<[^>]+>/g, '');
   }
   try {
       await toClipboard(str)
       ElMessage.success('复制成功')
   } catch (e) {
       ElMessage.error('复制失败')
   }
}
export const swapArrayElements = (array, index1, index2,text) => {
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        return; // Indices are out of bounds
    }
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    text ?ElMessage.success(text) : ElMessage.success('分类位置更换成功')
}

export const  getTimeDescription = (time)=>{
    let date = new Date(time);
    let now = new Date();
    let diff = now - date;
    let dayDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hour = date.getHours();
    let timeOfDay;
    if(hour >= 0 && hour < 6){
        timeOfDay = '凌晨';
    }
    else if (hour >= 6 && hour < 12) {
        timeOfDay = '早上';
    } else if (hour >= 12 && hour < 18) {
        timeOfDay = '下午';
    } else {
        timeOfDay = '晚上';
    }
    if (dayDiff === 0) {
        return `今天${timeOfDay}`;
    } else if (dayDiff === 1) {
        return `昨天${timeOfDay}`;
    } else if (dayDiff === 2) {
        return `前天${timeOfDay}`;
    } else if (dayDiff === 3) {
        return `大前天${timeOfDay}`;}
    else {
        return `${date.getMonth() + 1}月${date.getDate()}日`;
    }
}

