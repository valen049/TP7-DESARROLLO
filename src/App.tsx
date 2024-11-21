import { useState } from "react"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { MIPrimerComponent } from "./components/MiPrimerComponent/MIPrimerComponent"
import { ComponentUseEffect } from "./components/ComponentsUseEffect/ComponentUseEffect";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { AppProduct } from "./components/AppProduct/AppProduct";


export const App = () => {



  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', gap: '2vh'}}>
    
    {/* <MIPrimerComponent 
    text={"Texto desde propiedades"} 
    color="red" 
    fontSize={2}
    />
 
    <ComponentCounter />
    <ComponentUseEffect /> */}
    {/* <FormComponent /> */}
    <AppProduct />
    </div>

    </>
  );
};
