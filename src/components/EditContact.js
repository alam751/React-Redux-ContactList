import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const EditContact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();

  const contacts = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setFullName(currentContact.fullName);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkMail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.phone === parseInt(phone)
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
      id: parseInt(id),
      fullName,
      email,
      phone,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student data updated sucessfully");
    history.push("/");
  };

  return (
    <div className="editContactContainer">
      {currentContact ? (
        <>
          <h1>Edit Student {id}</h1>

          <form onSubmit={handleSubmit}>
            <div className="editFormContainer">
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
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="editBtnContainer">
                <button type="submit">Update Student</button>
                <Link to="/">Cancel</Link>
              </div>
            </div>
          </form>
        </>
      ) : (
        <h1>Student contact with id {id} is not found.</h1>
      )}
    </div>
  );
};

export default EditContact;
