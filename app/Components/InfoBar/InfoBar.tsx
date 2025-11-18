import { FireIcon} from "@heroicons/react/24/outline"

import styles from './infoBar.module.css'

export default function InfoBar() {
    return (
        <div className={styles.bar}>
            <FireIcon style={{ color: 'orange' }} />
            <p>
                Only 5 spots left this month — book your free call.
            </p>
        </div >
    )
}