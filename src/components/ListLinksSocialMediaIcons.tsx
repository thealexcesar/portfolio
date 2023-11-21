import React from 'react';
import { FaGitlab, FaGithub, FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import CustomIcon from "@/components/CustomIcon";

type OnClickProps = { onclick?: string }
const ListLinksSocialMediaIcon: React.FC<OnClickProps> = ({ onclick }) => {
    const customIcons = {
        iconSocialMedia: [
            FaGithub,
            FaGitlab,
            FaLinkedin,
            FaSquareWhatsapp
        ],
        url: [
            'https://github.com/thealexcesar',
            'https://gitlab.com/thealexcesar',
            'https://www.linkedin.com/in/thealexcesar',
            'https://wa.me/47997365756?text=Contato%20via%20portfolio.%0A'
        ],
        color: [
            '',
            '#fc6d26',
            '#0A66C2FF',
            '#25D366'
        ]
    };

    return (
        <div className='flex justify-start space-x-2'>
            {customIcons.iconSocialMedia.map((icon, index) => (
                <CustomIcon
                    key={index}
                    iconSocialMedia={icon}
                    url={customIcons.url[index]}
                    color={customIcons.color[index]}
                />

            ))}
        </div>
    );
}

export default ListLinksSocialMediaIcon;
