import { Link } from '@tanstack/react-router'

export default function Navbar() {
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  let user: User | null = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  };

  user = null;


  return (
    <div className='flex items-center shadow-md justify-between h-15 py-3 px-5'>
        <div className="flex items-center justify-center">
            <img src="CHECKINN.png" alt="Logo" className='w-[75px] h-[75px]' />
        </div>
        {user &&
          <div className="flex gap-3 ml-3 flex-1">
          <Link to="/" className="[&.active]:font-bold">
            Hotels
          </Link>
          <Link to="/" className="[&.active]:font-bold">
            Reservations
          </Link>
          <Link to="/" className="[&.active]:font-bold">
            Reviews
          </Link>
        </div>
        }

        {user && 
        <>
          <div className="bg-orange-500 mx-3">
            <input type="text" placeholder='Enter a location' />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] rounded-full bg-blue-300"></div>
            <span>{user?.name}</span>
          </div>
          
        </>}
        {!user && <div className='flex gap-3'>
          <Link to="/login" className="[&.active]:font-bold">
            Login
          </Link>
          <Link to="/register" className="[&.active]:font-bold">
            Register
          </Link>
        
        </div>}
        
    </div>
  )
}
