import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Login.module.css'
const Login = () => {
    const [login, setLogin] = useState([
        { name: '', lastName: '', phone: '', email: '' }
    ])
    const handleChange = e => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    const handleSubmite = e => {
        e.preventDefault();
        alert('شما با موفقیت وارد سایت شدید')
        setLogin({ ...login })
    }
    return (
        <div className={styles.container}>
            <h2>به فروشگاه محمد سهرابی خوش آمدید</h2>
            <form onSubmit={handleSubmite} className={styles.form}>
                <lable htmlFor={'name'}>نام:*</lable>
                <input type='text' name='name' value={login.name} onChange={handleChange} placeholder='Mohammad' />
                <lable htmlFor={'lastName'}>نام خانوادگی:*</lable>
                <input type='text' name='lastName' value={login.lastName} onChange={handleChange} placeholder='Sohrabi' />
                <lable htmlFor={'phone'}>تلفن:*</lable>
                <input type='number' name='phone' value={login.phone} onChange={handleChange} placeholder='0918xxxxxxx' />
                <lable htmlFor={'email'}>ایمیل:*</lable>
                <input type='email' name='email' value={login.email} onChange={handleChange} placeholder='Ms@gmail.com' />
                <div className={styles.linkForm}>
                    <Link to={"/"}>
                        <button type='submit' className='btn btn-success my-3'>
                            {" ورود به فروشگاه من"}
                        </button>
                    </Link>
                    <Link to={"sign"} className={"signUp"}>
                        {"ثبت نام | ورود"}
                    </Link>
                </div>
            </form>

        </div>
    );
};

export default Login;