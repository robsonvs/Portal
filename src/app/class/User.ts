export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: {
      id: string,
      street: string,
      complement: String,
      city: string,
      state: string,
      zipCode: number,
    }
  }