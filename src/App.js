import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotesList from "./components/NotesList";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<NotesList />} />
            <Route path="*" component={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
