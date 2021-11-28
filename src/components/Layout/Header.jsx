import React, {useState} from 'react'
import Link from 'next/link'
import logo from '../../assets/desktop/logo.svg'
import MenuIcon from '../../assets/desktop/MenuIcon.svg'
import Close from '../../assets/desktop/Close.svg'
import Images from 'next/image'

const Header = () => {
    const [menu, setMenu] = useState(false)
    return(
        <>
        <header>
            <div className="Header-Container">
                <Images src={logo} alt='Logo' width={100} height={30}/>
                <button onClick={()=> setMenu(!menu)}>
                    <Images src={!menu ? MenuIcon : Close } alt='Logo' width={100} height={20}/>
                </button>
                <nav>
                <Link href="/">About</Link>
                <Link href="/">Services</Link>
                <Link href="/">Projects</Link>
                <Link href="/">Schedulea Call</Link>  
            </nav>
            </div>
        </header>
        <div 
        className={menu ? 'Header-Menu_Mobile Active' : 'Header-Menu_Mobile'}
        >
            <div>
            <Link href="/">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Schedulea Call</Link>
            </div>
        </div>
        </>
    )
}

export default Header