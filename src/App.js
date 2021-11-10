import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Checkout from "./component/Checkout";
import Footer from "./component/footer/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/login/Login";
import Payment from "./component/payment/Payment";
import Register from "./component/register/Register";
import { auth } from "./firebase";
import { useStateValue } from "./Store/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JuARBIL40qdTE2splOJLxvzg6Dcdd5fMBVlw9mGJeLvBt2mcAFSIwNHXXx3Kj55B663rZuTxSv5A3pTiratk8fe00tI1eB2S9"
);

function App() {
  const [{}, dispatch] = useStateValue();
  // const [forceUpdate, setForceUpdate] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <div className="main">
        <Header />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/payment" exact>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
