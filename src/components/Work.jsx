export default function Work() {
    const work = [
        {
            name: 'Genesis UGC Studio',
            icon: './assets/work-1.png',
            description: 'AI-Powered Content SaaS',
            tag: 'AI · SaaS · PERN',
            link: 'https://agi-xo58.vercel.app',
        },
        {
            name: 'QuickAI Platform',
            icon: './assets/work-2.png',
            description: 'Full-Stack GenAI Suite',
            tag: 'AI · MERN · Clerk',
            link: 'https://quick-ai-client-opal.vercel.app',
        },
        {
            name: 'Blogging Website',
            icon: './assets/work-3.png',
            description: 'Enterprise HR System',
            tag: 'MERN · REST',
            link: 'https://afzaalblog-sje6.vercel.app/',
        },
        {
            name: 'User Authentication',
            icon: './assets/work-4.png',
            description: 'Full-Stack Web App',
            tag: 'React · Node.js · JWT',
            link: 'https://afzaal-mern-1-43wc.vercel.app/',
        }
    ];

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            {/* Header */}
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Welcome to my web development portfolio! Explore a collection of production-ready projects
                showcasing my expertise in full-stack MERN and PERN development.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                {work.map((item) => (
                    <a
                        key={item.name}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-darkHover border border-gray-100 dark:border-white/10"
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-[4/3]">
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-sm font-semibold tracking-wide border border-white/60 rounded-full px-5 py-2 backdrop-blur-sm">
                                    View Project →
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            {/* Tag */}
                            <span className="inline-block text-xs font-medium text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-400/10 px-3 py-1 rounded-full mb-3">
                                {item.tag}
                            </span>

                            {/* Title & Description */}
                            <h3 className="font-semibold text-base text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors duration-200">
                                {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                {item.description}
                            </p>

                            {/* Arrow link */}
                            <div className="flex items-center gap-2 mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors duration-200">
                                <span>View live</span>
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Show More */}
            <a
                href="#"
                className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white"
            >
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>
        </div>
    );
}