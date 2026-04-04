import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'
import "./inventorycss.css";

export default function Inventory() {
    return (
        <div id="inventorybody">

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

            <h1 id="inventoryh1">Annoyed Stoat Pest Control Inventory</h1>

            <table id="inventorytable">

                <thead className="inventorythead">
                    <tr>
                        <th className="inventoryth">Equipment</th>
                        <th className="inventoryth">Manufacturer</th>
                        <th className="inventoryth">Category</th>
                        <th className="inventoryth">Status</th>
                        <th className="inventoryth">Effectiveness</th>
                    </tr>
                </thead>

                <tbody>

                    <tr className="ready">
                        <td className="inventorytd">Stoat-Approved Rat Trap</td>
                        <td className="inventorytd">Stoat Industries</td>
                        <td className="inventorytd">Trap</td>
                        <td className="inventorytd">
                            <span className="status">Ready</span>
                        </td>
                        <td className="inventorytd">
                            <span className="rate three">
                                <span></span><span></span><span></span>
                            </span>
                        </td>
                    </tr>

                    <tr className="ready">
                        <td className="inventorytd">Snake Relocation Stick</td>
                        <td className="inventorytd">Forest Tools Co.</td>
                        <td className="inventorytd">Handling Tool</td>
                        <td className="inventorytd">
                            <span className="status">Ready</span>
                        </td>
                        <td className="inventorytd">
                            <span className="rate two">
                                <span></span><span></span><span></span>
                            </span>
                        </td>
                    </tr>

                    <tr className="maintenance">
                        <td className="inventorytd">Raccoon-Proof Trash Lock</td>
                        <td className="inventorytd">WildGuard</td>
                        <td className="inventorytd">Prevention</td>
                        <td className="inventorytd">
                            <span className="status">Maintenance</span>
                        </td>
                        <td className="inventorytd">
                            <span className="rate three">
                                <span></span><span></span><span></span>
                            </span>
                        </td>
                    </tr>

                    <tr className="ready">
                        <td className="inventorytd">Attic Squirrel Repellent</td>
                        <td className="inventorytd">PestAway Labs</td>
                        <td className="inventorytd">Repellent</td>
                        <td className="inventorytd">
                            <span className="status">Ready</span>
                        </td>
                        <td className="inventorytd">
                            <span className="rate two">
                                <span></span><span></span><span></span>
                            </span>
                        </td>
                    </tr>

                </tbody>

            </table>

            <Footer />

        </div>
    );
}