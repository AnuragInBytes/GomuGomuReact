import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

    const data = useLoaderData();

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/anuragInBytes`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])
    return(
        <h1 className="bg-gray-600 text-3xl text-white p-4 m-4 font-bold"> 
            GitHub Followers : {data.followers}

            <img src={data.avatar_url} alt="profile-pic-github" srcset="" width={300} />
        </h1>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/anuragInBytes`)
    return response.json()
}