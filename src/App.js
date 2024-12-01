import './App.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [results, setResults] = useState(null);

  const myHandleSubmit = (data) => {
    setResults(data);
    reset();
  };

  return (
    <>
      <form className="form-wr" onSubmit={handleSubmit(myHandleSubmit)}>

        {/* Wrapped input with a div for user */}
        <div className="input-wrap">
          <input
            type="text"
            {...register("user", {
              required: "Fill in the field",
            })}
          />
          {/* Display error message if the user input is invalid */}
          {errors.user && <span style={{ color: 'red' }}>{errors.user.message}</span>}
        </div>

        {/* Wrapped input with a div for email */}
        <div className="input-wrap">
          <input
            type="text"
            {...register("email", {
              required: "Fill in the email field",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              }
            })}
          // placeholder={errors.email ? errors.email.message : ""} 
          />

          {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
      {results && (
        <div className="submit-result form-wr">
          <h3>Form Submission Result:</h3>
          <p>Name: {results.user}</p>
          <p>Email: {results.email}</p>
        </div>
      )}
    </>
  );
}

export default App;
