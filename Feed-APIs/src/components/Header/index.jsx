
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
                        <a href="https://www.instagram.com/gabrieldiniz.dev/" target="_blank"><img src={instaSVG} alt="" /></a>
                        <a href="https://github.com/GabrielDinizz" target="_blank"><img src={gitSVG} alt="" /></a>
                        <a href="https://br.linkedin.com/in/gabrieldinizcarreiro" target="_blank"><img src={linkedinSVG} alt="" /></a>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header;