import React, {useRef} from 'react';
import { FaGitlab, FaGithub, FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import CustomIcon from "@/components/CustomIcon";
import customIcon from "@/components/CustomIcon";

type OnClickProps = { onclick?: string }
const ListLinksSocialMediaIcon: React.FC<OnClickProps> = ({ onclick }) => {
    const customIcons = {
        iconSocialMedias: [ FaGithub, FaGitlab, FaLinkedin, FaSquareWhatsapp],
        labels: [
            'Visit my Github to view my Projects for practices',
            'Visit my Gitlab to view my Professional Projects',
            'Visit my Linkedin to view my resume',
            "Let\'s Talk on Whatsapp"
        ],
        urlPaths: [
            'https://github.com/thealexcesar',
            'https://gitlab.com/thealexcesar',
            'https://www.linkedin.com/in/thealexcesar',
            'https://wa.me/47997365756?text=Contato%20via%20portfolio.%0A'
        ],
        colors: ['', '#fc6d26', '#0A66C2FF', '#25D366']
    };

    return (
        <div className='flex justify-start space-x-2'>
            {customIcons.iconSocialMedias.map((icon, index) => (
                <CustomIcon
                    iconSocialMedia={icon} key={index}
                    url={customIcons.urlPaths[index]}
                    color={customIcons.colors[index]}
                    ariaLabel={customIcons.labels[index]}
                />
            ))}
        </div>
    );
}

export default ListLinksSocialMediaIcon;
