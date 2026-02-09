import Multicolumn from "../Multicolumn/Multicolumn";
import { Reveal, RevealGroup } from "../Reveal/Reveal";
import styles from './stats.module.css'

export default function Stats() {
    const cards = [
        // 🔥 High-Converting Stats (BIG STAT + small text)
        {
            title: "10+",
            body: "Hours saved per week.",
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
        <RevealGroup>
            <div className={styles.wrapper}>
                <div className={`page-width section grid3 ${styles.grid}`}>
                    {cards.map((card, i) => (
                        <Reveal key={i} delay={(i + 1) / 5}>
                            <div
                                className={styles.card}
                                key={i}
                            >
                                <h3>{card.title}</h3>
                                <p>{card.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </RevealGroup>
    );
}
