import styles from '../Container/container.module.css'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

//O que propTypes
Container.propTypes = {
    children: PropTypes.any
}.isRequired

export default Container