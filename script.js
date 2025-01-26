// Function to check notification permission
function requestNotificationPermission() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notifications.");
    return;
  }

  // Request permission if not already granted
  if (Notification.permission === "default") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        alert("Notification permission granted! Press the button to see a notification.");
      } else {
        alert("You denied notification permission.");
      }
    });
  } else if (Notification.permission === "denied") {
    alert("You have denied notification permissions. Please enable them in browser settings.");
  }
}

// Function to show a notification
function showNotification() {
  if (Notification.permission === "granted") {
    // Create and display a notification
    const notification = new Notification("Hello!", {
      body: "This is your notification message.",
      icon: "https://via.placeholder.com/128", // Optional icon URL
    });

    // Handle click on notification
    notification.onclick = () => {
      window.open("https://example.com", "_blank");
    };
  } else {
    alert("Notifications are not allowed. Please grant permission.");
  }
}

// Add event listeners
document.getElementById("notify-btn").addEventListener("click", showNotification);

// Ask for notification permission on page load
requestNotificationPermission();
