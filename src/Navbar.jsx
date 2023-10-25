import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className='nav-center'>
        <h3 className='logo'>logo</h3>
        <button className='btn' onClick={openSidebar}>
          <FaBars />
        </button>
        {/* nav links */}
      </div>
    </nav>
  );
};
export default Navbar;
