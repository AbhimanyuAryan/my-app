'use client';

import { useState } from 'react';
import { schema } from '../validation/schema';

export default function Home() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = schema.parse({ name, age: Number(age) });
      setResponse({ message: 'Valid data', data });
    } catch (e) {
      console.log(e.errors[0].message);
      //setResponse({ message: e.errors });
    }
  };

  return (
    <div>
      <h1>Validation Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          {response.message === 'Valid data' ? (
            <pre>{JSON.stringify(response.data, null, 2)}</pre>
          ) : (
            <pre>{JSON.stringify(response.message, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  );
}
