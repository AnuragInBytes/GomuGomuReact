import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams()
    return(
        <h1 className="bg-gray-600 text-white text-3xl font-bold p-4 rounded-lg"> User : {userid} </h1>
    )
}

export default User