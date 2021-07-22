import { useEffect, useState } from "react";
import * as Yup from "yup";

const Form = function({ sendData }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    tosCheck: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    tosCheck: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const formSchema = Yup.object().shape({
    name: Yup
      .string()
      .required("User name is required"),
    email: Yup
      .string()
      .email("You must enter a valid email")
      .required("User email is required"),
    password: Yup
      .string()
      .required("Password is required")
      .min(6, "Passwords must be at least 6 characters"),
    tosCheck: Yup
      .boolean()
      .oneOf([true], "You must accept the Terms of Service")
  });

  const handleChange = ev => {
    const { name } = ev.target;
    const data = ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;

    Yup
      .reach(formSchema, name)
      .validate(data)
      .then(valid => {
        setErrors({ ...errors, [name]: '' });
      })
      .catch(err => {
        setErrors({ ...errors, [name]: err.errors[0] })
      });

    setForm({
      ...form,
      [name]: data
    });
  };

  useEffect(() => {
    formSchema.isValid(form).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [form]);


  const handleSubmit = ev => {
    ev.preventDefault();
    sendData({ ...form });
  }

  return (
    <div className="Form">
    <form onSubmit={handleSubmit}>
      <label>User name:
        <input value={form.name} name="name" type="text" data-cy="name" onChange={handleChange} />
      </label>
      <label>Email:
        <input value={form.email} name="email" type="email" data-cy="email" onChange={handleChange} />
      </label>
      <label>Password:
        <input value={form.password} name="password" type="password" data-cy="password" onChange={handleChange} />
      </label>
      <label>Accept TOS?
        <input checked={form.tosCheck} name="tosCheck" type="checkbox" data-cy="tosCheck" onChange={handleChange} />
      </label>
      <button data-cy="submit" disabled={buttonDisabled}>Submit</button>
    </form>
    <div className="errors" style={{color: 'maroon'}}>
      {errors.name.length > 0 && <p>{errors.name}</p>}
      {errors.email.length > 0 && <p>{errors.email}</p>}
      {errors.password.length > 0 && <p>{errors.password}</p>}
      {errors.tosCheck.length > 0 && <p>{errors.tosCheck}</p>}
    </div>
    </div>
  );
}

export default Form;