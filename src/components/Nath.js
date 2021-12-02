import Header from "./Header/header"
import styles from "./Header/Header.module.css"

const Nath = () => {
    return (
        <div>
            <Header/>
            <br/>
            <br/>
            <button className={styles.button} onClick="">Ajouter</button>
            <br/>
            <p>sal</p>
        </div>
    )
}

export default Nath