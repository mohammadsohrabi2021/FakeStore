import React,{useState} from 'react';
import styles from './Concat.module.css'
const Concat = () => {
    const [form, setForm] = useState([
        {
            name: "",
            email: "",
            text: "",
        }
    ])
    const handleSubmite = e => {
        e.preventDefault();
        alert('نظر شما با موفقیت ثبت شد و در کوتاه ترین زمان ممکن با شما تماس گرفته میشود');
        setForm({ ...form, name: "", email: "", text: "" })
    }
    const handleForm = e => {
        setForm({ ...form, [e.target.name]: e.target.value });

    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmite} className={styles.Form}>
                <h2 className={styles.text}>تماس با ما</h2>
                <h5 className={styles.text}>پیشنهاد و انتقاد های خود را از طریق فرم زیر ارسال نمایید</h5>
                <input type="text" value={form.name} onChange={handleForm}  placeholder="لطفا نام خود را اینجا تایپ کن"/>
                <input type="email" value={form.email} onChange={handleForm}  placeholder="ایمیل رو وارد کن"/>
                <textarea type="text" value={form.name} onChange={handleForm}  rows="10" cols="50" placeholder="توضیحات"></textarea>
                <button className='btn btn-success'>
                    ارسال فرم
                </button>
            </form>
        </div>
    );
};

export default Concat;