import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { supabase } from "../utils/supabase";
import { useState, useEffect } from "react";

function App() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function getTools() {
      const { data, error } = await supabase.from("ai_tools").select("*");
      if (error) {
        console.error(error);
      } else {
        setTools(data);
      }
    }
    getTools();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-wrap p-10 gap-10 justify-center">
        {tools.map((tool) => (
          <Card
            key={tool.id}
            name={tool.name}
            category={tool.category}
            url={tool.url}
            pricing={tool.pricing}
            description={tool.description}
            logo={tool.logo}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
