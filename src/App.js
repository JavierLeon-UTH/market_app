import './App.css';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from './components/Signin';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Products />}>              
            </Route>
            <Route path="checkout-page" element={<CheckoutPage />}>              
            </Route>           
            <Route path="signin" element={<SignIn />}>              
            </Route>
            <Route path="signup" element={<SignUp />}>              
            </Route>
          </Routes>      
      </div>
    </Router> 
       /* <div>
         <Navbar/>
         <Products/>
       </div> */
  );
}

export default App;
