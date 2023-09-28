button = document.querySelector(".button");
notificationCount = document.querySelector(".notification-count");
notification = document.querySelectorAll(".notification");
unreadMarker = document.querySelectorAll(".unread-marker");

button.addEventListener("click", () => {
  notificationCount.innerHTML = "0";
  notification.forEach(e => e.classList.remove("unread"));
  unreadMarker.forEach(e => e.remove());
});