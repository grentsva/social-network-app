import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = props => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ));

  let addNewMessage = values => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
