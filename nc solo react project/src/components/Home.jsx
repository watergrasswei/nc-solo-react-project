import {Link} from "react-router-dom"




const Home = () => {
    return (
   <nav>
    <ul>
        <li>
          <Link to="/home">Home</Link>
          <Link to="/thearticlelist">ArticleList</Link>
        </li>
    </ul>
   </nav>
        )
  };



export default Home