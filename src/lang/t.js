import i18n from "@/lang/index.js";

const t = (message) => {
    return  i18n.global.t(message);
};

export {  t  };

export default {
    install(app) {
        // 注册 i18n
        app.use(i18n);
    }
};
