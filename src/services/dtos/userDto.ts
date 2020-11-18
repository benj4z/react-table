import UserAddressDto from "./userAddressDto";

/**
 * User Data transfer object.
 */
export default interface UserDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: UserAddressDto;
  description: string;
}
