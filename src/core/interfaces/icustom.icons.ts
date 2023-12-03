import {IconType} from "react-icons";

export interface ICustomIcons {
    ariaLabel?: string;
    color: string;
    directionRight?: boolean;
    iconRight?: boolean;
    iconSkill?: IconType;
    iconSocialMedia?: IconType;
    isBtn?: boolean;
    onClick?: () => void;
    targetLink?: string;
    title?: string;
    url?: string;
}
