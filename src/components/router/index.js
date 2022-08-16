// 1. Cai dat vue router
// 2. import
import { createRouter, createWebHistory } from "vue-router";
import EmployeeList from '../view/employee/EmployeeList.vue'
import ReportList from '../view/report/ReportList.vue'

const routes = [
  // { path: '/', component: Home },
    { path: "/employee", component: EmployeeList },
    { path: "/report", component: ReportList },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
// app.use(router)

export default router;
