import { useState, useEffect } from "react";
import { Pagination } from "./components/Pagination";

// АПИ с постами
const URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    /* написали функцию fetch внутри хука useEffect и передали пустой массив зависимостей, 
    это гарантирует, что наша функция fetch будет запущена только один раз, после загрузки страницы */
    fetch(URL)
      .then((response) => {
        // если данные будут извлечены успешно, они будут сохранены в состоянии,
        // в противном случае в консоль будет выведена ошибка
        if (response.ok) return response.json();
        throw new Error("could not fetch posts");
      })
      .then((posts) => setPosts(posts))
      .catch((error) => console.error(error));
  }, []);

  return <Pagination pageDataLimit={5} posts={posts} />;
}

export default App;
