"use client";
import { useEffect, useState } from "react";

type Data={
  id: number;
  title:string;
  name:string;
  email:string;
  phone:number;
}

export default function Home() {
  const [data, setData] =useState<Data[]>([]);
  const[loading, setLoading] =useState(true);

  useEffect(()=>{
    fetch('api/posts')
    .then((response)=>response.json())
    .then((result)=>{
     setData(result);
     setLoading(false);
    })
  .catch((error)=>{
    console.error('Error:', error);
    setLoading(false);
  });
});
  
  return (
    <div> 
      <div>
      <h1>Data Table</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
}
