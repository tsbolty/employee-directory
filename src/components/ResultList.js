import React from "react";


function ResultList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody className="list-group">
        {props.results.map(result => (
          <tr className="list-group-item" key={result.id.value}>
            <td>
              {result.name.first} {result.name.last}
            </td>
            <td>
              {result.phone}
            </td>
            <td>
              {result.email}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultList;
