function updateDate() {
  const dateLink = document.getElementById('date-link');
  const options = {
    year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true,
  };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  dateLink.textContent = formattedDate;
}
updateDate();
setInterval(updateDate, 60000); // Update every minute