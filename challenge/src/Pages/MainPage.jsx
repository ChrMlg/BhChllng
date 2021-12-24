import { Link} from  "react-router-dom"


const Home = () => {
    return (
      <>
        <main>
          <h2>Welcome to Food chain</h2>
          <p>All you can </p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }

export default Home;