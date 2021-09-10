import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkMail = contacts.find(
      (contact) => contact.email === email && email
    );
    const checkNumber = contacts.find(
      (contact) => contact.phone === parseInt(phone) && phone
    );

    if (!email || !fullName || !phone) {
      return toast.warning("Please fill all the field");
    }
    if (checkMail) {
      return toast.error("This email already exist");
    }
    if (checkNumber) {
      return toast.error("This number already exist");
    }
    const data = {
      id: contacts.length !== 0 ? contacts[contacts.length - 1].id + 1 : 1,
      fullName,
      email,
      phone,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student data added sucessfully");
    history.push("/");
  };

  return (
    <div className="addContactContainer">
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="addFormContainer">
          <input
            type="text"
            placeholder="name"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="number"
            name="phoneNumber"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="addBtnContainer">
            <button type="submit">Add Student</button>
            <Link to="/">cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
