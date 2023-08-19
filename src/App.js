import "./App.css";
import { Route, Routes, Link, useRoutes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import NotFound from "./Component/NotFound";
import BooksRoutes from "./Component/BooksRoutes";

function App() {
  // кастомные хуки для маршрута
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <NavLayout />,
  //     childer: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       {
  //         path: "/contact",
  //         element: <Contact />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      {/* через location можно закрепить элемент на стринице относительно остальных элементов */}
      <Routes location="/">
        <Route path="/" element={<p>page bar</p>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/" state="hi ">
              Home
            </Link>
            {/* свойста Линк */}
            {/* replace = назад на 2 страницы */}
            {/* reloadDocument = перезагрузка страницы */}
            {/* state = возможно оставить данные  */}
          </li>
          <li>
            <Link to="/books">Books</Link>
            {/* свойство end работает как exact v5 react */}
          </li>
          <li>
            <Link to="/about">About</Link>
            {/* NavLink = возможность кастомизации или контент */}
            {/* className={((isActive)) => {return isActive ? {color:blue} : {color: tomato}} */}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/*" element={<BooksRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* гнездо */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<Books />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} v />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes> */}

      {/* классика */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  );
}

export default App;
