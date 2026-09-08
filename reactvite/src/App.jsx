import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'

function App() {

  return (
    <>
      <div style={{height: '600px', width: '600px'}}>
        <div id='college'>
          <h2>ABES Engineering College</h2>
        </div>
        <div id='details'>
          <p>Roll: 2400320100987</p>
          <p>Name: Sanyam Agarwal</p>
          <p>Branch: CSE</p>
          <p>Section: 24</p>
          </div>
          <ICard />
      </div>
    </>
  )
}

export default App
