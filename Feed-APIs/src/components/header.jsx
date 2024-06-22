import styles from '../components/header.module.css'
import instaSVG from '../assets/instagram.svg'
import gitSVG from '../assets/github.svg'
import linkedinSVG from '../assets/linkedin-in.svg'

function Header() {
    return (
        <>
            <header>
                <div className={styles.container}>
                    <div className={styles.name}>
                        <a href=""><p>gabrieldiniz.dev</p></a>
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