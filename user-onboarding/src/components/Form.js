import { useState } from "react";

const Form = function() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    tosCheck: false,
  });

  const handleChange = ev => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.type === "checkbox" ? ev.target.checked : ev.target.value
    });
  };

  return (
    <form>
      <label>User name:
        <input value={form.name} name="name" type="text" onChange={handleChange} />
      </label>
      <label>Email:
        <input value={form.email} name="email" type="email" onChange={handleChange} />
      </label>
      <label>Password:
        <input value={form.password} name="password" type="password" onChange={handleChange} />
      </label>
      <label>Accept TOS?
        <input checked={form.tosCheck} name="tosCheck" type="checkbox" onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Form;