class Router {
  constructor(node) {
    this.node = node;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  render() {
    this.node.innerHTML = "";
    let currentRoute = this.activeRoute();
    let newP = document.createElement("p");
    newP.innerHTML = currentRoute;
    this.node.appendChild(newP);
  }

  activeRoute() {

  }
}
