let darkTheme = localStorage.getItem("theme");
const themeSelector = document.getElementById("theme-select");
let themeSelectorVal = themeSelector.value;

if(darkTheme === "dark") {
    document.body.classList.add("dark-theme");
    document.getElementById("theme-select").value = "dark";
}
else {
    document.getElementById("theme-select").value = "light";
}

const enableDarkTheme = () => {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", themeSelectorVal);
}

const disableDarkTheme = () => {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", themeSelectorVal);
}


const optionSelected = () => {
    themeSelectorVal = document.getElementById("theme-select").value;
    if(themeSelectorVal === "dark") {
        enableDarkTheme();
    }
    if(themeSelectorVal ==="light") {
        disableDarkTheme();
    }
}
