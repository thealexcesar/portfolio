import React from 'react';
import { FaGitlab, FaGithub, FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import CustomIcon from "./CustomIcon";

interface LinksProps {
    labels: string[];
    onclick?: string
}
function ListLinksSocialMediaIcon(props: LinksProps) {
    const customIcons = {
        iconSocialMedias: [FaGithub, FaGitlab, FaLinkedin, FaSquareWhatsapp],
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
            {customIcons.iconSocialMedias.map((icon, i) => (
                <CustomIcon
                    iconSocialMedia={icon}
                    key={`custom-icon-${i}`}
                    url={customIcons.urlPaths[i]}
                    color={customIcons.colors[i]}
                    ariaLabel={props?.labels[i]}
                />
            ))}
        </div>
    );
}

export default ListLinksSocialMediaIcon;