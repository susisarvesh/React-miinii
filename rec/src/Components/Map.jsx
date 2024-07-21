import React from "react";
import product from "../Products";
function Map() {
  return (
    <div className="grid grid-cols-1 p-3 lg:grid-cols-4">
      {product.products.data.items.map((e, index) => {
          return (
            
              <>
                  
            <div className="m-2 bg-blue-200 p-5 rounded-lg">
              <div key={index} className="w-full ">
                       
                          <h1 className="text-2xl">{e.name}</h1>
                          
                        <p>{e.description}</p>
                         <div className="text-red-400">
                           $ {e.price}
                        </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Map;
