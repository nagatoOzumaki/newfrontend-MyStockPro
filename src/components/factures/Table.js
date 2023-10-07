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
  <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border border-gray-300 text-lg font-semibold text-black">Designations</th>
          <th className="py-2 px-4 border border-gray-300 text-lg font-semibold text-black">Quantité</th>
          <th className="py-2 px-4 border border-gray-300 text-lg font-semibold text-black">PU HT</th>
          <th className="py-2 px-4 border border-gray-300 text-lg font-semibold text-black">Montant HT</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, description, quantity, price, amount }) => (
          <tr key={id} className="bg-white">
            <td className="py-2 px-4 border border-gray-300 text-lg text-black">{description}</td>
            <td className="py-2 px-4 border border-gray-300 text-lg text-black">{quantity}</td>
            <td className="py-2 px-4 border border-gray-300 text-lg text-black">{price} Dh</td>
            <td className="py-2 px-4 border border-gray-300 text-lg text-black">{amount} Dh</td>
          </tr>
        ))}
      </tbody>
    </table>

        </>
    )
}