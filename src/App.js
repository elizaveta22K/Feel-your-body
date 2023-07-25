import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeaderMain from "./components/content/HeaderMain/HeaderMain";
import Training from "./components/content/Training/Training";
import Whom from "./components/content/Whom/Whom";
import Trainer from "./components/content/Trainer/Trainer";
import Reviews from "./components/content/Reviews/Reviews";
import Faq from "./components/content/FAQ/Faq";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <HeaderMain />
      <Training />
      <Whom />
      <Trainer />
      <Reviews />
		<Faq />
      <Footer />
    </div>
  );
}

export default App;
