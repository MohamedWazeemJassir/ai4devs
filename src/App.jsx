import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Card name="test" category="Chatbot" url="https://gemini.google.com" label="Gemini" />
      <Footer />
    </>
  );
}

export default App;
