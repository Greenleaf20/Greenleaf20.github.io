document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('themeSwitch');
    const themeSwitchLabel = document.getElementById('themeSwitchLabel');

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
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        themeSwitchLabel.innerHTML = 'Light';
    }
});