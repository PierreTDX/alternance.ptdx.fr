"use client";

import { create } from "zustand";

interface CountdownState {
    startDate: Date;
    targetDate: Date;

    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    totalDays: number;

    setStartDate: (date: Date) => void;
    setTargetDate: (date: Date) => void;

    updateCountdown: () => void;
}

const defaultStartDate = new Date(2025, 8, 26, 9, 0);
const defaultTargetDate = new Date(2025, 11, 25, 17, 0);

export const useCountdownStore = create<CountdownState>((set, get) => {
    const now = new Date();
    const diff = defaultTargetDate.getTime() - now.getTime();
    const days = diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0;
    const totalDays = Math.ceil((defaultTargetDate.getTime() - defaultStartDate.getTime()) / (1000 * 60 * 60 * 24));

    return {
        startDate: defaultStartDate,
        targetDate: defaultTargetDate,

        days,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        totalDays,

        setStartDate: (date) => {
            set({ startDate: date });
            get().updateCountdown();
        },

        setTargetDate: (date) => {
            set({ targetDate: date });
            get().updateCountdown();
        },

        updateCountdown: () => {
            const { startDate, targetDate } = get();
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();
            if (diff <= 0) {
                set({ days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0, totalDays: 0 });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            const milliseconds = Math.floor((diff % 1000) / 100);

            const totalDays = Math.ceil((targetDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

            set({ days, hours, minutes, seconds, milliseconds, totalDays });
        },
    };
});