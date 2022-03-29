import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Route, Switch, Redirect,} from "react-router-dom";
import Login from '../src/components/Login';
import  Signup from '../src/components/Signup';
import Category from './components/Category';
import FAQs from './components/FAQs';
import Shopping_Cart from './components/Shopping_Cart';
import Wish_List from './components/Wish_List';
import My_Account from './components/My_Account';
import Contac from './components/Contac';

function App() {
  return (
    <>
    {/* <Router> */}
    <Router>
      
      <Switch>
        {
          <Route exact path="/" component={Login} />
        }

        {
          <Route exact path="/signup" component={Signup} />
        }

        {
          <Route exact path="/category" component={Category} />
        }

        {
          <Route exact path="/contact" component={Contac} />
        }

        {
          <Route exact path="/FAQs" component={FAQs} />
        }

        {
          <Route exact path="/ShoppingCart" component={Shopping_Cart} />
        }

        {
          <Route exact path="/WishList" component={Wish_List} />
        }

        {
          <Route exact path="/MyAccount" component={My_Account} />
        }

        {
          <Redirect to="/" />
        }
      </Switch>

      
    </Router>
    </>
  );
}

export default App;
