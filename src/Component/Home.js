import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  console.log(location);
  // через useLocation можно получить state который передали в App.js
  return <h1>homepage</h1>;
}
