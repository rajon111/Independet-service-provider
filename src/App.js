import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import CheckOutDirectorDetail from './Pages/Home/CheckOutDirectorDetail/CheckOutDirectorDetail';

import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service/:directorId' element={<CheckOutDirectorDetail></CheckOutDirectorDetail>}></Route>
        <Route path='/checkout' element={<CheckOutDirectorDetail></CheckOutDirectorDetail>}></Route>
        {/* <Route path='/about' element={<Logi}></Route> */}
        {/* <Route path='*' element={<Not}></Route> */}
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
