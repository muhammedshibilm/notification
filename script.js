// Check if the browser supports Notifications
if ("Notification" in window) {
  // Request permission when the page loads
  Notification.requestPermission().then((permission) => {
    console.log(`Notification permission: ${permission}`);
  });

  // Add event listener to the button
  document.getElementById("notify-btn").addEventListener("click", () => {
    if (Notification.permission === "granted") {
      // Show the notification
      const notification = new Notification("Hello!", {
        body: "This is your notification message.",
        icon: "https://via.placeholder.com/128", // Optional: Add your custom icon URL
      });

      // Handle notification click event
      notification.onclick = () => {
        window.open("https://example.com", "_blank"); // Redirect to a URL when clicked
      };
    } else if (Notification.permission === "denied") {
      alert("You have denied notification permissions.");
    } else {
      alert("Notifications are not enabled.");
    }
  });
} else {
  alert("This browser does not support Notifications.");
  }
