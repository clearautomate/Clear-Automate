import Multicolumn from "../Multicolumn/Multicolumn";
import styles from './stats.module.css'

export default function Stats() {
    const cards = [
        // 🔥 High-Converting Stats (BIG STAT + small text)
        {
            title: "10+",
            body: "Hours saved per week on average for busy agents and teams",
        },
        {
            title: "8+",
            body: "Listing, lead, and transaction workflows built.",
        },
        {
            title: "50%+",
            body: "Average reduction in manual steps from listing to close.",
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={`page-width section grid3 ${styles.grid}`}>
                {cards.map((card, i) => (
                    <div
                        className={styles.card}
                        key={i}
                    >
                        <h3>{card.title}</h3>
                        <p>{card.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
