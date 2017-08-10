/**
 * Created by issac on 2017/7/18.
import './style.css';
document.getElementById('app').innerHTML = '123';
 */

import Vue from 'vue';
import App from './app.vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS


Vue.use(iView);

new Vue({
    el: '#app',
    render: h=> h(App)
});