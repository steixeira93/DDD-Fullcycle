class Customer {

  _id: string;
  _name: string = "";
  _address: string = "";
  _active: boolean = true;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  validate() {
    if (this._name === "") {
      throw new Error("Name is required");
    }
    if(this._id.length === 0) {
      throw new Error("ID is required");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    this._active = true;
  }

  desactivate() {
    this._active = false;
  }
}