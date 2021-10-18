//Steo 1
var movies = ["12 Angry Men", "Inception", "The Dark Knight", "Se7en", "Incendies"];
document.writeln(movies[1]);

//Step 2
var movies = new Array(5);
movies[0] = "12 Angry Men";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Se7en";
movies[4] = "Incendies";
document.writeln(movies[0]);

//Step 3
var movies = new Array(5);
movies[0] = "12 Angry Men";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Se7en";
movies[4] = "Incendies";
movies.splice(2, 0, "Joker");
document.writeln(movies.length);

//Step 4
var movies = [];
movies[0] = "12 Angry Men";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Se7en";
movies[4] = "Incendies";
movies.splice(0, 1);
document.writeln(movies);

//Step 5
movies = [];
movies[0] = "12 Angry Men";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Se7en";
movies[4] = "Incendies";
movies[5] = "Joker";
movies[6] = "Don't Breathe";
var i;
for ( i= 0; i < movies.length; i += 1) {
    document.writeln(movies[i]);
}

//Step 6

movies = [];
movies[0] = "12 Angry Men";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Se7en";
movies[4] = "Incendies";
movies[5] = "Joker";
movies[6] = "Don't Breathe";
var i;
for (i in movies) {
    window.console.log(movies[i]);
}

//Step 7
movies = [];
movies[0] = "12 Angry Men";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Se7en";
movies[4] = "Incendies";
movies[5] = "Joker";
movies[6] = "Don't Breathe";
movies.sort();
for (var i in movies) {
    document.writeln(movies[i]);
}

//Step 8
movies = [];
movies[0] = "12 Angry Men";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Se7en";
movies[4] = "Incendies";
movies[5] = "Joker";
movies[6] = "Don't Breathe";
leastFavMovies = [];
leastFavMovies[0]="Underwater";
leastFavMovies[1]="Max Steel";
leastFavMovies[2]="The Call of the Wild"
document.writeln("\n");
document.writeln("Movies I like:");
document.writeln("\n");
for (movie in movies) {
    document.writeln(movies[movie]);
}
document.writeln("\n");
document.writeln("Movies I regret watching:");
document.writeln("\n");
for (movie in leastFavMovies) {
    document.writeln(leastFavMovies[movie]);
}
document.writeln("\n");


//Step 9

movies = [];
movies[0] = "12 Angry Men";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Se7en";
movies[4] = "Incendies";
movies[5] = "Joker";
movies[6] = "Don't Breathe";
leastFavMovies = [];
leastFavMovies[0]="Underwater";
leastFavMovies[1]="Max Steel";
leastFavMovies[2]="The Call of the Wild"
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
for (index in movies) {
    document.writeln(movies[index]);
}

//Step 10

movies = [];
movies[0] = "12 Angry Men";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Se7en";
movies[4] = "Incendies";
movies[5] = "Joker";
movies[6] = "Don't Breathe";
leastFavMovies = [];
leastFavMovies[0]="Underwater";
leastFavMovies[1]="Max Steel";
leastFavMovies[2]="The Call of the Wild"
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
document.writeln(movies.pop());