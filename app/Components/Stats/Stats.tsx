import Multicolumn from "../Multicolumn/Multicolumn";
import styles from './stats.module.css'

export default function Stats() {
    const cards = [
        // 🔥 High-Converting Stats (BIG STAT + small text)
        {
            title: "10+",
            body: "Hours saved per week on average through automation",
        },
        {
            title: "8+",
            body: "Custom workflows, dashboards, and automations built.",
        },
        {
            title: "50%+",
            body: "Average reduction in manual steps after automation.",
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
