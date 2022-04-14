import React from "react";
import TableOnMain from "../../Components/TableOnMain";
import tables from "../../tables.js";

function MainPage(){
     return(
          <div className="main">
               { tables.map(a => <TableOnMain key={a.id} tableprop={a} /> ) }
          </div>
     )
}
export default MainPage;