import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'
import "./documentationcss.css";

export default function Documentation() {
    return (
        <>
            <main id="main-doc">
            <Header />
            
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

            <nav id="navbar">
                <header>Annoyed Stoat Docs</header>
                <a className="nav-link" href="#Introduction">Introduction</a>
                <a className="nav-link" href="#Identifying_Pests">Identifying Pests</a>
                <a className="nav-link" href="#Using_Equipment">Using Equipment</a>
                <a className="nav-link" href="#Trap_Setup">Trap Setup</a>
                <a className="nav-link" href="#Preventing_Infestation">Preventing Infestation</a>
            </nav>

                <section className="main-section" id="Introduction">
                    <header>Introduction</header>
                    <p>The Annoyed Stoat Pest Control team specializes in handling invasive creatures with maximum efficiency and minimal chill.</p>
                    <ul>
                        <li>Attic invaders</li>
                        <li>Basement pests</li>
                        <li>Yard annoyances</li>
                    </ul>
                </section>

                <section className="main-section" id="Identifying_Pests">
                    <header>Identifying Pests</header>
                    <p>Knowing your pest is critical for removal. Common intruders:</p>
                    <ul>
                        <li>Rats 🐀</li>
                        <li>Raccoons 🦝</li>
                        <li>Snakes 🐍</li>
                        <li>Possums 🐾</li>
                        <li>Squirrels 🐿</li>
                    </ul>
                    <p>Observe behavior, location, and evidence to choose the correct response.</p>
                </section>

                <section className="main-section" id="Using_Equipment">
                    <header>Using Equipment</header>
                    <p>The stoat has access to specialized equipment for different pests:</p>
                    <code>Rat Trap = Stoat-Approved</code>
                    <code>Raccoon Lock = Ultra-Secure</code>
                    <code>Snake Relocation Stick = Gentle but Firm</code>
                    <ul>
                        <li>Always check equipment condition</li>
                        <li>Follow safety protocols</li>
                        <li>Replace damaged tools promptly</li>
                    </ul>
                </section>

                <section className="main-section" id="Trap_Setup">
                    <header>Trap Setup</header>
                    <p>Correct trap placement maximizes success:</p>
                    <ul>
                        <li>Basements: Rat traps along walls</li>
                        <li>Attics: Squirrel repellents near vents</li>
                        <li>Yards: Snake relocation zones clear of humans</li>
                    </ul>
                    <code>Place trap at pest activity site</code>
                    <code>Check trap twice daily</code>
                </section>

                <section className="main-section" id="Preventing_Infestation">
                    <header>Preventing Infestation</header>
                    <p>Long-term prevention keeps the stoat calm:</p>
                    <ul>
                        <li>Secure trash bins with Raccoon Locks</li>
                        <li>Seal attic and wall gaps</li>
                        <li>Remove yard debris</li>
                        <li>Regular inspections</li>
                    </ul>
                </section>
                <Footer />
            </main>

                
            </>
            );
}