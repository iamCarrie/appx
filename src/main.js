import { createApp } from 'vue'
import "virtual:svg-icons-register";
import App from './App.vue'
import ImgSrc from "@components/img.vue";
import svgIco from "@components/svgIco.vue";
import "@css/main.css";

const app = createApp(App);
app.component("svgIco", svgIco);
app.component("ImgSrc", ImgSrc);

app.mount('#app')
