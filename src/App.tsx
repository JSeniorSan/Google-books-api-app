import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import DetailComponent from "./components/DetailComponent/DetailComponent";
import CardList from "./components/CardList/CardList";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="books" element={<CardList />} />
          <Route path=":title" element={<DetailComponent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
