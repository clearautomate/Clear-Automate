import { ClockIcon } from '@heroicons/react/24/outline';
import styles from './contact.module.css'
import Image from 'next/image';

export default function Contact() {
    return (
        <form id='contact' className='page-width section'>
            <div className={`card ${styles.card}`}>
                <h2>Let's Get Started!</h2>
                <div className={styles.me}>
                    <div className={styles.active}>
                        <Image className={styles.proflie} src={'/profile.png'} alt='profile' width={128} height={128}/>
                    </div>
                    <div className={styles.activeText}>
                        <p>
                            <strong>Joel Carmenini</strong>
                            <span className={styles.jobTitle}> &bull; Owner & Developer</span>
                        </p>
                        <div className={styles.iconWithText}><ClockIcon /><p style={{ opacity: 0.85 }}>Typically responds within a few hours</p></div>
                    </div>
                </div>
                <input className="text-input" type="text" placeholder="Name" />
                <input className="text-input" type="email" placeholder="Email" />
                <textarea className={`text-input ${styles.textArea}`} rows={4} placeholder="Brief Description" />
                <button className="button-solid" type="submit">Get Started Risk-Free</button>
                <small>We'll never share your data with anyone.</small>
            </div>
        </form>
    );
}
