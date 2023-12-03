'use client'
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { motion } from 'framer-motion';
import Link from "next/link";
import {i18n, languageTranslations} from "../../../../i18n.config";
import {redirectedPathName} from "@/core/utils/dictionaries";

function SwitchLanguage() {
    const pathName = usePathname();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const handleDropdownToggle = () => { setDropdownOpen(!isDropdownOpen) };
    const handleDropdownItemClick = (locale: string) => { setDropdownOpen(false) };
    const currentLanguageLabels = (languageTranslations[pathName] as Record<string, string>) || {};

    redirectedPathName(pathName);

    const motionProps = {
        initial: { x: -500, opacity: 0, scale: 0.5 },
        animate: { x: 0, opacity: 1, scale: 1 },
        transition: { y: 2, duration: 1.2, ease: 'easeOut' },
        whileInView: { opacity: 1, y: 0 }
    };

    return (
        <div className="relative inline-block">
            <i
                role="button"
                onClick={handleDropdownToggle}
                className="relative"
                title={pathName === "/en" ? "Language" : "Idioma"}
            >
                <MdLanguage />
            </i>
            {isDropdownOpen && (
                <motion.ul className="absolute top-full right-0 dropdown mt-1">
                    {i18n.locales.map((locale) => (
                        <li
                            key={locale}
                            className="py-0 cursor-pointer"
                            onClick={() => handleDropdownItemClick(locale)}
                        >
                            <Link href={redirectedPathName(locale)}
                                  aria-label={`Switch language to ${locale}`}
                            >
                                { pathName.split("/")[1] !== locale &&
                                    <span className="my-2 mx-1 py-0">
                                        {currentLanguageLabels[locale]}
                                    </span>
                                }
                            </Link>
                        </li>
                    ))}
                </motion.ul>
            )}
        </div>
    );
}

export default SwitchLanguage;
