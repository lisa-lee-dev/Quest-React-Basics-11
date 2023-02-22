import React from 'react';

export default function SignupForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const display = (e) => {
    e.preventDefault();
    
    console.log(name + '&' + email);
  };

  return (
    <form>
      <label htmlFor="name">
        Name :
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          placeholder="Mary"
        />
      </label>
      <br />
      <label htmlFor="email">
        Email :
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="mary.poppins@disney.fr"
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={display}>
        Submit
      </button>
    </form>
  );
}
