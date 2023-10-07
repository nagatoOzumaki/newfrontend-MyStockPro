import React from 'react';

export default function MainDetails({ name, address, phone }) {
  return (
    <div className="w-1/2 border border-red-300 p-1 rounded-lg float-right">
      <div className="mb-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">De Mr : {name}</span>
      </div>
      <div className="mb-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">téléphone: {phone}</span>
      </div>
      <div>
        <span className="block border border-red-300 p-2 rounded-lg text-black">Adresse: {address}</span>
      </div>
    </div>
  );
}


