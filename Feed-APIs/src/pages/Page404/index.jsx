import Header from '../../components/Header'
import Container from '../../components/Container'
import styles from '../Page404/page404.module.css'
import img404 from '../../assets/404img.png'
import seta from '../../assets/setaEsquerda.png'


function Page404() {
    return (
        <>
            <Header />
            <Container>
                <div className={styles.titulos}>
                    <h2>Oops!</h2>
                    <h3>Não há peixe! 404Error</h3>
                </div>
                <div className={styles.img404}>
                    <img src={img404} alt="" />
                </div>
                <div className={styles.inicio}>
                    <img src={seta} alt="" />
                    <h3>Início</h3>
                </div>
            </Container>
        </>
    )
}

export default Page404