class Events {
    constructor(dateOfEvent) {
        this.dateOfEvent = dateOfEvent;
    }
    bookEvent() {
        console.log("Booked Event");
    }
}

class Movie extends Events {
    constructor(movieName, movieDate) {
        super(movieDate)
        this.movieName = movieName;
        //this.movieDate = movieDate;
    }
}

let dp = new Movie("Deadpool", "2024-08-12");
console.log(dp);

console.log(Movie);
console.log(Events);