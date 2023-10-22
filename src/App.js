
import './App.css';
import Experience from './Experience';
import Footer from './Footer';
import Form from './Form';
import Info from './Info';
import Landing from "./Landing.js";
import Ports from './Ports';
import Error from './Error.jsx'
import Mycv from './Mycv';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Landing />,
    errorElement:<Error />,
    children:[
      {
        path:'/experience',
        element:<Experience/>
      },
      
   ]
  },
  {
    path:'/Mycv',
    element:<Mycv />,
    errorElement:<Error/>
  }
  
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
       { /*<Landing/>*/ }
       <Info/>
       <Ports/>
       {/*<Experience/>*/}
       <Form/> 
       <Footer/>
    </div>
  );
}

export default App;
