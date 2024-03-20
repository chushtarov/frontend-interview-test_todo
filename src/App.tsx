/* VENDOR */
import { Route, Routes } from "react-router-dom";

/* APPLICATION */
import "./App.css";
import { Header } from "./components/Header/Header";
import { Tasks } from "./pages/Tasks/Tasks";
import { Categories } from "./pages/Categories/Categories";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Tasks />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Tasks />} />
      </Routes>
    </div>
  );
};

export default App;
