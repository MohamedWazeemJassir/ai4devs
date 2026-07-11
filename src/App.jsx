import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { cardData } from "./data/data";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap p-10 gap-10 justify-center">
        {cardData.map((cardItem) => (
          <Card
            key={cardItem.id}
            name={cardItem.name}
            category={cardItem.category}
            url={cardItem.url}
            pricing={cardItem.pricing}
            description={cardItem.description}
            logo={cardItem.logo}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
