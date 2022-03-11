import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth'

export default function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined);

	const navigate = useNavigate()

	const { storeToken, verifyStoredToken } = useContext(AuthContext)

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password }
		axios.post('/api/auth/login', requestBody)
			.then(response => {
				// redirect to projects
				console.log('i have a token mothafukkas')
				const token = response.data.authToken
				// store the token
				storeToken(token)
				verifyStoredToken()
					.then(() => {
						// redirect to projects
						navigate('/artworks')
					})
			})
			.catch(err => {
				const errorDescription = err.response.data.message
				setErrorMessage(errorDescription)
			})
	}

	const handleEmail = e => setEmail(e.target.value)
	const handlePassword = e => setPassword(e.target.value)

	return (
		<>
		<div className="signupWrap">
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div><label htmlFor="email">Email: </label>
				<input className="input" type="text" value={email} onChange={handleEmail} /></div>
				<div><label htmlFor="password">Password: </label>
				<input className="input" type="password" value={password} onChange={handlePassword} /></div>
				<div><button className="buttons" type="submit">Log In</button></div>
			</form>

			{errorMessage && <h5>{errorMessage}</h5>}

			<h3 style={{ fontSize: '15px' }}>Don't have an account?</h3>
			<Link to='/signup'>Signup</Link>
			</div>
		</>
	)
}

