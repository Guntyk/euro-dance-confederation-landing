import { putUser } from '../api/requests';

export const createUser = (personObj) => {
  putUser(personObj).then(([createError, createdPerson]) => {
    if (createError) {
      console.log(createError);
      alert('Error. Try later');
    }
  });
};
