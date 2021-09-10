const initialState = [
  {
    id: 0,
    fullName: "Raman Sharma",
    email: "abshar@gmail.com",
    phone: 9470873559,
  },
  {
    id: 1,
    fullName: "Md zeeshan Alam",
    email: "alamzeeshan751@gmail.com",
    phone: 9555808840,
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;

    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;

    case "DELETE_CONTACT":
      const filteredContact = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filteredContact;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
