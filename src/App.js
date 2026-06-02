import './scss/app.scss';
import Header from './components/Header.jsx'
import Homes from './pages/Home.jsx';
import { Route, Routes } from 'react-router';
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound.jsx';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<Homes />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
