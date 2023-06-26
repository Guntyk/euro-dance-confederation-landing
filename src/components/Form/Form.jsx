import ReactInputMask from "react-input-mask";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const countryOptions = ["USA", "Ukraine", "Poland", "France"];
  const roleOptions = ["Dancer", "Coach", "Judge", "Parent", "Other"];
  return (
    <section className="form-sec">
      <div className="container">
        <h3 className="sec-title form-title">Submit an application</h3>
        <form className="form">
          <Input
            labelText="Country"
            placeholderText="Choose from the list"
            name="country"
            options={countryOptions}
            setCountry={setCountry}
            select
            country={country}
          />
          <Input labelText="First Name" placeholderText="Text" name="name" />
          <Input labelText="Surname" placeholderText="Text" name="surname" />
          <Input
            labelText="Phone number"
            placeholderText="Numbers"
            subtitleText="In the format +380987654321"
            type="tel"
            name="phone"
            phoneMask
          />
          <Input
            labelText="e-mail"
            placeholderText="Text"
            type="email"
            name="email"
          />
          <Input
            labelText="Role"
            placeholderText="Choose from the list"
            subtitleText="You can choose more than one"
            name="role"
            options={roleOptions}
            setRole={setRole}
            select
            role={role}
          />
          <Input
            labelText="Comment"
            placeholderText="Text"
            name="comment"
            textarea
          />
          <Button className="secondary" type="submit" />
        </form>
      </div>
    </section>
  );
}
