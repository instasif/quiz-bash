import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './Componants/ErrorPage/ErrorPage';
import Home from './Componants/Home/Home';
import Questions from './Componants/Questions/Questions';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage/>,
    element: <Main/>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home/>
      },
      {
        path: '/qa/:qaId',
        loader: ({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.qaId}`)
        },
        element: <Questions/>
      },
      {path: '*',
       element: <ErrorPage />}
    ]
  }
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
      <Toaster />
    </div>
  );
}

export default App;