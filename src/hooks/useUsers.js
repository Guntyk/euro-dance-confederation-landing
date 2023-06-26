import { putUser } from "../api/requests";

export const createUser = (personObj) => {
  putUser(personObj).then(([createError, createdPerson]) => {
    if (createdPerson) {
      // setPeople((prevPeople) => [...prevPeople, createdPerson.data]);
      alert("Created!");
    } else {
      console.log(createError);
      alert("Creating error");
    }
  });
};
