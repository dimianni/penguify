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
      <>
        <Header />

        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shopnow" element={<ShopNow />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </main>

        <Footer />
      </>

    )

  }
}

export default App;
