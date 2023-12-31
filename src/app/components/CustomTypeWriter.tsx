import React, { useState, useEffect } from 'react';
interface Props {
    content: string[];
    classes?: string;
    speed?: number;
    delay?: number;
    cursor?: boolean;
    loop?: boolean;
}
const CustomTypewriter: React.FC<Props> = (
    { content, speed = 100, delay = 900, cursor = true, loop = true, classes = '' }
) => {
    const [currentText, setCurrentText] = useState<string>('');
    const [textIndex, setTextIndex] = useState<number>(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (textIndex < content.length) {
            const text = content[textIndex];
            let i = 0;

            interval = setInterval(() => {
                if (i <= text.length) {
                    setCurrentText(text.substring(0, i));
                    i++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        setCurrentText('');
                        if (loop || textIndex < content.length - 1) {
                            setTextIndex(prevIndex => (prevIndex < content.length - 1 ? prevIndex + 1 : 0))
                        } else {
                            setTextIndex(textIndex + 1);
                        }
                    }, delay);
                }
            }, speed);
        }
        return () => clearInterval(interval);
    }, [textIndex, content, speed, delay, loop]);

    const cursorStyle: React.CSSProperties = {
        borderRight: cursor ? '1px solid' : 'none',
        display: 'inline-block',
        animation: '1s step-end infinite',
    };

    return <h1 className={classes} style={cursorStyle}> {currentText} </h1>;
}

export default CustomTypewriter;
