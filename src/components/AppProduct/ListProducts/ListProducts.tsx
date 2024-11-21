import { FC } from "react";
import { Card } from "react-bootstrap";

interface ItemProduct {
    precio: number;
    imagen: string;
    nombre: string;
}

interface IPropsListProducts{
    arrItems : ItemProduct[]
}

export const ListProducts: FC<IPropsListProducts> = ({arrItems}) => {
  return (
    <div className="p-1 m-2 border rounded d-grid gap-3" style={{
        gridTemplateColumns: "repeat(3, 1fr)",
        justifyItems: "center",
        alignContent: "center",
    }}>

        {arrItems.map((el, i) => (
            <Card key={i} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.imagen} />
                <Card.Body>
                    <Card.Title>{el.nombre}</Card.Title>
                    <Card.Text>${el.precio}</Card.Text>
                </Card.Body>
                </Card>
                ))
            }

    </div>
  );
}
