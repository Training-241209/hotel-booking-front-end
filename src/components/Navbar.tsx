import { Link, useLocation} from '@tanstack/react-router'
import { Heading1 } from 'lucide-react';

export default function Navbar() {
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  let user: User | any = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  };

  user = null;

  // this is used to check if user is either on the login or register page to conditionally apply styles to the navbar
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  const isAuth = isLoginPage || isRegisterPage;

  return (
    <div className={`flex items-center justify-between h-24 py-3 px-36 ${user ? 'shadow-md' : ''} ${isAuth ? 'bg-transparent':'bg-[#022b60]'}`}>
      <div className="flex items-center justify-center">
        <Link to="/HomePage">
          <img src="logo-white.png" alt="Logo" className='w-[75px] h-[75px]' />
        </Link>
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
        </>
      }
      {!user && <div className='flex gap-3'>
        <Link to="/login" className="[&.active]:font-bold text-white text-xl">
          Login
        </Link>
        <Link to="/register" className="[&.active]:font-bold text-white text-xl">
          Register
        </Link>
      </div>}
        
    </div>
  )
}
