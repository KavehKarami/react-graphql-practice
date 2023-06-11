import "./App.css";
import CharacterList from "./pages/CharactersList";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />} exact />
      </Routes>
    </div>
  );
}

export default App;
