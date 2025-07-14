'use client';
import React, { useState, useRef, useEffect } from "react";
import "./header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    const navLinks = [
        { href: "/", label: "Accueil" },
        { href: "/apropos", label: "À propos" },
        { href: "/projets", label: "Projets" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header>
            <div className="headerContent" ref={menuRef}>
                <Link href="/"><AnimatedTitle /></Link>

                <button
                    className={`burger ${menuOpen ? "open" : ""}`}
                    aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                    onClick={toggleMenu}
                    type="button"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </button>

                <nav
                    id="main-navigation"
                    className={menuOpen ? "open" : ""}
                    role="navigation"
                    aria-label="Menu principal"
                >
                    <ul>
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={pathname === href ? "active" : ""}
                                    aria-current={pathname === href ? "page" : undefined}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}