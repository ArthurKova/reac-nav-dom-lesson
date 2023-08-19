import { Link, Outlet } from "react-router-dom";

export default function BookLayout() {
  // useSearchParams = хук который позволяет задавать и использовать значение url строки, работает как useState

  return (
    <>
      <ul>
        <li>
          <Link to="/books/1">book 1</Link>
        </li>
        <li>
          <Link to="/books/2">book 2</Link>
        </li>
        <li>
          <Link to="/books/3">book 3</Link>
        </li>
        <li>
          <Link to="/books/new">new book</Link>
        </li>
      </ul>
      {/* оутлет рендер детей отдельно + оставить контекст детям */}
      <Outlet context={{ hello: "World" }} />
    </>
  );
}
