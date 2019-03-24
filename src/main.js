import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import firebase form 'firebase';

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
	if(!app) {
		app = new Vue({
			el: '#app',
      store,
      router,
      render: h => h(App)
		});
	}
});

    /* eslint-disable no-new */