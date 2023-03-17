import {useState} from 'react';
import {navLinks} from '../../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="bg-black pt-3 pb-3 pl-3">
           <a className="text-purple-600 mr-6">HTML</a>
           <a className="text-white">NBA</a>
        </nav>
    )
}

export default Navbar;