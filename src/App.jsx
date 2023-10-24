import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalBebida from "./components/ModalBebida";
import { CategoriasProvider } from "./context/CategoriasProvaider";
import { BebidasProvider } from "./context/BebidasProvider";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <CategoriasProvider>
        <BebidasProvider>
          <header className="py-5">
            <h1>Buscador de Bebidas</h1>
          </header>
          <Container className="mt-5">
            <Formulario />
            <ListadoBebidas />
            <ModalBebida />
          </Container>
        </BebidasProvider>
      </CategoriasProvider>
    </ErrorBoundary>
  );
}

export default App;
