import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'
import { useTitle } from './titleFunc'
//hi
function App() {
  const [count, setCount] = useState(0)

  useTitle("Home")

  return (
    <>
      <Header></Header>
      <header>
                <nav>
                    <Link to="/">Home </Link>
                    <Link to="/Contract">Contract </Link>
                    <Link to="/Survey">Survey </Link>
                    <Link to="/Cards">Cards </Link>
                    <Link to="/Inventory">Inventory </Link>
                    <Link to="/Documentation">Documentation </Link>
          <Link to="/Product">Product </Link>
          <Link to="/Introduction">Introduction </Link>
                </nav>
      </header>

      <main>
        <h2>I am Arthur Soong and this is my Website!</h2>

        <p>
          Hello, I'm Arthur, I am a sophomore at UNC Charlotte studying computer
          science with a concentration in cybersecurity
        </p>

        <a href="itis3135/introduction.html">
          Click here to go to my Introduction page
        </a>

        <br />

        <a href="itis3135/website_evaluations.html">
          Click here to go to my CRAP Website Evaluation page
        </a>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App
