import { Routes, Route } from "react-router";
import Character from "./pages/Character";
import CharacterList from "./pages/CharactersList";
import Search from "./pages/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />} exact />
        <Route path="/search" element={<Search />} exact />
        <Route path="/:id" element={<Character />} exact />
      </Routes>
    </div>
  );
}

export default App;
