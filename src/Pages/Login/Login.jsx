import React, { useState } from 'react';
import styles from './Login.module.css';
import { loginUser } from '../../Services/Axios/Requests/login';
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { HiOutlineLogin } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoLock } from "react-icons/go";
import notify from '../../Helper/Toast/toast';
import loginSchema from '../../Validation/loginValidation';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const [userData , setUserData] = useState({
        email: '',
        password: '',
    })

    const [errors , setErrors] = useState({});
    const [isPending , setIsPending] = useState(false);

    const handleValidation = async () => {
        try {
            let validation = await loginSchema.validate(userData , {
                abortEarly: false,
            });

            setErrors({});
            setIsPending(true);

            setTimeout(() => {
                loginUser(userData)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => setIsPending(false))
            }, 3000);
        }

        catch (err) {
            let errs = err.inner.reduce((acc , error) => ({
                ...acc ,
                [error.path]: error.message,
            }) , {})
            setErrors(errs);
            setIsPending(false);
        }
    }

    const handleChangeUserData = event => {
        setUserData(prev => ({...prev , [event.target.name]: event.target.value}))
    }
    
    const handleSubmit = async event => {
        event.preventDefault();
        handleValidation();
    }

    return (
        <div id={styles.login}>
            <form className={'common-form'} onSubmit={handleSubmit}>
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
                    <input type='email' className={'common-field'} placeholder='آدرس ایمیل'
                    onChange={handleChangeUserData} name='email'/>
                    <p className={styles.errorMessage}>{errors?.email ? errors.email : ''}</p>
                    <MdOutlineMailOutline className={styles.fieldIcon}/>
                </section>
                <section className={styles.fieldContainer}>
                    <input type='password' className={'common-field'} placeholder='رمز عبور'
                    onChange={handleChangeUserData} name='password'/>
                    <p className={styles.errorMessage}>{errors?.password ? errors.password : ''}</p>
                    <GoLock className={styles.fieldIcon}/>
                </section>
                <button className={'form-button'} type='submit'>
                    ورود
                    {isPending && <CircularProgress color="inherit" size={15}/>}
                </button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login;