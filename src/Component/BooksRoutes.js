import Book from "./Book";
import BookLayout from "./BookLayout";
import Books from "./Books";
import NewBook from "./NewBook";
import { Route, Routes } from "react-router-dom";

export default function BooksRoutes() {
  return (
    <>
      {/* вынесенные пути в отдельный компонент + работа отулета и его контекст */}
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<Books />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} v />
        </Route>
      </Routes>
    </>
  );
}
