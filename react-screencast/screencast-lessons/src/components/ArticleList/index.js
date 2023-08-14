import React, { PureComponent } from "react";
import Article from "../Article";
import "./style.css";

export default class ArticleList extends PureComponent {
  state = {
    openArticleId: null,
  };
  // PureComponent не обновлялся, потому что с точки зрения реакта не было перестроения
  // пришли только пропсы со ссылкой на тот же массив
  // поэтому лучше менять не локальную переменную, а создать новый массив
  render() {
    console.log("---", 2);
    const articleElems = this.props.articles.map((article, index) => (
      <li key={article.id} className="article-list__li">
        <Article
          article={article}
          //defaultOpen={index === 0}
          isOpen={this.state.openArticleId === article.id}
          onButtonClick={this.handleClick.bind(this, article.id)}
        />
      </li>
    ));

    return <ul>{articleElems}</ul>;
  }

  handleClick = (openArticleId) =>
    this.setState({
      // реализация кнопки close - если открываем открытую, то закрываем ее
      openArticleId:
        this.state.openArticleId === openArticleId ? null : openArticleId,
    });
}
