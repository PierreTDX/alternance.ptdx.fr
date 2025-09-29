"use client";

import { useEffect, useRef, useState } from "react";
import "./countdown.scss";

export default function Countdown() {
    const defaultStartDate = new Date(2025, 8, 26, 9, 0);
    const defaultTargetDate = new Date(2025, 11, 25, 17, 0);

    const [startDate, setStartDate] = useState(defaultStartDate);
    const [targetDate, setTargetDate] = useState(defaultTargetDate);

    const [display, setDisplay] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    });

    const startRef = useRef<HTMLInputElement>(null);
    const targetRef = useRef<HTMLInputElement>(null);

    const setRingProgress = (id: string, percentage: number) => {
        const ring = document.querySelector<SVGCircleElement>(`#${id}`);
        if (!ring) return;
        const radius = parseFloat(ring.getAttribute("r") || "0");
        const circumference = 2 * Math.PI * radius;
        const offset = circumference * (1 - percentage / 100);
        ring.style.strokeDasharray = `${circumference} ${circumference}`;
        ring.style.strokeDashoffset = `${offset}`;
    };

    // Mise à jour des anneaux sauf ring1 (millisecondes)
    const updateSlowRings = () => {
        if (!targetDate) return;
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();
        if (diff <= 0) {
            setDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
            ["ring2", "ring3", "ring4", "ring5"].forEach((id) => setRingProgress(id, 0));
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setDisplay((prev) => ({ ...prev, days, hours, minutes, seconds }));

        const totalDays = Math.ceil((targetDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

        setRingProgress("ring5", (days / totalDays) * 100);
        setRingProgress("ring4", (hours / 24) * 100);
        setRingProgress("ring3", (minutes / 60) * 100);
        setRingProgress("ring2", (seconds / 60) * 100);
    };

    // Mise à jour du ring1 (millisecondes) via requestAnimationFrame
    const updateFastRing = () => {
        if (!targetDate) return;
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();
        if (diff <= 0) {
            setRingProgress("ring1", 0);
            return;
        }
        const milliseconds = diff % 1000;
        setDisplay((prev) => ({ ...prev, milliseconds: Math.floor(milliseconds / 100) }));
        setRingProgress("ring1", (milliseconds / 1000) * 100);
        requestAnimationFrame(updateFastRing);
    };

    useEffect(() => {
        updateSlowRings();
        const interval = setInterval(updateSlowRings, 100); // mise à jour lente
        updateFastRing(); // animation fluide du ring1
        return () => clearInterval(interval);
    }, [targetDate, startDate]);

    const formatDateForInput = (date: Date) => {
        const offset = date.getTimezoneOffset();
        const localDate = new Date(date.getTime() - offset * 60000);
        return localDate.toISOString().slice(0, 16);
    };

    return (
        <div className="containerCountdown">
            <svg className="rings" width="400" height="400">
                <circle className="ring ring-bg" cx="200" cy="200" r="60" />
                <circle className="ring ring1-progress" id="ring1" cx="200" cy="200" r="60" />

                <circle className="ring ring-bg" cx="200" cy="200" r="90" />
                <circle className="ring ring-progress" id="ring2" cx="200" cy="200" r="90" />

                <circle className="ring ring-bg" cx="200" cy="200" r="120" />
                <circle className="ring ring-progress" id="ring3" cx="200" cy="200" r="120" />

                <circle className="ring ring-bg" cx="200" cy="200" r="150" />
                <circle className="ring ring-progress" id="ring4" cx="200" cy="200" r="150" />

                <circle className="ring ring-bg" cx="200" cy="200" r="180" />
                <circle className="ring ring-progress" id="ring5" cx="200" cy="200" r="180" />
            </svg>

            {/* <svg className="rings" width="400" height="400">
                <circle className="ring ring-bg" cx="200" cy="200" r="180" />
                <circle className="ring ring1-progress" id="ring1" cx="200" cy="200" r="180" />

                <circle className="ring ring-bg" cx="200" cy="200" r="150" />
                <circle className="ring ring-progress" id="ring2" cx="200" cy="200" r="150" />

                <circle className="ring ring-bg" cx="200" cy="200" r="120" />
                <circle className="ring ring-progress" id="ring3" cx="200" cy="200" r="120" />

                <circle className="ring ring-bg" cx="200" cy="200" r="90" />
                <circle className="ring ring-progress" id="ring4" cx="200" cy="200" r="90" />

                <circle className="ring ring-bg" cx="200" cy="200" r="60" />
                <circle className="ring ring-progress" id="ring5" cx="200" cy="200" r="60" />
            </svg> */}

            <div className="center-content">
                <p className="day-label"><span className="J">J</span> -{display.days}</p>
                <p className="time-remaining">{display.hours}h {display.minutes}min</p>
                <p className="time-remaining">{display.seconds}.{display.milliseconds}s</p>
            </div>

            <div className="controls">
                <input
                    className="datetime"
                    type="datetime-local"
                    ref={startRef}
                    value={formatDateForInput(startDate)}
                    onChange={(e) => setStartDate(new Date(e.target.value))}
                />
                <input
                    className="datetime"
                    type="datetime-local"
                    ref={targetRef}
                    value={formatDateForInput(targetDate)}
                    onChange={(e) => setTargetDate(new Date(e.target.value))}
                />
            </div>
        </div>
    );
}