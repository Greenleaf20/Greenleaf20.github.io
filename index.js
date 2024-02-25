document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('themeSwitch');
    const themeSwitchLabel = document.getElementById('themeSwitchLabel');
    const email = document.getElementById('email');
    const location = document.getElementById('location');
    const linkedin = document.getElementById('linkedin');
    const github = document.getElementById('github');
    const scholar = document.getElementById('google-scholar');

    themeSwitch.addEventListener('change', function() {
        if (themeSwitch.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        themeSwitchLabel.innerHTML = 'Dark';
        email.src = "images/svgs/email-logo-light.svg";
        location.src = "images/svgs/location-logo-light.svg";
        linkedin.src = "images/svgs/linkedin-logo-light.svg";
        github.src = "images/svgs/github-logo-light.svg";
        scholar.src = "images/svgs/scholar-logo-light.svg";
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        themeSwitchLabel.innerHTML = 'Light';
        email.src = "images/svgs/email-logo.svg";
        location.src = "images/svgs/location-logo.svg";
        linkedin.src = "images/svgs/linkedin-logo.svg";
        github.src = "images/svgs/github-logo.svg";
        scholar.src = "images/svgs/scholar-logo.svg";
    }
});