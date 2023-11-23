'use client'
import { MdOutgoingMail } from "react-icons/md";
import { LuMoonStar} from "react-icons/lu";
import CustomIcon from './CustomIcon';
import ListLinksSocialMediaIcon from "@/components/ListLinksSocialMediaIcons";

function Header() {
    return (
        <header className='sticky top-0 p-5 flex items-start z-20
         max-w-7xl mx-auto xl:items-center justify-between text-2xl'
        >

            <ListLinksSocialMediaIcon />

            <div className='flex justify-end space-x-2'>

                <CustomIcon
                    iconSocialMedia={MdOutgoingMail}
                    url='mailto:alex.cesar505@icloud.com'
                    iconRight={true} targetLink='_self'
                    ariaLabel='Send me an Email'
                />

                <div className='cursor-pointer flex' title='Switch theme'> {' '}
                    <CustomIcon
                        iconSocialMedia={LuMoonStar}
                        targetLink='_self'
                        iconRight={true}
                        url={''}
                        ariaLabel='Switch Theme'
                    />
                </div>

            </div>
        </header>
    );
}

export default Header;
