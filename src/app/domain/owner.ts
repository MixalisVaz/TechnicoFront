
export interface Owner {

    id:number;
    userName: string;
    password: string;
    role: 'PROPERTY_OWNER' | 'ADMIN';
    vatNumber: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber :string
    email : string
    properties: 'DETACHED' | 'MAISONETTE' | 'APARTMENT';
    
}
