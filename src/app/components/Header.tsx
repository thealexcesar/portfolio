'use client'
import { MdOutgoingMail } from "react-icons/md";
import {LuMoonStar, LuSunMoon} from "react-icons/lu";
import {useEffect, useState} from "react";
import {IconType} from "react-icons";
import SwitchLanguage from "@/app/components/ui/SwitchLanguage";
import {setThemeFromLocalStorage, toggleTheme} from "@/core/ui/theme";
import ListLinksSocialMediaIcon from "@/app/components/ListLinksSocialMediaIcons";
import CustomIcon from "@/app/components/CustomIcon";
import {IDictionaries} from "@/core/interfaces/props.interface";

interface HeaderProps {
    labels: IDictionaries['labels'];
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

            <ListLinksSocialMediaIcon labels={props?.labels} />

            <div className='flex justify-end space-x-2'>

                <CustomIcon
                    iconSocialMedia={MdOutgoingMail}
                    url='mailto:alex.cesar505@icloud.com'
                    iconRight={true} targetLink='_self'
                    // ariaLabel={props.translate?.send_me_an_email  || ''}
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