import { UserInterface } from "../interfaces/user.interface";

export class UserModel implements UserInterface {

  private _assetsUrl = /assets/;

  avatar: string;
  firstName: string;
  id: number;
  isDeleted: boolean;
  lastName: string;
  userLevel: string;
  userLevelId: number;
  username: string;

  constructor(userData) {
    Object.assign(this, userData);
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  };

  getFullAvatarUrl() {
    return this._assetsUrl + this.avatar;
  }

  getUserLevelLabelClass() {
    return (this.userLevelId == 1) ? 'label label-success' : 'label label-default';
  }

}
