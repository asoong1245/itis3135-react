import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'
import { useTitle } from './titleFunc'

export default function Itsc3135() {
  useTitle("Arthur's ITIS 3135 Course Page")
  return (
    <>
      <Header />
<div data-include="components/header.html"></div>


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