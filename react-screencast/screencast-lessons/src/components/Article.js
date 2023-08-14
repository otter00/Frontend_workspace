import React, { Component, PureComponent } from "react";

class Article extends PureComponent {
  // PureComponent отличается от обычного Component тем,
  // что автоматически реализует перестроение с shouldComponentUpd

  constructor(props) {
    super(props);

    this.state = {
      //isOpen: props.defaultOpen,
      count: 0,
    };
  }

  // state = {
  //   isOpen: true,
  // };

  UNSAFE_componentWillMount() {
    console.log("---", "mounting");
  }

  // если меняем порядок статей, открытой всё равно
  // останется первая
  // только если меняются пропсы или обновляем всё приложение
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log("---", "will receive props");
  //   if (nextProps.defaultOpen !== this.props.defaultOpen)
  //     this.setState({
  //       isOpen: nextProps.defaultOpen,
  //     });
  // }

  // если просто открываем-закрываем статью
  // виртуальный ДОМ перестраивается столько раз, сколько статей
  UNSAFE_componentWillUpdate() {
    console.log("---", "will update");
  }

  // перестраиваем компонент только при его изменении
  // в отличие от полного перестроения всех статей в componentWillUpdate по клику
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.isOpen !== nextState.isOpen;
  // }

  render() {
    const { article, isOpen, onButtonClick } = this.props;
    console.log("---", this.props);
    const body = isOpen && <section>{article.text}</section>;
    return (
      <div className="card mx-auto" style={{ width: "50%" }}>
        <div className="card-header">
          <h2 onClick={this.incrementCounter}>
            {article.title} clicked
            {this.state.count}
            <button
              //onClick={this.handleClick}
              onClick={onButtonClick}
              className="btn btn-primary btn-lg float-right"
            >
              {isOpen ? "close" : "open"}
            </button>
          </h2>
        </div>

        <div className="card-body">
          <h6 className="card-subtitle text-muted">
            creation date: {new Date(article.date).toDateString()}{" "}
          </h6>
          {body}
        </div>
      </div>
    );
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // handleClick = () => {
  //   console.log("---", "clicked");
  //   // this.setState({
  //   //   isOpen: !this.state.isOpen,
  //   // });
  // };
}

export default Article;
