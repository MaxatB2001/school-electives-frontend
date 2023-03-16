import { makeAutoObservable } from "mobx";
import { checkAuthQuery } from "../queries/userApi";

export default class UserStore {
  isAuth = false;
  user = {};
  isLoading = false;
  error = "";
  schedule = [];
  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this.user = user;
  }

  get user() {
    return this.user;
  }

  get isLoading() {
    return this.isLoading;
  }

  setIsAuth(bool) {
    this.isAuth = bool;
  }

  setIsLoading(bool) {
    this.isLoading = bool;
  }

  get isAuth() {
    return this.isAuth;
  }

  setError(error) {
    this.error = error;
  }

  get error() {
    return this.error;
  }



  checkAuthorization() {
    this.setIsLoading(true);
    checkAuthQuery()
      .then((data) => {
        console.log(data);
        this.setIsAuth(true);
        this.setUser(data);
      })
      .catch((e) => {
        this.setError("errr");
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  }
}
