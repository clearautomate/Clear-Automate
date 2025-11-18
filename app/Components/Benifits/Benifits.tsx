import Multicolumn from "../Multicolumn/Multicolumn";
import {
    ClockIcon,
    SparklesIcon,
    ArrowPathIcon,
    FolderIcon,
    ChartBarIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Benefits() {
    const cards = [
        {
            icon: <ClockIcon />,
            title: "Saves Hours Weekly",
            body: "Automate repetitive workflows so you don’t waste time on manual tasks.",
            color: 45,        // orange/yellow for time-saving, energy
        },
        {
            icon: <ChartBarIcon />,
            title: "Improves Client Experience",
            body: "Clients get instant updates, reports, or actions without delays.",
            color: 120,       // blue for trust and professionalism
        },
        {
            icon: <ArrowPathIcon />,
            title: "Scales Effortlessly",
            body: "Handles more work without needing to hire or micromanage.",
            color: 210,       // green for growth and scalability (keep)
        },
        {
            icon: <ExclamationTriangleIcon />,
            title: "Reduces Errors",
            body: "No more forgetting steps or misplacing info thanks to structured automations.",
            color: 0,         // red for warning/errors
        },
        {
            icon: <SparklesIcon />,
            title: "Adds Smart AI Decisions",
            body: "AI prioritizes tasks, flags issues, and writes updates based on workflows.",
            color: 270,       // purple for intelligence and creativity
        },
        {
            icon: <FolderIcon />,
            title: "Keeps Everything Organized",
            body: "Automatically sorts and updates tasks, files, and data with no effort.",
            color: 30,       // blue-gray for organization and calmness
        },
    ];

    return (
        <Multicolumn
            header="What Our Clients Get"
            subtitle="How automation saves time, cuts errors, and boosts ROI."
            cards={cards}
            dark={false}
            // button={{ text: "View My Works", href: "./works" }}
        />
    );
}
