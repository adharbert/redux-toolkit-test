import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './features/products/ProductDisplay';
import Users from './features/users/UserDisplay';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './features/categories/categorySlice';
import { useEffect } from 'react';


const App = () => {

  const dispatch = useDispatch();

  // this is a good area to load utility data once when the applicaiton loads.  
  useEffect(() => {
      dispatch(fetchCategories());
    }, [dispatch]);



  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Routes> 
    </Router>    
  )
}

export default App

