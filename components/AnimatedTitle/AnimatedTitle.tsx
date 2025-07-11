'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCode } from "react-icons/fa";

const fullText = "Pierre Tondeux";
const shortText = "ptdx";

export default function AnimatedTitle() {
    const [showFull, setShowFull] = useState(false);
    const [text, setText] = useState(shortText);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFull((prev) => !prev);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const targetText = showFull ? fullText : shortText;
        const maxLength = Math.max(fullText.length, shortText.length);
        const current = text;
        let i = 0;

        const interval = setInterval(() => {
            if (i >= maxLength) return clearInterval(interval);
            const next = targetText.slice(0, i + 1) + current.slice(i + 1);
            setText(next);
            i++;
        }, 50);

        return () => clearInterval(interval);
    }, [showFull]);

    return (
        <motion.h1
            className="siteTitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            aria-label="Nom du site : Pierre Tondeux à la recher d'une alternance"
            aria-level={1}
        >
            <FaCode color="#2dd4bf" aria-hidden="true" /> {text}
        </motion.h1>
    );
}