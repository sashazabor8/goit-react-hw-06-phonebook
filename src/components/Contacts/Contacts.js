import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getContactsFilter,
} from 'redux/contacts/contacts-selectors';
import actions from '../../redux/contacts/contacts-actions';
import s from './Contacts.module.css';

function Statistics() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactsFilter);
  const dispatch = useDispatch();
  const removeContact = id => dispatch(actions.deleteContact(id));

  useEffect(() => {
    if (contacts.length === 0) localStorage.removeItem('contacts');
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getFilteredList = () => {
    if (contacts.length === 0) return [];

    const optimizedFilter = filter.toLocaleLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(optimizedFilter)
    );
  };

  return (
    <ul className={s.contacts}>
      {getFilteredList().map(({ name, id, number }) => {
        return (
          <li key={id} className={s.contactsItem}>
            <p className={s.contactsText}>
              {name}: {number}
            </p>
            <button
              type="button"
              className={s.contactsBtn}
              onClick={() => removeContact(id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default Statistics;

//! с помощью функции connect()
// function Statistics({ contacts, filter, removeContact }) {
//   useEffect(() => {
//     if (contacts.length === 0) localStorage.removeItem('contacts');
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const getFilteredList = () => {
//     if (contacts.length === 0) return [];

//     const optimizedFilter = filter.toLocaleLowerCase().trim();

//     return contacts.filter(({ name }) =>
//       name.toLocaleLowerCase().includes(optimizedFilter)
//     );
//   };

//   return (
//     <ul className={s.contacts}>
//       {getFilteredList().map(({ name, id, number }) => {
//         return (
//           <li key={id} className={s.contactsItem}>
//             <p className={s.contactsText}>
//               {name}: {number}
//             </p>
//             <button
//               type="button"
//               className={s.contactsBtn}
//               onClick={() => removeContact(id)}
//             >
//               delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts.items,
//     filter: state.contacts.filter,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeContact: id => dispatch(actions.deleteContact(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
