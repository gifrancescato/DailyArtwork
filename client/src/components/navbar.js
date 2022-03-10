import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth'

export default function Navbar() {

	const { isLoggedIn, user, logoutUser } = useContext(AuthContext)

	return (
		<nav >
			{/* <Link to='/'>
				<button>Home</button>
			</Link> */}
			{isLoggedIn ?
				(
					<>
						<Link  to='/favourites'>
							<button>Favourites</button>
						</Link>
						<button onClick={logoutUser}>Logout</button>
					</>
				) : (
					<>
					 <div>
						<Link to='/signup'>
							<button className="buttons" >Signup</button>
						</Link>
						<Link to='/login'>
							<button className="buttons">Login</button>
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

