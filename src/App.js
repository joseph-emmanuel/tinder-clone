import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
function App() {
  return (
    //Bem naming convention http://getbem.com/naming/
    <div className="app ">
      {/*Header*/}
      <Header/>


      {/*Profile Cards*/}

      <TinderCards/>



      {/*SwipeButtons*/}

      <SwipeButtons/>

    </div>
  );
}

export default App;
