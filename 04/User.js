export default class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
    this.validateEmail(this.email);
    this.validatePassword(this.password);
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (!isValid) {
      throw new Error("E-mail niepoprawny");
    }
  }

  validatePassword(password) {
    if (password !== 'pw123456') {
      throw new Error("Hasło niepoprawne");
    }
  }
}
