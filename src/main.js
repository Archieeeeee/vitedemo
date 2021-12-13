import { createApp, ref, reactive, toRefs, toRef  } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'


var myApp = createApp(App)
myApp.use(ElementPlus, { locale: zhCn })
myApp = myApp.mount('#app')

console.log("mounted")


myApp.showLoginApp()








