import React from 'react';
import styles from './UserDetail.module.css';
import User from "../../../../models/User";

interface UserDetailComponentProps {
  /** user to display */
  user: User | null;
  /** show or hide trigger for detail component */
  opened: Boolean;
  /** close handler */
  onClose: () => void;
}

/**
 * Component that receive user as prop and display its data
 *
 * Component can be shown or hidden
 *
 * @param user
 * @param opened
 * @param onClose
 */
export const UserDetailComponent = ({ user, opened, onClose }: UserDetailComponentProps) => {
  return opened && (
    <div className={styles.root}>
      <button type="button" className={styles.btn} onClick={onClose}>CLOSE</button>
      <div className={styles.container}>
        {user ? (
          <>
            <div className={styles.infoRow}>
              <div className={styles.infoColumn}>
                <p><b>Id:</b>{user.id}</p>
                <p><b>First Name:</b> {user.firstName}</p>
                <p><b>Last Name:</b> {user.lastName}</p>
              </div>
              <div className={styles.infoColumn}>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Address:</b> {`${user.address.city} ${user.address.street}`}</p>
              </div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoColumn}>
                <p><b>Description:</b><br />{user.description}</p>
              </div>
            </div>
          </>
        ) : (
          <div>Loading user...</div>
        )}
      </div>
    </div>
  )
}

export const UserDetail = React.memo(UserDetailComponent);
