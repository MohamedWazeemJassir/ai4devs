import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { cardData } from "./data/data";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-nowrap">
        {cardData.map((cardItem) => (
          <Card
            name={cardItem.name}
            category={cardItem.category}
            url={cardItem.url}
            pricing={cardItem.pricing}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
