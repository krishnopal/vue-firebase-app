import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyABjo7FADK_7JGPnlHWKO5imrjyv3aB7Ps",
    authDomain: "vue-firebase-app-b861a.firebaseapp.com",
    projectId: "vue-firebase-app-b861a",
    storageBucket: "vue-firebase-app-b861a.appspot.com",
    messagingSenderId: "178081088106",
    appId: "1:178081088106:web:a36c379ed1046835fa0013"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')