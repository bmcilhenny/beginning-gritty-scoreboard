const main = function() {
  // using querySelectorAll cause they're more modern, they return a Nodelist as opposed to a HTML collection like getElementsByClassName. You cannot call .forEach on a HTML collection BUT can on a Node List. Ugh... DOM unintuitiveness
  const menues = document.querySelectorAll(".more-menu");
  const notificationsBadge = document.getElementById("notifications-badge");
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
      // classList is not supported in internet explorer
      // arr = element.className.split(" ");
      // if (arr.indexOf(name) == -1) {
      //   element.className += " " + name;
      // }
      event.target.className += "active";
      notificationsBadge.textContent = numberActive;
    }
  });
};

document.addEventListener("DOMContentLoaded", main);
