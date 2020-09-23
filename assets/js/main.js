// Main.js

if(localStorage){
    if(localStorage.getItem('theme') === 'dark') {
        $("#theme-select").val("dark");
        $(".page-container").addClass("dark-theme");

    }
    if(localStorage.getItem('theme') === 'light') {
        $("#theme-select").val("light");
        $(".page-container").removeClass("dark-theme");
    }
}


$("#theme-select").on("click", function() {
    let select = $( "#theme-select" ).val();
    if (select === 'dark') {
        $(".page-container").addClass("dark-theme");
        localStorage.setItem('theme', select);
    }
    if (select === 'light') {
        $(".page-container").removeClass("dark-theme");
        localStorage.setItem('theme', select)
    }
})