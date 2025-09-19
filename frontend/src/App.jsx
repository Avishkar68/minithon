import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Rooms from './pages/Rooms';
import Admin from './pages/Admin';
import RoomDetailsPage from './pages/RoomDetailsPage';


const Layout = () => {
  return (
    <div className="  min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/rooms',
        element: <Rooms />,
      },
      {
        path: '/rooms/:id',
        element: <RoomDetailsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
