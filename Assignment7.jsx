import { useState } from "react";
import axios from "axios";

function Data(){

const [arr,setArr]=useState([]);

const getdata = async() =>{
 
    try{
        const res= await axios.get("https://jsonplaceholder.typicode.com/todos");
        setArr(res.data);
        }catch(err){
            console.log("axios error",err);
        }
};

return(
<div>
   <button onClick={getdata}>Get Data</button>
   <h2>Recived data</h2>
   <table border="3">
    <thead>
        <tr>
            <th>ID</th>
            <th>userId</th>
            <th>Title</th>
            <th>Completed</th>
        </tr>
    </thead>
    <tbody>
     {arr.map((item)=>(
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.userId}</td>
        <td>{item.title}</td>
        <td>{item.completed ? "yes" : "no" }</td>
         </tr>
     ))}   
            
    </tbody>
   </table>

</div>
);
}

function Sample(){
   return <Data/>;

}

export default Sample;
