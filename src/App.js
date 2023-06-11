import "./App.css";
import Character from "./pages/Character";
import CharacterList from "./pages/CharactersList";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />} exact />
        <Route path="/:id" element={<Character />} exact />
      </Routes>
    </div>
  );
}

export default App;
