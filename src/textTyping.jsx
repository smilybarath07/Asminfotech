'use client';

import { useState, useEffect } from 'react';

const TypingText = ({ textArray, speed = 100, pause = 1500 }) => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentText = textArray[index];
        let timeout;

        if (!deleting && charIndex <= currentText.length) {
            timeout = setTimeout(() => {
                setText(currentText.slice(0, charIndex));
                setCharIndex(prev => prev + 1);
            }, speed);
        } else if (deleting && charIndex >= 0) {
            timeout = setTimeout(() => {
                setText(currentText.slice(0, charIndex));
                setCharIndex(prev => prev - 1);
            }, speed / 2);
        } else {
            timeout = setTimeout(() => {
                setDeleting(!deleting);
                if (!deleting) return;
                setIndex((prev) => (prev + 1) % textArray.length);
            }, pause);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, index, speed, pause, textArray]);

    return (
        <span className="typing-text">
            {text}
            <span className="cursor">|</span>
        </span>
    );
};

export default TypingText;
