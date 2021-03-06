import VueRouter from "vue-router";
import login from "./src/view/login";
import main from "./src/view/main";
import activityTable from "./src/components/activityTable";
const routes = [
  {path: '/', component: login},
  {path:'/main',component: main,
  children:[
    {
       path:"function/0",component:activityTable
    }
  ]
  }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
export default router
