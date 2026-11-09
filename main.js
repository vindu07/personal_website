document.addEventListener("DOMContentLoaded", () => {

    /* THEME */
    try{
    // get device theme
    const darkThemePreferred = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
    var deviceTheme = darkThemePreferred ? "dark" : "light";

    // set saved theme
    var savedTheme = localStorage.getItem("theme");
    if(savedTheme == "dark" || deviceTheme == "dark" && savedTheme != "light") 
        document.body.classList.add("dark");
    else
        document.body.classList.add("light");
    
    // theme toggle button
    const themeBtn = document.querySelector("footer #theme-btn");

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        var theme = (localStorage.getItem("theme") == "dark") ? "light" : "dark";
        localStorage.setItem("theme", theme);
    });
    } catch(e) {
        console.error("(•-•)⌐   Theme -- " + e.toString());
    }

    /* ACTIVE PAGE HIGHLIGHTING */
    try{
        let currPage = document.location.pathname.slice(1); // removes "/" at start
        if(currPage.charAt(0) == 'i') currPage = currPage.substring(3, currPage.length); // removes 'it/' if present

        if(currPage == "") currPage = "home";
        
        //removes end "/" if present (problems with github)
        if(currPage.charAt(currPage.length -1) == "/") currPage = currPage.substring(0, currPage.length -1);

        //console.log(currPage); //debug
        
        const activeBtn = document.querySelector(`header nav #${currPage}`);
        activeBtn.classList.add("active");

    } catch(e) {
        console.error("(•-•)⌐   Active page highlighting -- " + e.toString());
    }

});