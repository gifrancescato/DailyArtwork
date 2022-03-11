import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password, name }
		axios.post('/api/auth/signup', requestBody)
			.then(response => {
				// redirect to login
				navigate('/login')
			})
			.catch(err => {
				const errorDescription = err.response.data.message
				setErrorMessage(errorDescription)
			})
	}

	const handleEmail = e => setEmail(e.target.value)
	const handleName = e => setName(e.target.value)
	const handlePassword = e => setPassword(e.target.value)
	const [errorMessage, setErrorMessage] = useState(undefined);

	return (
		<>
		<div className="signupWrap">
			<h1>Signup</h1>
			<form onSubmit={handleSubmit}>
				<div><label htmlFor="email">Email: </label>
				<input className="input" type="text" value={email} onChange={handleEmail} /></div>
				<div><label htmlFor="password">Password: </label>
				<input className="input" type="password" value={password} onChange={handlePassword} /></div>
				<div><label htmlFor="name">Name: </label>
				<input className="input" type="text" value={name} onChange={handleName} /></div>
				<button className="buttons" type="submit">Sign Up</button>
			</form>

			{errorMessage && <h5>{errorMessage}</h5>}

			<h3>Already have an account?</h3>
			<Link to='/login'>Login</Link>
		</div>
		</>
	)
}
