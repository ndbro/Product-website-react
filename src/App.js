import Header from "./Components/Header/Header";
import "./App.css";
import Main from "./Components/Main/Main";
import Intro from "./Components/Intro/Intro";
import Contents from "./Components/Contents/Contents";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App container">
      <Header/>
      <Main/>
      <Intro/>
      <Contents/>
      <Footer/>
    </div>
  );
}

export default App;
