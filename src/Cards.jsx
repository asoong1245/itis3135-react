import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'
import "./cardscss.css";
import { useTitle } from './titleFunc'

export default function Cards() {
    useTitle("Cards")
    return (
        <>
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


            <div className="PlayingCardsBody">

                    <h1>Annoyed Stoat Pest Cards</h1>
                    <p>Creatures that constantly annoy the stoat.</p>

                    <main id="playing-cards">

                        <div className="card">
                            <div className="left">Rat</div>
                            <div className="middle">
                                <div>🐀</div>
                                <div>🐀</div>
                            </div>
                            <div className="right">Rat</div>
                        </div>

                        <div className="card">
                            <div className="left">Snake</div>
                            <div className="middle">
                                <div>🐍</div>
                                <div>🐍</div>
                            </div>
                            <div className="right">Snake</div>
                        </div>

                        <div className="card">
                            <div className="left">Raccoon</div>
                            <div className="middle">
                                <div>🦝</div>
                                <div>🦝</div>
                            </div>
                            <div className="right">Raccoon</div>
                        </div>

                        <div className="card">
                            <div className="left">Possum</div>
                            <div className="middle">
                                <div>🐾</div>
                                <div>🐾</div>
                            </div>
                            <div className="right">Possum</div>
                        </div>

                        <div className="card">
                            <div className="left">Squirrel</div>
                            <div className="middle">
                                <div>🐿</div>
                                <div>🐿</div>
                            </div>
                            <div className="right">Squirrel</div>
                        </div>

                    </main>
            </div>

            <Footer />
        </>
    );
}