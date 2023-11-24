import {BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {FaAngular, FaCss3Alt, FaDocker, FaHtml5, FaJava, FaJs, FaReact, FaRust, FaSass } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { IconType } from 'react-icons';
import {SiCoffeescript, SiMongodb, SiRubyonrails } from "react-icons/si";
import { TbBrandPowershell } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";

interface IconMapping { [key: string]: {  icon: IconType; color: string; }}
const createIcon = (icon: IconType, color: string = ''): { icon: IconType; color: string;} => {
    return { icon, color};
};
export const iconMap: IconMapping = {
    Angular:         createIcon(FaAngular, '#b52e31'),
    CoffeeScript:    createIcon(SiCoffeescript, ''),
    Dockerfile:      createIcon(FaDocker, '#019BC6'),
    Git:             createIcon(FaGitAlt, '#f14e32'),
    GitLab:          createIcon(FaGitAlt, ''),
    HTML:            createIcon(FaHtml5, '#e54d26'),
    Java:            createIcon(FaJava, '#007396'),
    JavaScript:      createIcon(FaJs, '#F7DF1E'),
    Mongodb:         createIcon(SiMongodb, '#4faa41'),
    Postgresql:      createIcon(BiLogoPostgresql, '#336791'),
    React:           createIcon(FaReact, '#61DAFB'),
    Ruby:            createIcon(DiRuby, '#CC342D'),
    Rust:            createIcon(FaRust, ''),
    Sass:            createIcon(FaSass, '#C69'),
    Shell:           createIcon(TbBrandPowershell, ''),
    TypeScript:      createIcon(BiLogoTypescript, '#007ACC'),
    'Ruby on Rails': createIcon(SiRubyonrails, '#CC342D')
};