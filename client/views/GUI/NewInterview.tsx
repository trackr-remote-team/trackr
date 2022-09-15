import React from 'react'

export default function NewInterview() {

    return (
      <div>
        <h2>New Interview</h2>
        <form>
        <input id="type" type="text" />
        <input id="date" type="date" />
        <button className="submitbutton" >Create</button>
        </form>
        </div>
    )
  }