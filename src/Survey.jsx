import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'
import { useTitle } from './titleFunc';

export default function Survey() {
  useTitle("Survey")
  return (
    <>
      <Header />


      <h1 id="title">Annoyed Stoat Pest Control Company Report</h1>

      <p id="description">
        Tell the Annoyed Stoat Pest Control Company what creature has invaded your territory so we can deal with it immediately.
      </p>

      <form id="survey-form">
        <label id="name-label" htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
        />

              <br />
              <br />

        <label id="email-label" htmlFor="email">Your Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <br /><br />

        <label id="number-label" htmlFor="number">
          How many pests did you see?
        </label>
        <input
          id="number"
          name="number"
          type="number"
          min="1"
          max="100"
          placeholder="Number of pests"
        />

        <br /><br />

        <label htmlFor="dropdown">
          Which pest is bothering you most?
        </label>
        <select id="dropdown" name="pest">
          <option value="">Select the pest</option>
          <option value="rat">Rat</option>
          <option value="raccoon">Raccoon</option>
          <option value="snake">Snake</option>
          <option value="squirrel">Squirrel</option>
          <option value="possum">Possum</option>
        </select>

        <br /><br />

        <p>How urgent is the situation?</p>

        <label>
          <input type="radio" name="urgency" value="low" />
          Mildly annoying
        </label>

        <label>
          <input type="radio" name="urgency" value="medium" />
          Very annoying
        </label>

        <label>
          <input type="radio" name="urgency" value="high" />
          EXTREMELY annoying
        </label>

        <br /><br />

        <p>Where are the pests located?</p>

        <label>
          <input type="checkbox" name="location" value="attic" />
          Attic
        </label>

        <label>
          <input type="checkbox" name="location" value="basement" />
          Basement
        </label>

        <label>
          <input type="checkbox" name="location" value="yard" />
          Yard
        </label>

        <label>
          <input type="checkbox" name="location" value="walls" />
          Inside the walls
        </label>

        <br /><br />

        <label htmlFor="comments">
          Additional Details for the Stoat
        </label>
        <textarea
          id="comments"
          name="comments"
          rows="4"
          cols="40"
          placeholder="Describe the pest problem..."
        ></textarea>

        <br /><br />

        <input
          id="submit"
          type="submit"
          value="Send Report to the Annoyed Stoat"
        />
      </form>

      <Footer />
    </>
  );
}