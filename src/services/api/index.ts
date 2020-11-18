import { userMapper } from "../mappers/userMapper";
import UserDto from "../dtos/userDto";

/**
 * Function that get data from the server
 *
 * @return sorted mapped data
 */
export async function getUsers() {
  try {
    const data: UserDto[] = await fetch('http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
      .then(res => res.json())

    return await data.sort((a, b) => a.id - b.id).map(user => userMapper(user))
  } catch (error) {
    console.error(error);
  }
}
