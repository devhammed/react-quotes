import React, { Component } from 'react'
import Quote from './components/Quote'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Quote />
        <Footer />
      </div>
    )
  }
}
