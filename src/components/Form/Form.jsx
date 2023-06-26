import ReactInputMask from "react-input-mask";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import "./Form.css";
import { useState } from "react";
import { createUser } from "../../hooks/useUsers";

export default function Form() {
  const [submit, setSubmit] = useState(false);
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const countryOptions = ["USA", "Ukraine", "Poland", "France"];
  const roleOptions = ["Dancer", "Coach", "Judge", "Parent", "Other"];

  function handleSubmit(e) {
    e.preventDefault();
    if (country.length !== 0 && role.length !== 0) {
      const user = {
        data: {
          country,
          name: e.target.name.value.trim(),
          surname: e.target.surname.value.trim(),
          phone: e.target.phone.value.trim(),
          email: e.target.email.value.trim(),
          role,
          comment: e.target.comment.value.trim(),
        },
      };
      createUser(JSON.stringify(user));
      setSubmit(true);
    } else {
      if (country.length === 0) {
        alert('Fill in the "Country" field');
      } else if (role.length === 0) {
        alert('Fill in the "Role" field');
      }
    }
  }

  return (
    <>
      {!submit ? (
        <section className="form-sec">
          <div className="container">
            <h3 className="sec-title form-title">Submit an application</h3>
            <form className="form" onSubmit={handleSubmit}>
              <Input
                labelText="Country"
                placeholderText="Choose from the list"
                name="country"
                options={countryOptions}
                setCountry={setCountry}
                select
                country={country}
                required
              />
              <Input
                labelText="First Name"
                placeholderText="Text"
                name="name"
                required
              />
              <Input
                labelText="Surname"
                placeholderText="Text"
                name="surname"
                required
              />
              <Input
                labelText="Phone number"
                placeholderText="Numbers"
                subtitleText="In the format +380987654321"
                type="tel"
                name="phone"
                phoneMask
                required
              />
              <Input
                labelText="e-mail"
                placeholderText="Text"
                type="email"
                name="email"
                required
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
                required
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
      ) : (
        <section className="form-sec">
          <h3 className="sec-title form-title">Thanks!</h3>
        </section>
      )}
    </>
  );
}