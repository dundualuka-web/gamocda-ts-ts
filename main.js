console.log("Hotel booking System - luka ");
const roomName = "Sea View";
const floor = 5;
const isAvailable = true;
const price = 180;
console.log("--- 2.1 ცვლადები ---");
console.log(roomName);
console.log(floor);
console.log(isAvailable);
console.log(price);
function getRoomInfo(name, roomFloor, available, roomPrice) {
    return `ოთახი: ${name}, სართული: ${roomFloor}, თავისუფალია: ${available}, ფასი ღამეში: ${roomPrice} ლარი`;
}
console.log("\n--- 2.2 ფუნქცია getRoomInfo ---");
const roomInfo = getRoomInfo(roomName, floor, isAvailable, price);
console.log(roomInfo);
function getRoomCategory(roomPrice) {
    if (roomPrice < 100) {
        return "Economy";
    }
    else if (roomPrice <= 250) {
        return "Standard";
    }
    else {
        return "Luxury";
    }
}
console.log(getRoomCategory(80));
console.log(getRoomCategory(180));
console.log(getRoomCategory(300));
// 2.4 -
const cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Telavi"];
for (let i = 0; i < cities.length; i++) {
    console.log(`${i} - ${cities[i]}`);
}
const ratings = [8, 9, 7, 10];
let sum = 0;
for (const rating of ratings) {
    sum += rating;
}
const average = sum / ratings.length;
// 3.3 - ობიექტები
const hotel = {
    name: "Grand Hotel",
    city: "Batumi",
    country: "Georgia",
    foundedYear: 2018,
    website: "https://grandhotel.ge",
};
const singleRoom = {
    id: 1,
    name: "Sea View",
    type: "Deluxe",
    capacity: 2,
    price: 180,
};
console.log(hotel);
console.log(singleRoom);
// 3.4 - ობიექტების მასივი
const rooms = [
    { id: 1, name: "Sea View", type: "Deluxe", capacity: 2, price: 180 },
    { id: 2, name: "Mountain View", type: "Standard", capacity: 2, price: 120 },
    {
        id: 3,
        name: "Presidential Suite",
        type: "Luxury",
        capacity: 4,
        price: 450,
    },
];
rooms.forEach((room) => {
    console.log(`${room.name} - ${room.price} ლარი`);
});
// Guest კლასის განსაზღვრა
class Guest {
    firstName;
    lastName;
    email;
    age;
    constructor(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    // 4.4 - getProfile მეთოდი
    getProfile() {
        return `სტუმარი: ${this.firstName} ${this.lastName}, ელ-ფოსტა: ${this.email}, ასაკი: ${this.age}`;
    }
}
// VipGuest კლასი, რომელიც აფართოებს (extends) Guest-ს
class VipGuest extends Guest {
    bookedRooms;
    constructor(firstName, lastName, email, age, bookedRooms = []) {
        super(firstName, lastName, email, age);
        this.bookedRooms = bookedRooms;
    }
    getBookedRooms() {
        return this.bookedRooms;
    }
}
// ობიექტების შექმნა
const guest = new Guest("გიორგი", "მიქავა", "giorgi@mail.com", 25);
const vipGuest = new VipGuest("ნინო", "კაპანაძე", "nino@mail.com", 30, [
    "Sea View",
    "Presidential Suite",
]);
console.log(guest);
console.log(guest.getProfile());
console.log(vipGuest.getProfile());
console.log("დაჯავშნილი ოთახები:", vipGuest.getBookedRooms());
export {};
//# sourceMappingURL=main.js.map