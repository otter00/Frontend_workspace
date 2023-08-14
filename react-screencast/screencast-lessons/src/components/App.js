import React, { Component, PureComponent } from "react";
//import Article from "./Article";
import articles from "../fixtures";
import ArticleList from "./ArticleList";
import "bootstrap/dist/css/bootstrap.css";
//import Article from "./Article";

class App extends PureComponent {
  state = { reverted: false };
  //articles = articles.slice();
  // локальная копия пришедшего из пропс массива
  // не работает для PureComponent ArticleList

  render() {
    console.log("---", 1);
    // console.log(
    //   "---",
    //   "render",
    //   2,
    //   this.state,
    //   articles.map((article) => article.id)
    // );
    // const ArticlesList = this.state.reverted ? articles.reverse() : articles;
    return (
      <div className="container">
        <div className="jumbotron bg-light" style={{ height: "20vh" }}>
          <h6 className="display-3">Bootstrap Articles from Screencast</h6>
          <button className="btn" onClick={this.revert}>
            Revert
          </button>
        </div>
        <ArticleList
          // articles.reverse() изменяет объект по ссылке
          //articles={ArticlesList}
          //articles={this.articles}
          // создаем копию и меняем уже копию - без ссылок
          articles={this.state.reverted ? articles.slice().reverse() : articles}
        />
      </div>
    );
  }

  // по клику на кнопку вызывается коллбэк, он меняет состояние
  // происходит перестроение виртуального ДОМ, потом сравнение
  // и изменение реального ДОМ
  revert = () => {
    //console.log("---", "revert", 1);
    //articles.reverse(); // так делать нельзя - по ссылке меняется весь массив,
    // который может использоваться где угодно еще
    // не меняем внешние переменные и пропсы - только локальные!

    // теперь меняется уже локальная копия
    //this.articles.reverse();
    this.setState({
      reverted: !this.state.reverted,
    });
  };
}

export default App;
