import { useEffect, useState } from "react";

import News from "./News";

function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${category}&from=2024-01-4&apiKey=4d8d34ac195f4aedb210fed0fb17366d`
        );
        const news = await response.json();
        setArticles(news.articles);
        console.log(news.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);
  return (
    <div className="App">
      <header className="header">
        <img
          className="title"
          src="https://tuyadigital.com/wp-content/uploads/2020/12/Valahia-News-e1608204124269.png"
        />
        <input
          className="input"
          onChange={(event) => {
            if (event.target.value !== "") {
              setCategory(event.target.value);
            } else {
              setCategory("india");
            }
          }}
          type="text"
          placeholder="Search Here"
        />
      </header>
      <section className="news-article">
        {articles.map((article, index) => {
          return <News article={article} />;
        })}
      </section>
          
    </div>
  );
}

export default App;
