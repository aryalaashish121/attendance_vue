
require('./bootstrap');
require('./router');
import Vue from 'vue';
import vuetify from './common/vuetify';
import router from './router';

import App from './components/App';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// const app = new Vue({
//     el: '#app',
// });


const app = new Vue({
    vuetify,
    router,
    render: h => h(App),
    el: '#app',
});

