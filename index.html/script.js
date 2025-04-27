window.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('homeButton');
    const loginButton = document.getElementById('loginButton');
    const menuButton = document.getElementById('menuButton');
    const aboutButton = document.getElementById('aboutButton');
    const contactButton = document.getElementById('contactButton');
    const goToSignupButton = document.getElementById('goToSignupButton');
    const signupConfirmButton = document.getElementById('signupConfirmButton'); // Use the one in HTML

    const sections = {
        home: document.getElementById('homeSection'),
        login: document.getElementById('loginSection'),
        signup: document.getElementById('signupSection'),
        menu: document.getElementById('menuSection'),
        about: document.getElementById('aboutSection'),
        contact: document.getElementById('contactSection')
    };

    function showSection(sectionName) {
        Object.values(sections).forEach(sec => sec.style.display = 'none');
        sections[sectionName].style.display = 'block';
    }

    // Button Actions
    homeButton.addEventListener('click', () => showSection('home'));
    loginButton.addEventListener('click', () => showSection('login'));
    menuButton.addEventListener('click', () => showSection('menu'));
    aboutButton.addEventListener('click', () => showSection('about'));
    contactButton.addEventListener('click', () => showSection('contact'));
    goToSignupButton.addEventListener('click', () => showSection('signup'));

    signupConfirmButton.addEventListener('click', () => {
        sections.signup.innerHTML = `<h2>Signed Up Successfully ✅</h2>`;
    });
});
