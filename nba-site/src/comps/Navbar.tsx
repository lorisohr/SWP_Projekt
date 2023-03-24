import {useState} from 'react';
import {navLinks} from '../../constants';
import {basketball} from '../assets/index';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="w-[100%] flex justify-center">
            <nav className="flex items-center justify-evenly font-barlow text-lg bg-white pl-3 rounded-full w-[80%] mt-3 py-1">
                <div className="flex items-center h-11 w-11 ">
                    <img src="/basketball.png" className="h-8 w-8 absolute object-contain" />
                </div>
                <a href="#" className="hover:text-gray-400">Home</a>
                <a href="#" className="hover:text-gray-400">Teams</a>
                <a href="#" className="hover:text-gray-400">Players</a>
                <a href="#" className="hover:text-gray-400">Games</a>
            </nav>
        </div>
    )
}

export default Navbar;