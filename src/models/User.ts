/**
 * User address model.
 */
export class UserAddress {
  street: string = '';
  city: string = '';
  state: string = '';
  zip: number = 0;

  constructor(data?: Partial<UserAddress>) {
    Object.assign(this, data);
  }
}

/**
 *  User model.
 */
export default class User {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  address: UserAddress = new UserAddress();
  description: string = '';

  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }

  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
