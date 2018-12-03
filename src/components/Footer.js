import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render () {
    return (
      <footer className="Footer">
        Made by <a href="https://devhammed.github.io" className="Footer__link">Oyedele Hammed</a> |
        <strong>#LearningReact2018</strong>
      </footer>
    )
  }
}
