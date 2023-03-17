import React from "react";
export function Table({}) {
  return <div className="cartTable mt-5
             w-full flex justify-center">
              <table className="border-2 border-white rounded-md lg:w-3/4 w-full ">
                <tr className="text-white lg:text-2xl text-md">
                  <th>Artikel</th>
                  <th>Menge</th>
                  <th>Preis</th>
                </tr>
              </table>
            </div>;
}
 