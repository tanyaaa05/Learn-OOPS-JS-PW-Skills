class Events {
    bookEvent() {
        console.log("Booking Event");
    }
}

class Movie extends Events {
    showTime() {
        console.log("Show Time");
    }
}

m = new Movie();
m.bookEvent();

console.log(Events);