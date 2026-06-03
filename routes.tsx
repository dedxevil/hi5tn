
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import AIProductsPage from './pages/AIProductsPage';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/about-us', component: AboutUsPage },
  { path: '/services', component: ServicesPage },
  { path: '/projects', component: ProjectsPage },
  { path: '/testimonials', component: TestimonialsPage },
  { path: '/ai-products', component: AIProductsPage },
  { path: '/contact', component: ContactPage },
];
