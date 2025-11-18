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
            color: 45,
        },
        {
            icon: <ArrowPathIcon />,
            title: "Scales Effortlessly",
            body: "Handle more work without needing to hire or micromanage.",
            color: 210,
        },
        {
            icon: <ExclamationTriangleIcon />,
            title: "Reduces Errors",
            body: "Avoid forgotten steps and misplaced info with structured automations.",
            color: 0,
        },

        // {
        //     icon: <ChartBarIcon />,
        //     title: "Improves Client Experience",
        //     body: "Clients get instant updates, reports, or actions without delays.",
        //     color: 120,
        // },
        // {
        //     icon: <SparklesIcon />,
        //     title: "Adds Smart AI Decisions",
        //     body: "AI prioritizes tasks, flags issues, and writes updates based on workflows.",
        //     color: 270,
        // },
        // {
        //     icon: <FolderIcon />,
        //     title: "Keeps Everything Organized",
        //     body: "Automatically sorts and updates tasks, files, and data with no effort.",
        //     color: 30,
        // },
    ];

    return (
        <Multicolumn
            header="What Our Clients Get"
            subtitle="How automation saves time, cuts errors, and boosts ROI."
            cards={cards}
            dark={false}
        />
    );
}
