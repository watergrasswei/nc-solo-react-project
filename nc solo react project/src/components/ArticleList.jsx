import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";


const ArticleList = () => {
  const [currentArticles, setCurrentArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`https://nc-project-breath.onrender.com/api/articles`)
      .then((response) => {
        console.log(response)
        setCurrentArticles(response.data.articles);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
      });
  }, []);

  return (
    <ul>
        {currentArticles.map((article)=>{
            return (
        <ArticleCard key={article.article_id} article={article} />
            )
        })}
    </ul>
  )
};


// .then((articles)=>{console.log(articles)})

// return 

//             
export default ArticleList;
