import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";

const Childcomp = () => {
  return <div>child component</div>;
};

function App() {
  const Detail = {
    name: ["JaeJun", "MinSu"],
    age: [28, 26, 27],
    location: ["서울시", "경기도"],
  };

  return (
    <div className="App">
      <Header />
      <Body {...Detail} />
      <Buttons />
      <Footer {...Detail}>
        <Childcomp />
      </Footer>
    </div>
  );
}

export default App;
