import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'

export default function Itsc3135() {
  return (
    <>
      <Header />
<div data-include="components/header.html"></div>
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

<body>
    
    <main>

        <hr/>
        <h2>Arthur's ITIS 3135 Course Page</h2>
        <p>I'm Arthur Soong and this is my ITIS 3135 course page.</p>
    </main>
    <div data-include="components/footer.html"></div>
    <script src = "scripts/HTMLinclude.min.js"></script>
</body>
      <Footer />
    </>
  );
}