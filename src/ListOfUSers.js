import React from "react";

function ListOfUSers({ user }) {
  return (
    <>
      <div>
        {" "}
        Name: {user.name}
        <br />
        Username: {user.username}
      </div>
      <div>Email: {user.email}</div>
      <div>Company: {user.company.name}</div>
      <div>Address: {user.address.city}</div>
      <div>____________________________________________</div>
    </>
  );
}

export default ListOfUSers;
