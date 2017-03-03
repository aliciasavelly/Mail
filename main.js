document.addEventListener("DOMContentLoaded", () => {

  const setWindowHash = (e) => {
    const li = e.target;
    const newLocation = li.innerText.toLowerCase();
    console.log(newLocation.toLowerCase);
    window.location.hash = newLocation;
  };

  document.querySelectorAll(".sidebar-nav li").forEach( (li) => {
    li.addEventListener("click", setWindowHash);
  });
});
