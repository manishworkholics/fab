import React from "react";
import { PartProps } from "./types";

const BomResult: React.FC<{ part: PartProps }> = ({ part }) => {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4 border flex flex-col h-full">
      <h2 className="text-xl font-semibold text-gray-800">{part.mpn}</h2>
      <hr className="mb-3" />
      <div className="text-sm text-gray-700 space-y-1">
        <p>
          <span className="inline-block bg-blue-100 font-semibold px-2 py-1 rounded">
            Manufacturer: {part.manufacturer}
          </span>
        </p>
        <p>{part.description}</p>
        <p>
          <strong>Price: </strong>
          <span className="inline-block bg-orange-100 text-orange-800 font-semibold px-2 py-1 rounded-2xl">
            ${part.price.toFixed(2)}
          </span>
        </p>
      </div>

      <div>
        <h3 className="font-medium text-gray-800 mb-2">Price Breaks</h3>
        <ul className="text-sm text-gray-600">
          {part.price_breaks.map((breakItem, index) => (
            <li key={index} className="flex justify-between py-1 border-b border-gray-200">
              <span>Qty {breakItem.quantity}</span>
              <span className="text-orange-800">${breakItem.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>

      {part.substitutes && part.substitutes.length > 0 && (
        <div>
          <h3 className="font-medium text-gray-800 mt-4">Substitutes</h3>
          <div className="space-y-2 text-sm text-gray-700">
            {part.substitutes.map((sub, index) => (
              <div key={index} className="border rounded p-2 bg-gray-50">
                <h2 className="text-sm font-semibold text-gray-800">
                  {sub.ManufacturerProductNumber}
                </h2>
                <hr className="mb-3" />
                <p>
                  <span className="inline-block bg-blue-100 font-semibold px-2 py-1 rounded">
                    Manufacturer: {sub.Manufacturer.Name}
                  </span>
                </p>
                <p>{sub.Description}</p>
                <p>
                  <strong>Price: </strong>
                  <span className="inline-block bg-orange-100 text-orange-800 font-semibold px-2 py-1 rounded-2xl">
                    ${sub.UnitPrice.toFixed(2)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BomResult;
