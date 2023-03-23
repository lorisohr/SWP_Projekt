import {useState} from 'react';
import {navLinks} from '../../constants';
import {basketball} from '../assets';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="w-[100%] flex justify-center">
            <nav className="flex justify-center font-barlow font-bold text-lg bg-white pt-3 pb-3 pl-3 rounded-full w-[80%] mt-3">
                <img v-attr="src:{basketball}" className="ml-0" />
                <a className="mx-3">Teams</a>
                <a className="mx-3">Players</a>
                <a className="mx-3">Games</a>
                
            </nav>
        </div>
    )
}

export default Navbar;