import ReactInputMask from "react-input-mask";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import "./Form.css";

export default function Form() {
  return (
    <section className="form-sec">
      <div className="container">
        <h3 className="sec-title form-title">Submit an application</h3>
        <form className="form">
          <Input
            labelText="Country"
            placeholderText="Choose from the list"
            name="country"
            select
          />
          <Input labelText="First Name" placeholderText="Text" name="name" />
          <Input labelText="Surname" placeholderText="Text" name="surname" />
          <Input
            labelText="Phone number"
            placeholderText="Numbers"
            subtitleText="In the format +380987654321"
            mask="+38 (099) 999-99-99"
            type="phone"
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
            select
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
