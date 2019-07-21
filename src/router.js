import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/login.vue'
import signup from './views/sign.vue'
import tasks from './views/tasks.vue'
import add from './views/Add.vue'
import taskList from './views/TaskList.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',

            component: Home,
            children: [{
                    path: '',
                    name: 'home',
                    component: login
                },
                {
                    path: 'sign',
                    name: 'sign',
                    component: signup
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/tasks',

            component: tasks,
            children: [{
                path: "",
                name: 'tasks',
                component: taskList
            }, {
                path: 'add',
                name: 'add',
                component: add
            }]
        }
    ]
})