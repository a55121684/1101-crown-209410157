import Homepage_57 from "./pages/Homepage_57";
import ShopTwoPage_57 from "./pages/ShopTwoPage_57";
import { Switch, Route } from "react-router";

import SignInPage from "./pages/SignInPage_57";
import ContactPage from "./pages/ContactPage_57";
import Header_57 from "./components/Header_57";

function App() {
  return (
    <div>
      <Header_57 />

      <Switch>
        <Route path="/" exact>
          <Homepage_57 />
        </Route>
        <Route path="/shop_57" exact>
          <ShopTwoPage_57 />
        </Route>
        <Route path="/contact_57" exact>
          <ContactPage />
        </Route>
        <Route path="/signin_57" exact>
          <SignInPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
