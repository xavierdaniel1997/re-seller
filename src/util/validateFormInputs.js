export const validateFormRegister = (inputForm) => {
  const newError = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!inputForm.fname) newError.fname = "First Name is required*";
  if (!inputForm.sname) newError.sname = "Last Name is required*";
  if (!inputForm.email) newError.email = "Email is required*";
  if (!emailRegex.test(inputForm.email)) newError.email = "Invalid email format";
  if (!inputForm.password) newError.password = "Password is required*";
  if (!passwordRegex.test(inputForm.password))
    newError.password =
      "Password must be at least 8 characters include uppercase letter, lowercase letter, one digit, and one special character";
  if (inputForm.password !== inputForm.cpassword)
    newError.cpassword = "Passwords do not match";

  return newError;
};

export const validateLoginForm = (inputLogin) => {
  const newError = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!inputLogin.email) newError.email = "Email is required*";
    if (!emailRegex.test(inputLogin.email)) newError.email = "Invalid email format";
    if (!inputLogin.password) newError.password = "Password is required*";
    if (!passwordRegex.test(inputLogin.password))
      newError.password =
        "Password must be at least 8 characters include uppercase letter, lowercase letter, one digit, and one special character";
    
    return newError
}

export const validateAddForm = (inputForm) => {
  const newError = {};
  if(!inputForm.brand) newError.brand = "Brand Name is required*";
  if(!inputForm.year) newError.year = "Year is required*";
  if(!inputForm.title) newError.title = "Title is required*";
  if(!inputForm.state) newError.state = "required*";
  if(!inputForm.place) newError.place = "required*";
  if(!inputForm.zipCode) newError.zipCode = "required*";
  if(!inputForm.description) newError.description = "Description is required*";
  if(!inputForm.price) newError.price = "Price is required*";
  if(!inputForm.username) newError.username = "Name is required*";
  if(!inputForm.phone) newError.phone = "Phone is required*";

  return newError;
}