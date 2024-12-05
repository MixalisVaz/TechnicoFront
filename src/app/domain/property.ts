import { Owner } from "./owner";
import { PropertyType } from "./propertyType.enum";
import { Repair } from "./repair";

export interface Property {
  id:number,
  propertyIdentificationE9Number: string; // Unique E9 Property ID
    address: string;
    yearOfConstruction: number; 
    propertyType: PropertyType; 
    owner: Owner;
    repairs:Repair[];
}
  