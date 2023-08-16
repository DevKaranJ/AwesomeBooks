function updateDate() {
  const dateSection = document.querySelector('.date-section');
  const dateLink = document.getElementById('date-link');
  
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  
  dateLink.textContent = formattedDate;
}

// Update the date initially and then set an interval to update it every minute
updateDate();
setInterval(updateDate, 60000); // Update every minute
