import type { StaticImageData } from 'next/image';
import alloraImage from '@/imgs/allora.jpg';
import iconsImage from '@/imgs/icons.png';
import optimaErpImage from '@/imgs/optimaerp.png';
import tramitaImage from '@/imgs/tramita.jpg';

export type CodeLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  codeLinks: CodeLink[];
  image?: StaticImageData;
};

export const projects: Project[] = [
  {
    name: 'TRAMITA',
    description:
      'A platform for government appointment management that centralizes and automates service processes. It reduces wait times, improves administrative organization and makes service scheduling easier for citizens and public agencies.',
    image: tramitaImage,
    technologies: ['Node.js', 'JavaScript', 'React', 'Vite', 'MongoDB Atlas'],
    codeLinks: [
      {
        label: 'View Backend',
        href: 'https://github.com/BERNARDOBOJALIL/BackendBernyFix.git'
      },
      {
        label: 'View Frontend',
        href: 'https://github.com/JEETVP/proyectoadminbd.git'
      }
    ]
  },
  {
    name: 'ÓPTIMA CONSULTING ERP',
    description:
      'A simulation of an ERP module focused on hospital logistics and inventory. It aims to improve medicine and supply control to reduce shortage issues and optimize resource management in the healthcare sector.',
    image: optimaErpImage,
    technologies: ['HTML', 'Node.js', 'JavaScript', 'CORS', 'MongoDB'],
    codeLinks: [
      {
        label: 'View Backend',
        href: 'https://github.com/JEETVP/BackendERP.git'
      },
      {
        label: 'View Frontend',
        href: 'https://github.com/JEETVP/FrontendERP.git'
      }
    ]
  },
  {
    name: 'ALLORA',
    description:
      'A proximity-based social platform that promotes more authentic connections through progressive interactions. It seeks to reduce the superficiality of traditional apps and encourage relationships based on shared interests and context.',
    image: alloraImage,
    technologies: ['React Native', 'TypeScript', 'Python'],
    codeLinks: [
      {
        label: 'View Frontend',
        href: 'https://github.com/BERNARDOBOJALIL/FrontendAllora.git'
      },
      {
        label: 'View Backend',
        href: 'https://github.com/BERNARDOBOJALIL/Allora.git'
      }
    ]
  },
  {
    name: 'ICONS',
    description:
      'An e-commerce platform developed for a premium fashion brand. It centralizes catalog, sales and digital presence, offering a more professional and scalable shopping experience than traditional social media channels.',
    image: iconsImage,
    technologies: ['React', 'Vite', 'Firebase', 'CORS'],
    codeLinks: [
      {
        label: 'View Code',
        href: 'https://github.com/antonbetak/icons.git'
      },
      {
        label: 'View Site',
        href: 'https://theiconsproject.com/'
      }
    ]
  },
  {
    name: 'LACTO PRODUCTOS DE ORIENTE',
    description:
      'A minimum viable product focused on strengthening the company’s digital presence. It showcases products, improves brand visibility and creates new commercial opportunities through a modern web platform.',
    technologies: ['React', 'Vite'],
    codeLinks: [
      {
        label: 'View Code',
        href: 'https://github.com/JEETVP/lactoweb.git'
      }
    ]
  }
];
