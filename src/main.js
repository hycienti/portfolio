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
        title: "Pays app",
        description:
          "Pays is an innovative sub-product from Sahara Group designed to streamline energy payments for both individual units and bulk transactions. It also offers the convenience of obtaining energy advances (loans), purchasing airtime, and much more, providing a comprehensive solution for managing all your energy-related needs. With over $35 million in monthly transactions and more than 1 million active users, Pays has become a leading platform for energy payments and beyond.",
        imageUrl:
          "https://framerusercontent.com/images/p9b4Yt5j294Q5MxCkzsNKEdpP4.png?scale-down-to=2048",
        altText: "Pays app",
      },
      {
        title: "Pluralcode Academy",
        description:
          "Pluralcode Academy is a leading tech education platform dedicated to equipping individuals with the skills and knowledge needed to thrive in the digital economy. Our comprehensive courses and expert-led training programs cover a wide range of topics, including software development, data science, digital marketing, and more. With over 8000 alumni served, join us to accelerate your career and become part of a vibrant community of tech professionals.",
        imageUrl:
          "https://framerusercontent.com/images/hWmSRaemuT7qKockEAYea3R6TXo.png?scale-down-to=2048",
        altText: "Pluralcode Academy",
      },
      {
        title: "CloudP2P",
        description:
          "CloudP2P is a highly efficient peer-to-peer service with multi-currency support, cross-chain support, and hardware wallets. Exchange your fiat for crypto, trade between your favorite crypto exchanges, facilitate trades, and guarantee the safety of your funds with private encrypted wallets. Get rewarded for a positive trading history with CloudP2P. Traders can rate each other based on transactions and general behavior. Choose who to trade with and develop relationships. Our dispute resolution services are tailored towards fair and beneficial settlements for all parties",
        imageUrl:
          "https://framerusercontent.com/images/VXMBZOLamuP9rS5j3cLGvN91xo.png?scale-down-to=2048",
        altText: "CloudP2P",
      },
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

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const mailtoLink = `mailto:igwezehycient86@gmail.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


