console.log("Hotel booking System - luka ");

const roomName: string = "Sea View";
const floor: number = 5;
const isAvailable: boolean = true;
const price: number = 180;

console.log("--- 2.1 ცვლადები ---");
console.log(roomName);
console.log(floor);
console.log(isAvailable);
console.log(price);

function getRoomInfo(
  name: string,
  roomFloor: number,
  available: boolean,
  roomPrice: number,
) {
  return `ოთახი: ${name}, სართული: ${roomFloor}, თავისუფალია: ${available}, ფასი ღამეში: ${roomPrice} ლარი`;
}

console.log("\n--- 2.2 ფუნქცია getRoomInfo ---");
const roomInfo = getRoomInfo(roomName, floor, isAvailable, price);
console.log(roomInfo);

function getRoomCategory(roomPrice: number) {
  if (roomPrice < 100) {
    return "Economy";
  } else if (roomPrice <= 250) {
    return "Standard";
  } else {
    return "Luxury";
  }
}

console.log(getRoomCategory(80));
console.log(getRoomCategory(180));
console.log(getRoomCategory(300));

// 2.4 -
const cities: string[] = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Telavi"];

for (let i = 0; i < cities.length; i++) {
  console.log(`${i} - ${cities[i]}`);
}

const ratings = [8, 9, 7, 10];
let sum: number = 0;

for (const rating of ratings) {
  sum += rating;
}

const average: number = sum / ratings.length;

// 3.1 - Type Alias
type TRoom = {
  id: number;
  name: string;
  type: string;
  capacity: number;
  price: number;
};

// 3.2 - Interface
interface IHotel {
  name: string;
  city: string;
  country: string;
  foundedYear: number;
  website?: string;
}

// 3.3 - ობიექტები
const hotel: IHotel = {
  name: "Grand Hotel",
  city: "Batumi",
  country: "Georgia",
  foundedYear: 2018,
  website: "https://grandhotel.ge",
};

const singleRoom: TRoom = {
  id: 1,
  name: "Sea View",
  type: "Deluxe",
  capacity: 2,
  price: 180,
};

console.log(hotel);
console.log(singleRoom);

// 3.4 - ობიექტების მასივი
const rooms: TRoom[] = [
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
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public age: number,
  ) {}

  // 4.4 - getProfile მეთოდი
  getProfile(): string {
    return `სტუმარი: ${this.firstName} ${this.lastName}, ელ-ფოსტა: ${this.email}, ასაკი: ${this.age}`;
  }
}

// VipGuest კლასი, რომელიც აფართოებს (extends) Guest-ს
class VipGuest extends Guest {
  private bookedRooms: string[];

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    bookedRooms: string[] = [],
  ) {
    super(firstName, lastName, email, age);
    this.bookedRooms = bookedRooms;
  }

  getBookedRooms(): string[] {
    return this.bookedRooms;
  }
}

// ობიექტების შექმნა
const guest = new Guest("გიორგი", "მიქავა", "giorgi@mail.com", 25);
const vipGuest = new VipGuest("ნინო", "კაპანაძე", "nino@mail.com", 30, [
  "Sea View",
  "Presidential Suite",
]);
console.log(guest)
console.log(guest.getProfile());

console.log(vipGuest.getProfile());
console.log("დაჯავშნილი ოთახები:", vipGuest.getBookedRooms());
