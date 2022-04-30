import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ProjectPage from './pages/ProjectPage.vue'
import ResumeComp from './components/ResumeComp.vue'
import ContactInfo from './components/ContactInfo.vue'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/projects', component: ProjectPage, name: 'ProjectPage' },
  { path: '/resume', component: ResumeComp, name: 'ResumeComp' },
  { path: '/contact', component: ContactInfo, name: 'ContactInfo' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
