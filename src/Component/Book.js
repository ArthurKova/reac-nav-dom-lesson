import { useOutletContext, useParams } from "react-router-dom";

export default function Book() {
  // получить доступ к параметрам
  const { id } = useParams();
  console.log(id);
  // использовать контекст оутлет
  const obj = useOutletContext();
  console.log(obj);
  return <h2>{id} book page</h2>;
}
