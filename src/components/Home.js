import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted sucessfully");
  };

  return (
    <div>
      <div className="addContact">
        <h1>Welcome to React Redux Contact App</h1>
        <Link to="/add" className="addBtn">
          Add Contact{" "}
        </Link>
      </div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((data, id) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{data.fullName}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>
                    <div className="btnContainer">
                      <Link className="editBtn" to={`/edit/${data.id}`}>
                        Edit
                      </Link>
                      <button
                        type="button"
                        className="deleteBtn"
                        onClick={() => deleteContact(data.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
