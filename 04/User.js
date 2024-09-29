export default class User {
  constructor({ email, password }) {
    this.email = email
    this.password = password;
    this.validateEmail(this.email)
  }


 validateEmail (email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  if (!isValid) {
    throw new Error("E-mail niepoprawny");
  }
 }
  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }
}
