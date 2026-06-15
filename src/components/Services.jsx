export default function Services() {
    const services = [
        {
            name: 'Web app development',
            icon: './assets/web-icon.png',
            description: 'Building end-to-end full-stack applications using React, Node.js, and modern architectural workflows.',
            link: '#',
        },
        {
            name: 'Database management',
            icon: './assets/mobile-icon.png',
            description: 'Designing resilient relational and non-relational database structures using MongoDB and PostgreSQL.',
            link: '#',
        },
        {
            name: 'API development',
            icon: './assets/ui-icon.png',
            description: 'Crafting secure, robust RESTful APIs and backend microservices using Express and Node.js backend frameworks.',
            link: '#',
        },
        {
            name: 'GenAI integration',
            icon: './assets/graphics-icon.png',
            description: 'Implementing cutting-edge Generative AI models and smart automation features straight into web platforms.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a Full-Stack Developer specializing in the MERN and PERN stacks, experienced in building scalable web applications, secure APIs, and integrating intelligent AI features.</p>

            <div className="grid grid-cols-auto gap-6 my-5">
                {services.map((service) => (
                    /* Changed py-12 to py-6 to reduce the overall card height */
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-6 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-3 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-4">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}