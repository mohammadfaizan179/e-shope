import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList";
import Details from "./Component/Details";
import Cart from "./Component/Cart";
import Default from "./Component/Default";
import Modal from "./Component/Modal";
import {Switch, Route} from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>

  );
}

export default App;
