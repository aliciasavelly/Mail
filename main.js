const Router = require('./router.js');

document.addEventListener("DOMContentLoaded", () => {
  let content = document.querySelector(".content");
  let router = new Router(content);
  router.start();

  // const setWindowHash = (e) => {
  //   const li = e.target;
  //   const newLocation = li.innerText.toLowerCase();
  //   console.log(newLocation.toLowerCase);
  //   window.location.hash = newLocation;
  // };

  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach( (li) => {
    li.addEventListener("click", () => {
      let name = li.innerText.toLowerCase();
      location.hash = name;
    });
  });
});
