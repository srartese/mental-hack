import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import firebase from 'firebase';

Vue.config.productionTip = false

const config = {
    apiKey: "AIzaSyBky0ko6qX3eaI0dcV844tW00EF3LQrZGI",
    authDomain: "mental-hack.firebaseapp.com",
    databaseURL: "https://mental-hack.firebaseio.com",
    projectId: "mental-hack",
    storageBucket: "mental-hack.appspot.com",
    messagingSenderId: "629474644428"
};

firebase.initializeApp(config);

let app;
firebase.auth().onAuthStateChanged(user => {
	if(!app) {
		app = new Vue({
			el: '#app',
      store,
      router,
      user,
      render: h => h(App)
		});
	}
});