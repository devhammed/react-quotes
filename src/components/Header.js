import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render () {
    return (
      <header className='Header'>
        <h1 className='Header__text'>
          React Quotes Machine
        </h1>
      </header>
    )
  }
}
