export class Owner {
    vatNumber: string;
    name: string;
    surname: string;
    address: string;
    phoneNumber: string;
    email: string;
    username: string;
    password: string;
    propertyType: 'Detached house' | 'Maisonette' | 'Apartment';
    
    constructor(
      vatNumber: string,
      name: string,
      surname: string,
      address: string,
      phoneNumber: string,
      email: string,
      username: string,
      password: string,
      propertyType: 'Detached house' | 'Maisonette' | 'Apartment'
    ) {
      this.vatNumber = vatNumber;
      this.name = name;
      this.surname = surname;
      this.address = address;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.username = username;
      this.password = password;
      this.propertyType = propertyType;
    }
  }
  