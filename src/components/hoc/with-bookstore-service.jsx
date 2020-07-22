import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (Wrapper) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (
              <Wrapper bookstoreService={bookstoreService} {...props} />
            )
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

export default withBookstoreService