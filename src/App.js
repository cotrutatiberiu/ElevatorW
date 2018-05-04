import React, { Component } from 'react';
import './App.css';
import { Home } from "./pages/home/home";
import { Header } from "./components/Header";
import { languages } from "./db/languages/index";

export default class App extends Component {
  constructor() {
    super();
    this.languageSet = this.languageSet.bind(this);

    this.state = {
      language: 0
    }
  }

  languageSet=(dropdownItem)=> {
    console.log(dropdownItem);
    this.setState({ language: dropdownItem })
  }

  languageToRender=()=> {
    switch (this.state.language) {
      case 0:
        return <Header language={languages.romanianLanguage} languageSet={this.languageSet} />;
      case 1:
        return <Header language={languages.englishLanguage} languageSet={this.languageSet} />;
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

