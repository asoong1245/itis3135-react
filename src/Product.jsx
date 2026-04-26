import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'
import "./productcss.css";
import { useTitle } from './titleFunc';

export default function Product() {
  useTitle("Product")
  return (
    <>
      
<body id = "productbody">
<header id="header">

<img
id="header-img"
src="https://cdn.vectorstock.com/i/1000v/53/78/logo-stoat-jumping-mascot-cartoon-vector-29035378.jpg"
alt="Annoyed Stoat Logo"
width="120" />
<Header />

</header>


<section id="features" class = "classsection">

<h2>Annoyed Stoat Pest Control</h2>

<p>
When pests invade your home, the Annoyed Stoat is ready to handle them.
Fast, aggressive, and extremely motivated.
</p>

<ul>
<li>Attic squirrel removal</li>
<li>Raccoon trash defense</li>
<li>Snake relocation services</li>
<li>Basement rat elimination</li>
</ul>

</section>


<section id="video-section" class = "classsection">

<h2>The Stoat at Work</h2>

<iframe
id="video"
width="560"
height="315"
src="https://www.youtube.com/embed/CSHk_MGYZlA"
allowfullscreen>
</iframe>

</section>


<section id="pricing" class = "classsection">

<h2>Pest Control Plans</h2>

<div class="pricing-container">

<div class="price-box">
<h3>Basic</h3>
<p>$25</p>
<p>Single pest inspection</p>
</div>

<div class="price-box">
<h3>Hunter</h3>
<p>$60</p>
<p>Full attic or basement sweep</p>
</div>

<div class="price-box">
<h3>Stoat Fury</h3>
<p>$120</p>
<p>Total property pest elimination</p>
</div>

</div>

</section>


<section class = "classsection">

<h2>Join the Stoat Alert List</h2>

<form
id="productform"
action="https://www.freecodecamp.org/email-submit"
>

<input
type="email"
id="email"
name="email"
placeholder="Enter your email"
required
/>

<input
type="submit"
id="submit"
value="Subscribe"
/>

</form>

</section>
</body>
      <Footer />
    </>
  )
}