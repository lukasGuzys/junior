import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import the SCSS file

const LoginForm = () => {
  const navigate = useNavigate();

  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleLogin = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      // Simulate a login process (replace with your actual login logic)
      // await login(email, password);

      // Redirecting user after successful login
      navigate('/Sign');
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className='Login-form-container'>
      <h2 className='Login-title'>Login</h2>
      {error && <p className="error-message">{error}</p>} {/* Added class for styling */}
      <form onSubmit={handleLogin}>
        <div className='login-email'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='password-email'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form >
      <p className='sign-up-text'>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginForm;
