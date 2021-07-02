import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Questions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
