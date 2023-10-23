import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

const Inicio = () => {
  return <h1>Inicio</h1>;
};

const Pagina = () => <h1>Página</h1>;

const Tienda = () => <h1>Tienda</h1>;

function App() {
  return (
    <>
      <header style={{ backgroundColor: "blue" }}>
        <div className="App">holi cohorte</div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/pagina">Página</Link>
          </li>
          <li>
            <Link to="/tienda">Tienda</Link>
          </li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pagina" element={<Pagina />} />
        <Route path="/tienda" element={<Tienda />} />
      </Routes>
    </>
  );
}

export default App;
