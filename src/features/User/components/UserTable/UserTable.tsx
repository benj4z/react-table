import React from "react";
import { Table } from "../../../../components/Table";
import { TableColumnElement } from "../../../../components/Table/Table";
import User from "../../../../models/User";

interface UserTableComponentProps {
  /** List of users to display */
  users: User[],
  /** Row click handler */
  onClick: (arg0: User) => void,
}

/**
 * Component that prepare data for table to display
 *
 * Determines columns and header data
 *
 * @param users
 * @param onClick
 * @constructor
 */
export const UserTableComponent = ({ users, onClick }: UserTableComponentProps) => {
  const HEADERS = ['id', 'First Name', 'Last Name', 'Email', 'Phone', 'Address', 'Description'];

  const COLUMNS: Array<TableColumnElement> = [
    { key: 'id', render: defaultRender, width: '50px' },
    { key: 'firstName', render: defaultRender },
    { key: 'lastName', render: defaultRender },
    { key: 'email', render: defaultRender, width: '100px' },
    { key: 'phone', render: defaultRender, width: '150px' },
    { key: 'address', render: addressRender,  width: '150px' },
    { key: 'description', render: defaultRender, width: '300px' }
  ];

  /**
   * Render default string in column
   *
   * @param user - User
   * @param key - key in User
   */
  function defaultRender(user: User, key: keyof User): string {
    return user[key] as string
  }

  /**
   * Render custom address string
   *
   * @param user
   */
  function addressRender(user: User): string {
    return `${user.address.city} ${user.address.street}`;
  }

  return (
    <Table headerRow={HEADERS} data={users} columnsRow={COLUMNS} onClick={onClick}/>
  )
}

export const UserTable = React.memo(UserTableComponent);
