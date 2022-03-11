import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'

export default function Navbar() {

	const { isLoggedIn, user, logoutUser } = useContext(AuthContext)

	return (
		<nav className="nav" >
			{/* <Link to='/'>
				<button>Home</button>
			</Link> */}
			{isLoggedIn ?
				(
					<>
						<div className='buttonsNavDiv' >
						<Link  to='/favourites'>
							<button className='buttonsNav'>Favourites</button>
						</Link >
							<button className='buttonsNav' onClick={logoutUser}>Logout</button>
							</div>
					</>
				) : (
					<>
					 <div className="buttonsNav">
						<Link to='/signup'>
							<button className="buttonsNav" >Signup</button>
						</Link>
						<Link to='/login'>
							<button className="buttonsNav">Login</button>
						</Link>
						</div>
					</>
				)}
				{/* {!isLoggedIn && (
        			<>
         				<Link to="/signup"> <button>Sign Up</button> </Link>
          				<Link to="/login"> <button>Login</button> </Link>
        			</>
      			)}     */}
		</nav>
	)
}

