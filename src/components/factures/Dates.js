import React from 'react';

export default function InvoiceDetails({ invoiceNumber, invoiceDate, dueDate, clientName, clientAddress, code}) {
  return (
    <div className="flex flex-wrap">
      {/* Groupe 1 */}
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">
          Nº de Facture &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-red-500">{invoiceNumber}</span>
        </span>
      </div>
      <div className="w-1/2 p-1">
      <span className="block border border-red-300 p-2 rounded-lg text-black">Date de Facturation&nbsp;:&nbsp;<span className="text-red-500">{invoiceDate}</span>
        </span>      </div>
      
      <div className="w-1/2 p-1">
      <span className="block border border-red-300 p-2 rounded-lg text-black">
      Date d'Échéance&nbsp;:&nbsp;<span className="text-red-500">{dueDate}</span>
        </span>
      </div>
      {/* Groupe 2 */}
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">De Mr &nbsp;:&nbsp; <span className="text-red-500">BENAOUDA RABEH</span></span>
      </div>
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">téléphone &nbsp;:&nbsp; <span className="text-red-500">06.61.83.65.23/33</span></span>
      </div>
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Adresse &nbsp;:&nbsp; <span className="text-red-500">KHEMISSET</span> </span>
      </div>

      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">A Mr &nbsp;:&nbsp; <span className="text-red-500">{clientName}</span></span>
      </div>
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Adresse Client &nbsp;:&nbsp; <span className="text-red-500">{clientAddress}</span></span>
      </div>
      <div className="w-1/2 p-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Code client  &nbsp;:&nbsp; <span className="text-red-500">{code}</span></span>
      </div>
    </div>
  );
}
