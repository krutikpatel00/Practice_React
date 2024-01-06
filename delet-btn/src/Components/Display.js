import React, { useState } from "react";
import Delete from "./Delete";

const Display = () => {
  let [data, setdata] = useState([
    { name: "krutik", age: 45 },
    { name: "jdgj", age: 56 },
    { name: "krutik", age: 45 },
    { name: "krutik", age: 45 },
    { name: "krutik", age: 45 },
    { name: "krutik", age: 45 }
  ]);

  let deleteData = (index) => {
    data.splice(index, 1);
    setdata([...data]);
  };
  return (
    <>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>no </th>
              <th>name</th>
              <th>age</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((v, i) => {
              return (
                <tr key={i}>
                  <th>{++i} </th>
                  <th>{v.name}</th>
                  <th>{v.age}</th>
                  <th>
                    <Delete i={--i} deleteData={deleteData} />
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
