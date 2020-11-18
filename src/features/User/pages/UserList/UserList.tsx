import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./UserList.module.css";
import { Search } from "../../../../components/Search";
import { getUsers } from "../../../../services/api";
import User from "../../../../models/User";
import { UserTable } from "../../components/UserTable";
import { UserDetail } from "../../components/UserDetail";

interface Props {}

/**
 * User list feature page
 *
 * Contains table of user, search and detail modal window.
 */
export const UserListComponent = () => {
  const [ users, setUsers ] = useState<User[]>([]);
  const [ opened, setOpened ] = useState<boolean>(false);
  const [ selectedUser, setSelectedUser ] = useState<User | null>(null);
  const [ searchValue, setSearchValue ] = useState<string>('');
  const [ filteredUsers, setFilteredUsers ] = useState<User[]>([]);

  /**
   * Load users
   */
  useEffect(() => {
    function handleUserLoaded(users: User[]) {
      setUsers(users);
    }

    getUsers().then(users => {
      if (users) handleUserLoaded(users)
    })
  }, [])

  /**
   * Search users
   */
  useEffect(() => {
    const clearedQuery = searchValue.trim().toLowerCase();

    const filteredUsers = users
      .filter(user => {
          return user.id.toString().toLowerCase().includes(clearedQuery) ||
          user.fullName.toLowerCase().includes(clearedQuery)
        }
      );

    setFilteredUsers(filteredUsers);
  }, [searchValue])

  /**
   * Function that open detail modal of user
   *
   * @param currentUser
   */
  function handleOpenDetails(currentUser: User) {
    setOpened(true);
    const user = users.find(user => user === currentUser);

    if (user) {
      setSelectedUser(user);
    }
  }

  /**
   * Function that close detail modal of user
   */
  function handleCloseDetails() {
    setOpened(false);
    setSelectedUser(null);
  }

  /**
   * Function that change value of search input
   *
   * @param event
   */
  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    // TODO: also need to add throttling
    setSearchValue(event.currentTarget.value);
  }

  /**
   * result const of table user to show
   */
  const tableUsers = filteredUsers.length > 0 ? filteredUsers : users;

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <Search onChange={handleSearchChange} value={searchValue} placeholder="Search users..." />
      </div>
      {users.length > 0 ? (
        <div className={styles.tableWrapper}>
          {searchValue && filteredUsers.length === 0 ?
            <div>There is no such elements...</div> :
            <UserTable users={tableUsers} onClick={handleOpenDetails}/>}
        </div>
      ) : <div>Loading...</div>}
      <UserDetail user={selectedUser} opened={opened} onClose={handleCloseDetails} />
    </div>
  );
}

export const UserList: React.FC<Props> = React.memo(UserListComponent);

