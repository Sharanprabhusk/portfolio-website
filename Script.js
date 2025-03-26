// Projects data
const projects = [
    {
        title: "E-commerce Website",
        description: "A fully responsive e-commerce platform with cart functionality and payment integration.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        image: "project1.jpg",
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Weather App",
        description: "Real-time weather application using a third-party API to fetch weather data.",
        technologies: ["JavaScript", "API", "CSS"],
        image: "project2.jpg",
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Task Manager",
        description: "A task management application with local storage functionality.",
        technologies: ["JavaScript", "HTML", "CSS"],
        image: "project3.jpg",
        liveLink: "#",
        codeLink: "#"
    }
];

// Skills data
const skills = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Responsive Design", icon: "fas fa-mobile-alt" },
    { name: "UI/UX", icon: "fas fa-paint-brush" }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Load projects
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank">Live Demo</a>
                    <a href="${project.codeLink}" target="_blank">View Code</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });

    // Load skills
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        
        skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;
        
        skillsContainer.appendChild(skillItem);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log({ name, email, message });
            
            // Show success message (in a real app, you'd want proper error handling too)
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Add active class to current section in navigation
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('active');
            }
        });
    });
});
