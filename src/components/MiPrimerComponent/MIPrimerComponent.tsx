import { FC } from "react";

interface IPropsMIPrimerComponent{
    text: string;
    color: string;
    fontSize?: number;

}


export const MIPrimerComponent : FC<IPropsMIPrimerComponent>= ({
    text,
    color,
    fontSize
    }) => {
  return (
    <div style={{color: `${color}`, fontSize: `${fontSize || 1}rem`}}>
        <p>{text}</p>
    </div>
  )
}

