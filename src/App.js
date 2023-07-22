import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeaderMain from "./components/content/HeaderMain/HeaderMain";
import Training from "./components/content/Training/Training";
import Whom from "./components/content/Whom/Whom";
import Trainer from "./components/content/Trainer/Trainer";
import Reviews from "./components/content/Reviews/Reviews";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <HeaderMain />
      <Training />
      <Whom />
      <Trainer />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
