import {createRouter,createWebHistory} from "vue-router";
import {createSnackbar as createSnackbars} from '/src/mixin/mixin.js'
import {language} from "@/lang/index.js";
import {useGetLocalStore} from "@/store/local.js";
// 1. 配置路由
const routes = [
    {
        path: "/", // 默认路由 home页面
        component: () => import("../views/home/index.vue"),
        meta:{
            title:'Vietlott',
            requiresAuth: true // 不需要登陆即可访问的页面
        }
    },
    {
        path: "/my_user", // 默认路由 home页面
        component: () => import("../views/user/user.vue"),
        meta:{
            title:'我的',
            requiresAuth: true // 不需要登陆即可访问的页面
        }
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach(async (to, from, next) => {
    await switchLanguage() // 加载语言包
    window.document.title = to.meta.title // 修改标题
    const isAuthenticated = true // 判断是否登陆
    const requiresAuth = to.meta.requiresAuth
    if (!requiresAuth && !isAuthenticated) {
        createSnackbars('error','请登陆后再使用喔 ~')
        next(
            '/',
        );
    } else {
        // 否则，允许导航继续
        next();
    }
});

async function switchLanguage  (){
    const LocalStore = useGetLocalStore()
    await language.loadLocaleMessages(LocalStore.locale);
}
export default router