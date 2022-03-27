import { createApp } from 'vue';
import App from './App.vue';
import { RouterFactory } from './router/router.factory';
import { StoreFactory } from './store/store.factory';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { AuthInteceptor } from './interceptor/auth.interceptor';

createApp(App)
    .use(RouterFactory.getRouter())
    .use(StoreFactory.getStore())
    .mount('#app');

let authInterceptor: AuthInteceptor = new AuthInteceptor();
authInterceptor.use();
