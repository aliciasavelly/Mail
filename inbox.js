module.exports = {
  render() {
    let container = document.createElement("el");
    container.className = "messages";
    container.innerHTML = "An Inbox Message";
    return container;
  }
};

// module.exports = Inbox;
