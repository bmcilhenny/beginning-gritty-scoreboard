const main = function() {
  const notificationsBadge = document.querySelector("#notifications-badge");
  let numberActive = document.querySelectorAll('.glyphicon-bell.active').length;
  document.addEventListener("click", event => {
  
    if (event.target.matches(".more-btn")) {
      menuUnorderedList = event.target.nextElementSibling;
      if (getComputedStyle(menuUnorderedList).display === "none") {
        menuUnorderedList.style.setProperty("display", "block");
      } else {
        menuUnorderedList.style.setProperty("display", "none");
      }
    }

    if (even.target.matches(".notification")) {
      event.target.className += " active";
      notificationsBadge.textContent = numberActive;
    }
  });
};

document.addEventListener("DOMContentLoaded", main);