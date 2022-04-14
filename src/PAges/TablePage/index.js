import React from "react";
import tables from "../../tables.js";
import {useParams} from "react-router-dom";

function TablePage(){
    let params = useParams();
    let table = tables.find(a => a.id === params.id);
    return(
        <div className="TablePage">
            <h1 className="tablename">{table.name}</h1>
            <img className="tableimage" src={table.img} alt=""/>
            <p className="tabledescription">{table.description}</p>
        </div>
    )
}

export default TablePage;