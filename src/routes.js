import Vue from "vue";
import VueRouter from 'vue-router'
import ListView from './components/ListView.vue'
import SingleView from './components/SingleView.vue'
Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    // base: process.env.local,
    routes: [
		{
			path: '',
			component: ListView,
			name: 'home',
			props: true,
		},
		{
			path: '/user/:id',
			component: SingleView,
			name: 'user',
			props: true,
		},
		{
	       path: '*',
	       redirect: '/',
	       component: ListView,
	       props: true,
	     },
    ]
});