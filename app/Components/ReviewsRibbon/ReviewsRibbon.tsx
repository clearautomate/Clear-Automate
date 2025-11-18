import { useEffect } from "react";

export default function ReviewsRibbon() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://widget.reviews.io/badge-ribbon/dist.js";
        script.async = true;
        script.onload = () => {
            (window as any).reviewsBadgeRibbon?.("badge-ribbon", {
                store: "clearautomate.io",
                size: "small",
                blackLogo: true,
            });
        };
        document.body.appendChild(script);
    }, []);

    return <div id="badge-ribbon"></div>;
}