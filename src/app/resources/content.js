import { InlineCode } from "@/once-ui/components";
import {BiBold} from "react-icons/bi";

const person = {
    firstName: 'Ashwin',
    lastName:  'Gopalsamy',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.png',
    location:  '',
    languages: ['English', 'German'],  // optional: Leave the array empty if you don't want to display languages
    resume:'/docs/Resume_AshwinGopalsamy.pdf',
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about Go Programming, technology and share thoughts on personal growth.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/ashwingopalsamy',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/ashwingopalsamy/',
    },
    {
        name: '(Formerly Twitter)',
        icon: 'x',
        link: 'https://x.com/ashwin2125',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:ashwin2125@gmail.com',
    },
    {
        name: 'LinkTree',
        icon: 'link',
        link: 'https://linktr.ee/ashwingopalsamy',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Hey, I'm Ashwin.<br/></>,
    subline: <>I build internet-scale software products at <strong>Solaris SE</strong>.<br/>On after hours, I write blogs, contribute to open-source and build stuff.</>
}

const about = {
    label: 'About',
    title: 'Ashwin Gopalsamy | About',
    description: `Meet ${person.name}, ${person.role} from Tamil Nadu, India.`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/ashwingopalsamy'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Product-first engineer, blogger and open-source contributor with around 4 years of experience in software development, cloud-native architecture and distributed systems.<br/> <br/>
            I am specialized in transforming ideas into impactful solutions that resonate with innovation-driven organizations. If you're looking for someone who combines technical expertise with a collaborative spirit, let's connect and explore how we can drive meaningful change together.
        </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Solaris SE',
                timeframe: '2022 - Present',
                role: 'Professional Engineer',
                achievements: [
                    <>Engineered the complete lifecycle of ’Credit Card Interest’ product, from design to post-release, collaborating with
                        internal teams and product owners, generating substantial revenue.</>,
                    <>Owning ’Accounts Domain’, with AWS, Kubernetes, Terraform stack supporting over 20M transactions per day.</>,
                    <>Engineering 100% cloud-native, event-sourced micro-services in Core-Banking system, achieving 99.999% uptime.</>,
                    <>Pioneering end-to-end development of ’Savings Account’ product, driving significant revenue growth.</>,
                    <> Contributing to on-call rotations, observability, enhancing run-books that improved the incident response times.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Hexaware Technologies',
                timeframe: '2021 - 2022',
                role: 'Associate Software Engineer',
                achievements: [
                    <>Contributed to the development of enterprise-level distributed applications, implementing solutions that improved
                        system performance and contributed effectively with project timelines met ahead of schedule.</>,
                    <>Worked on deploying a Cloud HRMS product for a major automotive client, ensuring seamless operation and user
                        experience for over 75K employees within a system valued at USD 1.5B.</>
                ],
                images: [ ]
            },
            {
                company: 'Microsoft',
                timeframe: '4 months',
                role: 'Intern',
                achievements: [
                    <>Developed features for an open-source project, ’Bud.ai - Student Twin’ using Microsoft Azure Cloud and GitHub as
                        part of the ’Future Ready Talent’ program, enhancing the project’s reach and adoption.</>,
                ],
                images: [ ]
            }
        ]
    },
    // studies: {
    //     display: true, // set to false to hide this section
    //     title: 'Studies',
    //     institutions: [
    //         {
    //             name: 'Bachelors in Information Technology',
    //             description: [
    //                 <>Graduated ’First Class with Distinction’, with CGPA score of 8.2 / 10.</>,
    //                 <>Coursework include Data Structures and Algorithms, Design and Analysis of Algorithms, Artificial Intelligence, Database Management Systems, Operating System, Computer Networks, Software Engineering and Cybersecurity.</>,
    //                 <>Ranked #1 in coding competitions and revitalized student and developer clubs, leading key initiatives</>
    //                 ]
    //         }
    //     ]
    // },
    technical: {
        display: true, // set to false to hide this section
        title: 'Skills',
        skills: [
            {
                title: 'Modern Programming Languages',
                description:'Advanced in Go (Golang), with working knowledge in Python, Javascript.',
                images: []
            },
            {
                title: 'Cloud & Platform',
                description:'Proficient with AWS, Kubernetes, Terraform, Docker, Grafana, Prometheus, Concourse CI/CD.',
                images: []
            },
            {
                title: 'System Design & Architecture',
                description:'Skilled in microservices, event-sourced architecture and distributed systems',
                images: []
            },
            {
                title: 'Databases',
                description:'Extensive experience with PostgreSQL, MariaDB, DynamoDB, Athena and Snowflake.',
                images: []
            },
            {
                title: 'Tools & Infrastructure',
                description:'Advanced knowledge in REST, gRPC, Jira, Confluence, Miro, Cycode, Sentry and Egnyte.',
                images: []
            }
        ]
    },
    soft:{
        display: true, // set to false to hide this section
        title: 'Education',
        education: [
            {
                course: 'Bachelors in Information Technology.',
                timeframe: '2017 - 2021',
                college: 'Hindusthan College of Engineering and Technology (Affl. to Anna University)',
                achievements: [
                    <>Graduated ’First Class with Distinction’, with CGPA score of 8.2 / 10.</>,
                    <>Coursework include Data Structures and Algorithms, Design and Analysis of Algorithms, Artificial Intelligence, Database Management Systems, Operating System, Computer Networks, Software Engineering and Cybersecurity.</>,
                    <>Ranked #1 in coding competitions and revitalized student and developer clubs, leading key initiatives.</>
                ],
                images: [
                ]
            },
            ]
    }
}

const blog = {
    label: 'Blog',
    title: 'I write about Go, Tech & Personal Growth.',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Open Source projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Reads',
    title: 'Books and interesting posts that I read',
    description: `Books and Articles collection by ${person.name}`,
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };