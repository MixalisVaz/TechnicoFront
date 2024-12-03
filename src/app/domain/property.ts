import { Owner } from "./owner";
import { Repair } from "./repair";

export interface Property {
  id:number,
  propertyIdentificationE9Number: number; // Unique E9 Property ID
    address: string;
    yearOfConstruction: number; 
    propertyType: 'DETACHED' | 'SEMI_DETACHED' | 'FLAT'; 
    owner: Owner;
    repairs:Repair[];
}
  