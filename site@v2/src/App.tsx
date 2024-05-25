import './App.scss';
import { RouterProvider } from 'react-router-dom';

import NavBar from './components/navbar';
import router from './routes';
function App() {

  return (
    <>
      <RouterProvider router={ router } />
    </>
  );
}

export default App;
