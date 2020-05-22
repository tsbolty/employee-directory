import React from "react";


function ResultList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th onClick = {()=> props.nameArray()}>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody className="list-group">
        {props.results.map(({name, phone, email, dob, login, picture}) => {
          if(name.first.toLowerCase().includes(props.search)){
          return (
          <tr className="list-group-item" key={login.uuid}>
            <td>
              <img src={picture.thumbnail} alt=""/>
            </td>
            <td>
              {name.first} {name.last}
            </td>
            <td>
              {phone}
            </td>
            <td>
              {email}
            </td>
            <td>
              {dob.date.slice(0, 10)}
            </td>
          </tr>
        )}}
        )}
      </tbody>
    </table>
  );
}

export default ResultList;
