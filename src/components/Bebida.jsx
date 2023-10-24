import { Col, Card, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

function Bebida({ bebida }) {
  const { handleModalClick, handeleBebidaIdClick } = useBebidas();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Card.Text>{bebida.strInstructions}</Card.Text>
          <Button
            variant={"warning"}
            className="w-100 text-uppercase mt-2"
            onClick={() => {
              handleModalClick();
              handeleBebidaIdClick(bebida.idDrink);
            }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Bebida;
