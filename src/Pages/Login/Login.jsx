import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div id={styles.login}>
            <form className={styles.form}>
                <section className={styles.fieldContainer}>
                    <input type='email' className={'common-field'}/>
                    <p></p>
                </section>
                <section className={styles.fieldContainer}>
                    <input type='password' className={'common-field'}/>
                    <p></p>
                </section>
            </form>
        </div>
    )
}

export default Login;