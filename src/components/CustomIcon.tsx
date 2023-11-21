import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
    color?: string;
    directionRight?: boolean;
    iconRight?: boolean;
    iconSkill?: IconType;
    iconSocialMedia?: IconType;
    targetLink?: string;
    title?: string;
    url?: string;
    onClick?: () => void;
}

function CustomIcon({
                        color,
                        iconRight,
                        iconSkill,
                        iconSocialMedia,
                        targetLink,
                        url = '/',
                        onClick
                    }: IconProps) {
    const initialX = iconRight ? 500 : -500;
    const size: number | string = iconSkill ? 60 : '';

    const iconComponent = (iconSkill || iconSocialMedia) ? (
        React.createElement(iconSkill || iconSocialMedia as React.ComponentType<any>, { size, color })
    ) : null;

    if (!iconComponent) {
        return null;
    }

    const motionProps = {
        initial: iconSocialMedia ? { x: initialX, opacity: 0, scale: 0.5 } : { x: 0, y: -4, opacity: 0, scale: 1 },
        animate: { x: 0, opacity: 1, scale: 1 },
        transition: { y: 2, duration: 0.8, ease: 'easeOut' },
        whileInView: { opacity: 1, y: 0 }
    };


    return (
        <div className='group relative flex cursor-pointer' onClick={onClick}>
            <motion.div {...motionProps}>
                {iconSocialMedia ? (
                    <Link href={url} target={targetLink || '_blank'} rel="noopener noreferrer" passHref>
                        {iconComponent}
                    </Link>
                ) : (
                    <span>{iconComponent}</span>
                )}
            </motion.div>
        </div>
    );

}

export default CustomIcon;
