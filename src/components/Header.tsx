'use client'
import { MdOutgoingMail } from "react-icons/md";
import {LuMoonStar, LuSunMoon} from "react-icons/lu";
import CustomIcon from './CustomIcon';
import ListLinksSocialMediaIcon from "../components/ListLinksSocialMediaIcons";
import {useEffect, useState} from "react";
import {setThemeFromLocalStorage, toggleTheme} from "../app/theme";
import {IconType} from "react-icons";
import {Locale} from "../../i18n.config";
import SwitchLanguage from "@/components/SwitchLanguage";

interface HeaderProps {
    lang: Locale;
    translate: {
        send_me_an_email: string | null
    }
}
function Header(props: HeaderProps) {
    const [currentIcon, setCurrentIcon] = useState(LuSunMoon);

    useEffect(() => { setThemeFromLocalStorage() }, []);
    useEffect(() => {
        const root: HTMLElement = document.documentElement;
        const isDark: boolean = root.classList.contains('dark');
        setCurrentIcon(isDark ? 'LuSunMoon' : 'LuMoonStar');
    }, []);

    const handleThemeToggle = () => {
        toggleTheme();
        setCurrentIcon((prevIcon: string) => (prevIcon === 'LuSunMoon' ? 'LuMoonStar' : 'LuSunMoon'));
    };

    const components: { [key: string]: IconType } = { 'LuSunMoon': LuSunMoon, 'LuMoonStar': LuMoonStar };
    const component: IconType = components[currentIcon];

    return (
        <header className='sticky top-0 snap-mandatory p-5 flex items-start z-20
         max-w-7xl mx-auto xl:items-center justify-between text-2xl'
        >

            <ListLinksSocialMediaIcon />

            <div className='flex justify-end space-x-2'>

                <CustomIcon
                    iconSocialMedia={MdOutgoingMail}
                    url='mailto:alex.cesar505@icloud.com'
                    iconRight={true} targetLink='_self'
                    ariaLabel={props.translate?.send_me_an_email  || ''}
                />

                <div className='cursor-pointer flex' title='Switch theme' onClick={handleThemeToggle}> {' '}
                    <CustomIcon
                        iconSocialMedia={component}
                        targetLink='_self'
                        iconRight={true}
                        url={''}
                        ariaLabel='Switch Theme'
                    />
                </div>

                <CustomIcon iconSocialMedia={SwitchLanguage} iconRight={true} isBtn={true} />

            </div>
        </header>
    );
}

export default Header;
