import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Works from './pages/works';
import CurriculumVitae from './pages/curriculumVitae';
import About from './pages/about';
import NavBar from './components/navbar';

const NavbarWrapper = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cv',
        element: <CurriculumVitae />,
      },
      {
        path: '/works',
        element: <Works />,
      },
    ],
  },
]);

export default router;