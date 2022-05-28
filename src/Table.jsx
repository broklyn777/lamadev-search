import React from "react";
const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Email</th>
         
        </tr>
       
          {/* <tr >
            <td>Einar</td>
            <td>Lof</td>
            <td>einar@gmail.com</td>
          </tr> */}
    
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
        
     
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;