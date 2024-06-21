const ArticleCard = ({ article }) => {
  return (
    <li key={article.article_id}>
      <h2>{article.title}</h2>
      <p>By {article.author}</p>
      <img src={article.article_img_url} alt="article image" />
    </li>
  );
};

export default ArticleCard;
