import { Component } from 'react';
import { Routes, Route, Link, HashRouter } from "react-router-dom";
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ShopNow from './Components/ShopNow/ShopNow';
import Product from './Components/Product/Product';

class App extends Component {
  render() {

    return (
      <HashRouter>
        <>
          <Header />

          <main>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/shopnow" exact element={<ShopNow />} />
              <Route path="/product/:id" exact element={<Product />} />
            </Routes>
          </main>

          <Footer />
        </>
      </HashRouter>

    )

  }
}

export default App;
