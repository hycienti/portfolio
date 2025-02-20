boot()

function boot() {
    renderSkills();
    renderProjects();
}

function renderSkills() {
    const skills = [
        "JavaScript", "React", "Node.js", "Nest.js", "TypeScript",
        "SQL", "AWS", "Next.js", "Postgres", "Tailwind", "Graphql", ".Net (learning)"
    ];
    
    const skillsListElement = document.querySelector('.skills-list');
    skillsListElement.innerHTML = ''; // Clear existing content

    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        skillsListElement.appendChild(skillItem);
    });
}

function renderProjects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution built with React and Node.js",
            imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
            altText: "Project 1"
        },
        {
            title: "Task Management App",
            description: "A sophisticated task management system with real-time updates",
            imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
            altText: "Project 2"
        },
        {
            title: "Analytics Dashboard",
            description: "Data visualization platform with interactive charts",
            imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
            altText: "Project 3"
        }
    ];

    const projectsGridElement = document.querySelector('.projects-grid');
    projectsGridElement.innerHTML = ''; // Clear existing content

    projects.forEach(project => {
        const projectCard = document.createElement('article');
        projectCard.className = 'project-card';

        const projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.alt = project.altText;
        projectImage.className = 'project-image';

        const projectContent = document.createElement('div');
        projectContent.className = 'project-content';

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        projectContent.appendChild(projectTitle);
        projectContent.appendChild(projectDescription);
        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectContent);
        projectsGridElement.appendChild(projectCard);
    });
}