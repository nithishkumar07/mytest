document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const movie = document.getElementById('movie').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    alert(`Booking Confirmed! \nMovie: ${movie} \nDate: ${date} \nTime: ${time}`);
});
