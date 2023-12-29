import React from 'react';
import styles from './Login.module.css';
import { NavLink } from 'react-router-dom';
import { HiOutlineLogin } from "react-icons/hi";

const Login = () => {
    return (
        <div id={styles.login}>
            <form className={styles.form}>
                <section className={styles.header}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>ورود</h1>
                        <HiOutlineLogin className={styles.loginIcon}/>
                    </div>
                    <div className={styles.linkContainer}>
                        <p>حساب کاربری ندارید؟</p>
                        <NavLink className={styles.link} to={'/register'}>
                            ثبت نام
                        </NavLink>
                    </div>
                </section>
                <section className={styles.fieldContainer}>
                    <input type='email' className={'common-field'}/>
                    <p className={styles.errorMessage}></p>
                </section>
                <section className={styles.fieldContainer}>
                    <input type='password' className={'common-field'}/>
                    <p className={styles.errorMessage}></p>
                </section>
                <button className={'form-button'} type='button'>
                    ورود
                </button>
            </form>
        </div>
    )
}

export default Login;