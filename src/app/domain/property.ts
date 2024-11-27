export class Property {
    id: number; // Unique E9 Property ID
    address: string;
    yearOfConstruction: number; 
    type: 'Detached house' | 'Maisonette' | 'Apartment building'; 
    ownerVAT: string; 
  
    constructor(
      id: number,
      address: string,
      yearOfConstruction: number,
      type: 'Detached house' | 'Maisonette' | 'Apartment building',
      ownerVAT: string
    ) {
      this.id = id;
      this.address = address;
      this.yearOfConstruction = yearOfConstruction;
      this.type = type;
      this.ownerVAT = ownerVAT;
    }
  }
  