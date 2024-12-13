import { useState } from "react";

export function ModalComponent({ closemodal }) {
  const [data, setdata] = useState({
    username: "",
    email: "",
    phone: "",
    date: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setdata({ ...data, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, date } = data;
    if (!username) {
      alert("Please fill out name field");
      return;
    }
    if (!email) {
      alert("Please fill out email field");
      return;
    }
    if (!phone) {
      alert("Please fill out phone field");
      return;
    }
    if (!date) {
      alert("Please fill out date field");
      return;
    }
    if (!email.includes("@")) {
      alert(`Please include @ in the email.${email} is missing @`);
      return;
    }
    if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a valid phone number");
      return;
    }
    if (new Date(date) > new Date()) {
      alert("Invalid date of birth. Please enter a past date");
      return;
    }
    setdata({ username: "", email: "", phone: "", date: "" });
    closemodal();
  };

  return (
    <div className="modal-content">
      <form onSubmit={handlesubmit}>
        <h1>Fill Details</h1>
        <div>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            value={data.username}
            onChange={handlechange}
          />
          <div>
            <label htmlFor="email">Email Address:</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <br />
            <input
              type="number"
              name="phone"
              id="phone"
              value={data.phone}
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="date">Date of Birth:</label>
            <br />
            <input
              type="datetime-local"
              name="date"
              id="date"
              value={data.date}
              onChange={handlechange}
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
