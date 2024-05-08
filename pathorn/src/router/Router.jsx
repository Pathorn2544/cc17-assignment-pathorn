import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from '../Page/WelcomePage';
import TodoPage from '../Page/TodoPage';

const router = createBrowserRouter([
    {path:'/', element:<WelcomePage/>},
    {path:'/Todo', element:<TodoPage/>}
])

function Router() {
    return <RouterProvider router={router} />;
  }
  
  export default Router;