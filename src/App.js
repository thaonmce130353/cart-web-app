import React, { Component } from "react";
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import CartsContainer from './containers/CartsContainer';
import MessageContainer from './containers/MessageContainer';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer />
                        <MessageContainer />
                        <CartsContainer />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
