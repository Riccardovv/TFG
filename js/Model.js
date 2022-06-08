

class Model {
    
    constructor() {
        if (Model.hasOwnProperty("Model")) return Model.Model;
        Object.defineProperty(Model, "Model", {
        value: this,
        enumerable: false,
        writable: false,
        configurable: false,
    });

  
  }

  

}