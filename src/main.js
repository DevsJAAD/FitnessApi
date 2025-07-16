import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from "primevue/config";
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.use(PrimeVue, {
    theme: {
        preset: Aura,
        darkModeSelector: 'system',

    },
    locale:{
        accept: 'Aceptar',
        reject: 'Rechazar',
        selectionMessage: '{0} seleccionados'
    }
 });
app.mount('#app')
