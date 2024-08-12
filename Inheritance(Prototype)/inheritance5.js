function Events(dateOfEvent) {
    this.dateOfEvent = dateOfEvent;
}

Events.prototype.bookEvent = function() {
    console.log("Booking Event");
}

function Movie(movieName, movieDate) {
        Events.call(this,movieDate);
        this.movieName = movieName;
        //this.movieDate = movieDate;
}

let dp = new Movie("Deadpool", "2024-08-12");

console.log(dp);

console.log(Movie);
console.log(Events);
