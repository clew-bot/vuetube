import Vue from "vue";
import App from "./App";


//show content on screen 
new Vue ({
    el: "#app",
    render: (h) => h(App)
});

// can also do .$mount('#app');
//two different ways of doing the same operation, vue is like that