import Navbar from './Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import {Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
