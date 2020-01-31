/*Your job is to sign each of these 
promising young music stars to the appropriate label.

JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.
Create an array for each of these record labels.

Create a factory function for each possible genre (e.g. createBluegrassArtist()). 
Then invoke the appropriate function for each of the following artists and 
place the resulting object in the corresponding label array.

Bruce Atikins is a Country artist and is 23 years old --- DONE
Jensen Brown is a Pop artist and is 20 years old --- DONE
Dre Funkz is a Funk artist and is 25 years old --- DONE
Dusta Grimes is a Rap artist and is 21 years old --- DONE
Bartholomew Danielson is a Bluegrass artist and is 23 years old --- DONE
Avilee Dallas is a Country artist and is 19 years old --- DONE
Austin Kinkaid is a Pop artist and is 22 years old --- DONE
Loyoncé Branis is a Rap artist and is 27 years old --- DONE*/

const createFunkArtist = (genre, name, age) => {
    return {
        genre: genre,
        name: name,
        age: age
    }
}
const createRapArtist = (genre, name, age) => {
    return {
        genre: genre,
        name: name,
        age: age
    }
}
const createCountryArtist = (genre, name, age) => {
    return {
        genre: genre,
        name: name,
        age: age
    }
}
const createBluegrassArtist = (genre, name, age) => {
    return {
        genre: genre,
        name: name,
        age: age
    }
}
const createPopArtist = (genre, name, age) => {
    return {
        genre: genre,
        name: name,
        age: age
    }
}

const polarRecords = [
    createPopArtist("Pop","Jensen Brown", "20"),
    createPopArtist("Pop", "Austin Kincaid", "22")
]
console.log("Polar Records", polarRecords)

const chattenRecords = [
    createCountryArtist("Country", "Bruce Atikins", "23"),
    createCountryArtist("Country", "Avilee Dallas", "19"),
    createBluegrassArtist("Bluegrass", "Bartholomew Danielson", "23")
]
console.log("Chatten Records", chattenRecords)

const jumpStartRecords = [
    createFunkArtist("Funk", "DreFunkz", "25"),
    createRapArtist("Rap", "Dusta Grimes", "21"),
    createRapArtist("Rap", "Loyonce Branis", "27")
] 
console.log("Jump Start Records", jumpStartRecords)