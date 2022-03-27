const initialState = [
  { id: 0, name: "Aarav Sharma", email: "Aarav@email.com", phone: 7689543210, subject: "Maths", city: "Allahabad", S_Date: "15/10/2020", E_Date: "20/8/2022" },
  { id: 1, name: "Aakav Tripathi", email: "Aakav@email.com", phone: 9876543210, subject: "Bio", city: "Lucknow", S_Date: "20/11/2021", E_Date: "20/11/2023" },
  { id: 2, name: "Aakesh Singh", email: "Aakesh@email.com", phone: 9678543210, subject: "Maths", city: "Allahabad", S_Date: "15/10/2020", E_Date: "20/8/2022" },
  { id: 3, name: "Advik Tripathi", email: "Advik@email.com", phone: 9432187650, subject: "Maths", city: "Kanpur", S_Date: "15/8/2020", E_Date: "20/10/2022" },
  { id: 4, name: "Chaitanya Sharma", email: "Chaitanya@email.com", phone: 8907654231, subject: "Physics", city: "Lucknow", S_Date: "20/11/2021", E_Date: "20/11/2023" },
  { id: 5, name: "Chandran Tripathi", email: "Chandran@email.com", phone: 7896053421, subject: "Maths", city: "Kanpur", S_Date: "15/10/2020", E_Date: "20/8/2022" },
  { id: 6, name: "Darsh Singh", email: "Darsh@email.com", phone: 9807456312, subject: "Physics", city: "Allahabad", S_Date: "20/11/2021", E_Date: "20/11/2023" },
  { id: 7, name: "Darpan Sharma", email: "Darpan@email.com", phone: 9988765431, subject: "Maths", city: "Kanpur", S_Date: "15/8/2020", E_Date: "20/10/2022" },
  { id: 8, name: "Raman Tripathi", email: "Raman@email.com", phone: 8097976565, subject: "Bio", city: "Lucknow", S_Date: "20/11/2021", E_Date: "20/11/2023" },
  { id: 9, name: "Vihaan Singh", email: "Vihaan@email.com", phone: 9864753728, subject: "Physics", city: "Allahabad", S_Date: "15/10/2020", E_Date: "20/8/2022" },
  
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTACT":
      state = [{ name: null, email: null, phone: null, subject: null, city: null, S_Date: null, E_Date: null }];
      return state;
    default:
      return state;
  }
};
