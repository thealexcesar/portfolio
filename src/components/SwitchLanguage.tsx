'use client'
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { FaFlagUsa } from "react-icons/fa6";
import { GiBrazilFlag } from "react-icons/gi";

import Link from "next/link";
import {i18n, languageTranslations} from "../../i18n.config";
import {IoMdFlag} from "react-icons/io";

function SwitchLanguage() {
    const pathName = usePathname();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const redirectedPathName = (locale: string) => {
        if (!pathName) return i18n.defaultLocale;
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    console.log('path: ', pathName)
    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownItemClick = (locale: string) => {
        setDropdownOpen(false);
    };

    const currentLanguageLabels = (languageTranslations[pathName] as Record<string, string>) || {};

    return (
        <div className="relative inline-block">
            <i
                role='button'
                onClick={handleDropdownToggle}
                className="relative"
                title={pathName === "/en" ? "Language" : "Idioma"}
            >
                <MdLanguage />
            </i>
            {isDropdownOpen && (
                <ul className="absolute top-full right-0 dropdown mt-2">
                    {i18n.locales.map((locale) => (
                        <li
                            key={locale}
                            className="flex items-center p-2 cursor-pointer"
                            onClick={() => handleDropdownItemClick(locale)}
                        >
                            {locale === "pt" && <GiBrazilFlag size={18} />}
                            {locale === "en" && <FaFlagUsa size={18} />}
                            {locale === "es" && <IoMdFlag size={18} />}
                            <Link href={redirectedPathName(locale)} aria-label={`Switch language to ${locale}`} >
                                <span className="ml-2">{currentLanguageLabels[locale] || ""}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SwitchLanguage;
