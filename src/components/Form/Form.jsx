import MultipleInput from '../common/Input/MultipleInput';
import { createUser } from '../../hooks/useUsers';
import { countries, roles } from '../../data';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { useState } from 'react';
import './Form.css';

export default function Form() {
  const [nonValid, setNonValid] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [country, setCountry] = useState('');
  const [role, setRole] = useState(['']);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      e.target.name.value.length !== 0 &&
      e.target.surname.value.length !== 0 &&
      e.target.phone.value.length !== 0 &&
      e.target.email.value.length !== 0 &&
      country.length !== 0 &&
      role[0] !== '' &&
      role[0] !== 'Choose from the list'
    ) {
      const user = {
        data: {
          country,
          name: e.target.name.value.trim(),
          surname: e.target.surname.value.trim(),
          phone: e.target.phone.value.trim(),
          email: e.target.email.value.trim(),
          role: JSON.stringify(role),
          comment: e.target.comment.value.trim(),
        },
      };
      createUser(JSON.stringify(user));
      setSubmit(true);
    } else {
      setNonValid(true);
    }
  }

  return (
    <>
      {!submit ? (
        <section className='section form-sec' id='form'>
          <div className='container'>
            <h3 className='sec-title form-title'>Submit an application</h3>
            <form className='form' onSubmit={handleSubmit}>
              <Input
                labelText='Country'
                placeholderText='Choose from the list'
                name='country'
                id='country'
                options={countries}
                setCountry={setCountry}
                select
                country={country}
                nonValid={nonValid}
              />
              <Input labelText='First Name' placeholderText='Text' name='name' nonValid={nonValid} />
              <Input labelText='Surname' placeholderText='Text' name='surname' nonValid={nonValid} />
              <Input
                labelText='Phone number'
                placeholderText='Numbers'
                subtitleText='In the format +380987654321'
                type='tel'
                name='phone'
                phoneMask
                nonValid={nonValid}
              />
              <Input labelText='e-mail' placeholderText='Text' type='email' name='email' nonValid={nonValid} />
              <MultipleInput role={role} setRole={setRole} options={roles} nonValid={nonValid} />
              <Input labelText='Comment' placeholderText='Text' name='comment' textarea />
              <Button className='secondary' type='submit' />
            </form>
          </div>
        </section>
      ) : (
        <section className='section form-sec'>
          <h3 className='sec-title form-title thanks-title'>Thanks!</h3>
        </section>
      )}
    </>
  );
}
