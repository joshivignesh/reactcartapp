import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from  "./components/Meals/Meals"

function App() {
  return (
    <div>
      <Fragment>
        <Header>
          <main>
            <Meals />
          </main>
        </Header>
        </Fragment>
    </div>
  );
}

export default App;
