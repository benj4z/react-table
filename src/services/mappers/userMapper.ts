import User, { UserAddress } from "../../models/User";
import UserDto from "../dtos/userDto";
import UserAddressDto from "../dtos/userAddressDto";

/**
 * Map DTO to UserAddressMapper.
 *
 * @param dto - UserAddress DTO
 */
export const userAddressMapper = (dto: UserAddressDto): UserAddress => {
  return new UserAddress({
    street: dto.streetAddress,
    state: dto.state,
    city: dto.city,
    zip: dto.zip,
  })
}

/**
 * Map DTO to User model.
 *
 * @param dto - User DTO
 */
export const userMapper = (dto: UserDto): User => {
  return new User({
    id: dto.id,
    firstName: dto.firstName,
    lastName: dto.lastName,
    email: dto.email,
    phone: dto.phone,
    address: userAddressMapper(dto.address),
    description: dto.description,
  })
}
