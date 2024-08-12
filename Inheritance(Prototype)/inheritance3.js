function Events(dateOfEvent) {
    this.dateOfEvent = dateOfEvent;
}

Events.prototype.bookEvent = function() {
    console.log("Booking Event");
}

function Movie(name) {
    this.name = name;
}

Movie.prototypes = Object.create(Events.prototype);
c = new Movie("deadpool");
//c.bookEvent();
console.log(c);

console.log(Movie);
console.log(Events);