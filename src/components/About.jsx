export default function About() {
    const tools = [
    {
        name: 'VS Code',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
    {
        name: 'React.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
        name: 'Express.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
        name: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'ReactJS, Typescript, JavaScript, NodeJS,',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'BSCS in Computer Science',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Built more than 5 projects',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                   <img 
  src='./assets/about.png' 
  alt="Developer Portrait" 
  className="w-64 sm:w-80 h-[400px] sm:h-[500px] object-cover rounded-3xl max-w-none" 
/>

                   <div className="bg-white dark:bg-darkHover w-1/2 
                   aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 
                   translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center 
                   justify-center">
    <div className="relative w-full aspect-square flex items-center justify-center">
        {/* Rotating text */}
        <svg
            viewBox="0 0 200 200"
            className="w-full animate-spin_slow"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <path
                    id="circle"
                    d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
            </defs>
            <text
                fontSize="12.5"
                fontFamily="Arial"
                letterSpacing="3"
                fill="currentColor"
            >
                <textPath href="#circle">
                    MERN Stack • PERN Stack • Full-Stack Dev • AI SaaS •&nbsp;
                </textPath>
            </text>
        </svg>

        {/* Center icon — only once */}
        <img
            src="./assets/dev-icon.png"
            alt="Developer Icon"
            className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
    </div>
</div>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        Motivated Full-Stack Developer experienced in MongoDB, PostgreSQL, Express, React, 
                        and Node.js. Proven track record of building and shipping production-ready web applications, 
                        responsive user interfaces, and custom API integrations. Seeking a 
                        Junior or Entry-Level Developer position to contribute to impactful software solutions.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i use</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}