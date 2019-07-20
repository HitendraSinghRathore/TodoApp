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
            name: 'home',
            component: Home,
            children: [{
                    path: '',
                    component: login
                },
                {
                    path: 'sign',
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
            name: 'tasks',
            component: tasks,
            children: [{
                path: "",
                component: taskList
            }, {
                path: 'add',
                component: add
            }]
        }
    ]
})