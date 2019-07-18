const main = function() {
  const menues = document.querySelectorAll(".more-menu");
  const notificationsBadge = document.querySelector("#notifications-badge");
  let numberActive = document.querySelectorAll('.glyphicon-bell.active').length;
  document.addEventListener("click", event => {
    if (event.target.matches(".more-btn")) {
      menues.forEach(menu => {
        if (getComputedStyle(menu).display === "none") {
          menu.style.setProperty("display", "block");
        } else {
          menu.style.setProperty("display", "none");
        }
      });
    }

    if (even.target.matches(".notification")) {
      event.target.className += "active";
      notificationsBadge.textContent = numberActive;
    }
  });
};

document.addEventListener("DOMContentLoaded", main);
