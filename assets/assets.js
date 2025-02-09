import user_image from './foto-perfil.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import docker from './docker.png';
import aws from './aws.png';
import aws_dark from './aws-logo-dark.png';
import git from './git.png';
import mongodb from './mongoDB.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './foto-perfil.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import game_icon from './game-icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

// Todas las Imagenes //
export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    docker,
    aws,
    aws_dark,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    game_icon
};

// Informacion de los Proyectos //
export const workData = [
    {
        title: 'Next.js LMS App',
        description: 'AWS, Docker, Lambda, DynamoDB, ECR, S3',
        bgImage: '/work-1.png',
    },
    {
        title: 'MERN Job Portal App',
        description: 'React js, Express js, Node js, Clerk Auth',
        bgImage: '/work-2.png',
    },
    {
        title: 'MERN Services App',
        description: 'React.js, Hygraph , Tailwind css',
        bgImage: '/work-3.png',
    },
]

// Informacion de los Servicios //
export const serviceData = [
    { icon: assets.web_icon, title: 'Web Developer', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile Developer', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.game_icon, title: 'Game Developer', description: 'Creating games with Unreal Engine and C++...', link: '' },
]

// Informacion de la Experiencia //
export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Javascript,Typescript, React, React Native' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'UTN Tec. Programacion' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'More than 3 apps on PlayStore' }
];

// Informacion de las Herramientas //
export const toolsData = [
    { icon:assets.vscode, darkIcon:assets.vscode},
    { icon:assets.firebase, darkIcon:assets.firebase},
    { icon:assets.mongodb, darkIcon:assets.mongodb},
    { icon:assets.figma, darkIcon:assets.figma},
    { icon:assets.git, darkIcon:assets.git},
    { icon:assets.docker, darkIcon:assets.docker},
    { icon:assets.aws, darkIcon:aws_dark},
];