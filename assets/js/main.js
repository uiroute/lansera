// Main.js

if(localStorage){
    console.log(localStorage.getItem('theme'));
    if(localStorage.getItem('theme') === 'dark') {
        $(".page-container").addClass("dark-theme");
    }
}

// $(".page-container").addClass("dark-theme");
$("#theme-select").on("click", function() {
    let select = $( "#theme-select" ).val();
    console.log(select)
    if (select === 'dark') {
        $(".page-container").addClass("dark-theme");
        localStorage.setItem('theme', select);
    }
    if (select === 'light') {
        $(".page-container").removeClass("dark-theme");
        localStorage.setItem('theme', select)
    }
})