document.addEventListener("DOMContentLoaded", () => {

    /* THEME */
    try{
    // get device theme
    const darkThemePreferred = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
    var deviceTheme = darkThemePreferred ? "dark" : "light";

    // set saved theme
    function setSavedTheme(){
        var savedTheme = localStorage.getItem("theme");
        if(savedTheme == "dark" || deviceTheme == "dark" && savedTheme != "light"){
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
        else{
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }
    }
    
    setSavedTheme();
    
    // theme toggle button
    const themeBtn = document.querySelector("footer #theme-btn");

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        var theme = (localStorage.getItem("theme") == "dark") ? "light" : "dark";
        localStorage.setItem("theme", theme);

        setSavedTheme();
    });
    } catch(e) {
        console.error("(•-•)⌐   Theme -- " + e.toString());
    }

    /* LANGUAGE */
    try {

        const langBtn = document.querySelector("footer #lang-btn");

        langBtn.addEventListener("click", ()=>{
            
            let currPath = document.location.pathname;
            let lang = "/it";
            let newPath;

            if(currPath.slice(0, 4) == "/it/"){ // if site is in italian
                
                currPath = currPath.slice(4, currPath.length); //remove '/it/'
                lang = "";
            }

            newPath = lang + currPath;
            document.location.pathname = newPath;
        });

    } catch(e) {
        console.error("(•-•)⌐   Language -- " + e.toString());
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