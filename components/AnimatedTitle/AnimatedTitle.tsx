'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCode } from "react-icons/fa";

const fullText = "Pierre Tondeux";
const shortText = "ptdx";

export default function AnimatedTitle() {
    const [showFull, setShowFull] = useState(false); // ← Commence par shortText
    const [text, setText] = useState(shortText);     // ← Texte initial = ptdx

    // Alterne automatiquement toutes les 4 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setShowFull((prev) => !prev);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const targetText = showFull ? fullText : shortText;
        const maxLength = Math.max(fullText.length, shortText.length);
        const current = text;
        let i = 0;

        const interval = setInterval(() => {
            if (i >= maxLength) return clearInterval(interval);
            const next =
                targetText.slice(0, i + 1) + current.slice(i + 1);
            setText(next);
            i++;
        }, 50);

        return () => clearInterval(interval);
    }, [showFull]);

    return (
        <motion.p
            className="siteTitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <FaCode color="#2dd4bf" /> {text}
        </motion.p>
    );
}