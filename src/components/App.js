import React from 'react';
import Container from './Container';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

function App() {
  return (
    <>
      <Container title="Phonebook">
        <Form />
      </Container>
      <Container title="Contacts">
        <Filter />
        <Contacts />
      </Container>
    </>
  );
}

export default App;
