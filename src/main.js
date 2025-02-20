

boot()

function boot() {
  renderSkills();
}

function renderSkills() {
    const skills = [
        "JavaScript", "React", "Node.js", "Nest.js", "TypeScript",
        "SQL", "AWS", "Next.js", "Postgres", "Tailwind", "Graphql", ".Net (learning)"
    ];
    
    const skillsListElement = document.querySelector('.skills-list');
    skillsListElement.innerHTML = ''; // Clear existing content

    skills.forEach(skill => {
        console.log(skill)
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        skillsListElement.appendChild(skillItem);
    });
}