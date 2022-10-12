import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Componants/Blogs/Blogs';
import Home from './Componants/Home/Home';
import Questions from './Componants/Questions/Questions';
import Statistic from './Componants/Statics/Statistic';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home/>
      },
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path: '/statistics', 
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistic/>
      },
      {
        path: '/qa/:qaId',
        loader: ({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.qaId}`)
        },
        element: <Questions/>
      },
      {path: '*', element: <h1>4O4 error!!</h1>}
    ]
  }
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
// https://github.com/programming-hero-web-course2/b6-quiz-crackerz-instasif


// Get all quiz topics: https://openapi.programming-hero.com/api/quiz

// Get topic details by topic id: https://openapi.programming-hero.com/api/quiz/${id}

// Example: https://openapi.programming-hero.com/api/quiz/1