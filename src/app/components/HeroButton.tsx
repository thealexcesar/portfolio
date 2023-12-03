import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface HeroButtonProps {
    hero: string;
    delay: number;
}

const HeroButton: React.FC<HeroButtonProps> = ({ hero, delay }) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [delay]);

    const buttonVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <motion.button
            initial="hidden"
            animate={showButton ? 'visible' : 'hidden'}
            variants={buttonVariants}
            transition={{ delay: 0.5 }}
            className='hero-button'
        >
            <Link href={`#${hero}`}>{hero}</Link>
        </motion.button>
    );
}

export default HeroButton;
