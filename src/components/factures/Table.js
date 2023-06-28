import React from "react"
import { useState, useEffect } from 'react';


export default function Table({list ,somme,vat20}) {

    const [vatAmount20, setVatAmount20] = useState("");
            useEffect(() => {
              const vatRate = 20;
              const vat = (vatRate / 100) * somme;
              setVatAmount20(vat);
            }, [somme]);
    const [vatAmount10, setVatAmount10] = useState("");
            useEffect(() => {
              const vatRate = 10;
              const vat = (vatRate / 100) * somme;
              setVatAmount10(vat);
            }, [somme]);
    const [vatAmount5, setVatAmount5] = useState("");
            useEffect(() => {
              const vatRate = 5.5;
              const vat = (vatRate / 100) * somme;
              setVatAmount5(vat);
            }, [somme]);
    

    return(
        <>
       <table width="100%" className="mb-20">
  <thead>
    <tr className="bg-gray-100">
      <td className="text-xl font-bold font-normal text-black border-r border-black border-t border-b border-l">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description</td>
      <td className="text-xl font-bold font-normal text-black border-r border-black border-t border-b border-l">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantité</td>
      <td className="text-xl font-bold font-normal text-black border-r border-black border-t border-b border-l">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PU HT</td>
      <td className="text-xl font-bold font-normal text-black border-black border-t border-b border-l border-r">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Montant HT</td>
    </tr>
  </thead>
  {list.map(({ id, description, quantity, price, amount }) => (
    <React.Fragment key={id}>
      <tbody>
        <tr>
          <td className="text-xl font-bold font-normal text-black border-r border-black border-t border-b border-l">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}</td>
          <td className="text-xl font-bold font-normal text-black border-r border-black border-t border-b border-l">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{quantity}</td>
          <td className="text-xl font-bold font-normal text-black border-r border-black border-t border-b border-l">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price} Dh</td>
          <td className="text-xl font-bold font-normal text-black border-black border-t border-b border-l border-r">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{amount}Dh</td>
        </tr>
      </tbody>
    </React.Fragment>
  ))}
</table>
        </>
    )
}