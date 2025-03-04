import './App.css'
import { createBrowserRouter, Route, Routes, RouterProvider, Outlet, Navigate, createRoutesFromElements } from 'react-router-dom';
import Navbar from './components/layout/navbar'
import Home from './pages/home/p_home';
import Footer from './components/layout/footer';
import Lessons from './pages/lessons/lesson';
import Admin from './pages/admin/admin';
import Article from './pages/articles/articles';

function App() {

const Layout = () => {
  return(
    <div>
      <Navbar classname=""/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<h1>About</h1>}/>
      <Route path="/services" element={<h1>Services</h1>}/>
      <Route path="/lessons" element={<Lessons/>}/>
      <Route path="/lessons/:lessonID" element={<Article/>}/>
      <Route path="/aki" element={<Admin/>}/>
      <Route path="*" element={<h1 className='text-center'>404 NOT FOUND</h1>}/>
    </Route>
  )
)

  return (
    <RouterProvider router={route}/>
  )
}

export default App
