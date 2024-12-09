
export interface Owner {

    userName: string;
    password: string;
    role: string;
    vatNumber: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber :string
    email : string
    properties: 'DETACHED' | 'MAISONETTE' | 'APARTMENT';
    
}
