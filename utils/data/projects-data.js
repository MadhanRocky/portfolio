import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'LTE Admin Project',
        description: "Develop an admin management system for teachers and students using React JS, Redux, MUI, Nodemailer, and Firebase. The admin can create and manage profiles, connect with teachers via email, and mark attendance to enable teacher login through the mobile app. The system pairs teachers with students for efficient management via a teacher app. An additional SPOC login provides limited features for managing teachers and students",
        tools: ['React js', 'Redux', 'MUI', 'Nodemailer', 'Firebase', 'babel', 'Bootstrap', 'Node js', 'Git', 'GitHub', 'Postman', 'ag-grid-react', 'axios',],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Athera Business Enablers',
        description: 'Develop a responsive website for business services: LLC/Firm Registration, LLC Closure, Company Revival, ROC/GST Compliance, IP/NBFC Registration, Tax Filing, TDS/TCS Compliance, Tax Dispute Resolution, Accounting, Business Plans, ISO Certification, Support, People Management, Customer Engagement, Digital Consulting. Features admin portal for blog, developer communication, and analytics using cookies.',
        tools: ['React js', 'shadcn/ui','Tailwind CSS','Framer Motion','TypeScript','Vite','Google Analytics','React Router', 'Node js', 'Git', 'GitHub', 'Postman', 'ag-grid-react', 'axios'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Recon Attend',
        description: 'Develop a responsive attendance management system for fieldwork using React. Admins can create users, update profiles with React Webcam, assign location-based tasks via OpenStreetMap, and update tasks. The system generates performance, leave, and task reports displayed on a dashboard. Users can respond via a mobile APK file.',
        tools: ['React js','Tailwind CSS','Framer Motion','Vite','React Router', 'Node js', 'Git', 'GitHub', 'Postman', 'ag-grid-react', 'axios'],
        code: '',
        role: 'Frontend Developer',
        demo: '',
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },