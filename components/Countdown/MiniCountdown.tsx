"use client";

import { useEffect } from "react";
import { useCountdownStore } from "@/app/store/useCountdownStore";
import "./miniCountdown.scss";

export default function MiniCountdown() {
    const { days, totalDays, updateCountdown } = useCountdownStore();

    // Animation fluide du compteur
    useEffect(() => {
        const animateCountdown = () => {
            updateCountdown();
            requestAnimationFrame(animateCountdown);
        };
        animateCountdown();
    }, [updateCountdown]);

    const size = 50;
    const radius = 20;
    const strokeWidth = 4;
    const circumference = 2 * Math.PI * radius;
    const percentage = totalDays > 0 ? (days / totalDays) * 100 : 0;
    const offset = circumference * (1 - percentage / 100);

    return (
        <a href="/compteur" className="miniCountdown">
            <svg width={size} height={size}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="var(--importantBg)"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="var(--important)"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform={`translate(${size},0) scale(-1,1) rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>

            <div className="miniCountdownText">
                J-{days}
            </div>
        </a>
    );
}