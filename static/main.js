document.addEventListener("DOMContentLoaded", () => {

  /*DETECT DEVICE THEME*/
  const darkThemePreferred = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
  if(darkThemePreferred) localStorage.setItem("preferred-theme", "dark");

  // set saved theme
  var theme = localStorage.getItem("theme");
  var preferred_theme = localStorage.getItem("preferred-theme");
  if(theme == "dark" || preferred_theme == "dark" && theme != "light") document.body.classList.add("dark");
  
  /* ACTIVE PAGE HIGHLIGHTING */
  try{
      let currPage = document.location.pathname.slice(1); // removes "/" at start
      if(currPage == "") currPage = "home";

      //removes end "/" if present (problems with github)
      if(currPage.charAt(currPage.length -1) == "/") currPage = currPage.substring(0, currPage.length -1);

      //console.log(currPage); //debug
      
      const activeBtn = document.querySelector(`header nav #${currPage}`);
      activeBtn.classList.add("active");

  } catch(ex) {
      console.error("_ERR -- Active page highlighting -- " + ex.toString());
  }

  /* THEME */
  const themeBtn = document.querySelector("footer #theme-btn");

  themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if(localStorage.getItem("theme") == "dark") localStorage.setItem("theme", "light");
      else localStorage.setItem("theme", "dark");
  });
  
});