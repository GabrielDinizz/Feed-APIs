
import { Link } from 'react-router-dom'

//Styles
import styles from '../Header/header.module.css'
import instaSVG from '../../assets/instagram.svg'
import gitSVG from '../../assets/github.svg'
import linkedinSVG from '../../assets/linkedin-in.svg'

function Header() {
    return (
        <>
            <header>
                <div className={styles.container}>
                    <div className={styles.name}>
                        <Link to="/"><p>gabrieldiniz.dev</p></Link>
                    </div>
                    <div className={styles.divIcons}>
                        <img src={instaSVG} alt="" />
                        <img src={gitSVG} alt="" />
                        <img src={linkedinSVG} alt="" />
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header;