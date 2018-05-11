import React, { Component } from 'react';
import './App.css';
import { Home } from "pages/home/home";
import { Header } from "components/Header";
import { languages } from "db/languages/index";
import Routes from "routes/index";

export default class App extends Component {
  constructor() {
    super();
    this.languageSet = this.languageSet.bind(this);

    this.state = {
      language: 0
    }
  }

  languageSet = (dropdownItem) => {
    this.setState({ language: Number(dropdownItem) })
  }

  languageToRender = () => {
    const { language } = this.state;
    switch (language) {
      case 0:
        return <Header language={languages.romanianLanguage} languageSet={this.languageSet} />
      case 1:
        return <Header language={languages.englishLanguage} languageSet={this.languageSet} />;
      default:
        return <p>Language error</p>
    }
  }

  render() {
    return (
      <div>
          {/* {this.languageToRender()}
        <Home /> */}
        <Routes/>
      </div>
    );
  }
}

