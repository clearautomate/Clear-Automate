import WorkCard from '../Components/Works/WorkCard/WorkCard'
import styles from './works.module.css'

export default function Page() {
    return (
        <div className="page-width">
            <div className='section'>
                <div className={`section-header ${styles.title}`}>
                    <h2>Projects That Drive Real Estate Success</h2>
                    <p>Real-world dashboards and tools designed to streamline workflows and boost performance for busy teams.</p>
                </div>
                <div className='grid3'>
                    <WorkCard
                        title="Case Management System"
                        description="Streamlined automated process for submitting, assigning, and managing cases in real time."
                        client='AFGE'
                        image="website"
                        stack={['Next.js', 'SQL']}
                        id="afge"
                    />
                    <WorkCard
                        title="Automatic Inovice Generator"
                        description="Streamlined automated process for submitting, assigning, and managing cases in real time."
                        client='Foundation First'
                        image="website"
                        stack={['Python', 'APIs', 'Mail']}
                        id="ff"
                    />
                    {/* <WorkCard /> */}
                </div>
            </div>
        </div>
    )
}
