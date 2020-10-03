// =========================================================
// * Lansera - Mobile App One Page Bootstrap 4 Template
// =========================================================
// * Product Page: https://uiroute.com/product/bootstrap/lansera
// * Copyright 2020 UiRoute (https://www.uiroute.com)
// * Coded by https://uiroute.com
// =========================================================
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Contact us if you want to remove it.

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
