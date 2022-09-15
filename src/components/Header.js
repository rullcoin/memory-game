import React from 'react'

export default function Header(props) {
  return (
    <div className='header-container'>
        <h1>Memory game</h1>
        <h2>Current score: {props.score}</h2>
        <h2>Top score: {props.highScore}</h2>
    </div>
    
  )
}
