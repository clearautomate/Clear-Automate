import { FireIcon } from "@heroicons/react/24/outline"

import styles from './infoBar.module.css'
import { BoltIcon } from "@heroicons/react/24/solid"

export default function InfoBar() {
    return (
        <div className={styles.bar}>
            <BoltIcon style={{ color: 'orange' }} />
            <p>
                Only 3 spots left this month.
            </p>
        </div >
    )
}