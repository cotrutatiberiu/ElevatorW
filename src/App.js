import React, { Component } from 'react';
import './App.css';
import { Home } from "./pages/home/home";
import { Header } from "./components/Header";
import { languages } from "./db/languages/index";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      language: 0
    }
  }
  languageToRender() {
    switch (this.state.language) {
      case 0:
        return <Header language={languages.romanianLanguage} />;
      case 1:
        return <Header language={languages.englishLanguage} />;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        {this.languageToRender()}
        <Home />
      </div>
    );
  }
}

