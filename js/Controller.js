class Controller{
  #view;
  #model;
  constructor(Model, View) {
      if (Controller.hasOwnProperty('singleton'))
          return Controller.singleton;
      Object.defineProperty(Controller, 'singleton',{
          value: this,
          enumerable:false,
          writable:false,
          configurable:false
      });
      this.#model=Model;
      this.#view=View;
      
      this.handleRegister();
      this.handleLogin();
      this.handleInit();
      this.handleLogout();
      //this.handleShowProfile();
      this.#view.bindShowProfile(this.getProfile);
      

    }

    handleInit=()=>{
        this.#view.bindInit(this.isLogged)
    }

    handleRegister=()=>{
        this.#view.bindRegister(this.#view.register, this.#model.validateUser);
        console.log('pasa');
    }

    handleLogin=()=>{
        this.#view.bindLogin(this.#view.login, this.#model.validateUser);
    }

    handleLogout=()=>{
        this.#view.bindLogout(this.logout);
    }

    handleShowProfile = () =>{
        this.getProfile(this.#view.showProfile);
    }
   


    isLogged(){
        return fetch('http://localhost/php/isLogged.php', {
            method: 'get',
            }).then(function(response) {
            return response.json();
            })
    }


    getProfile(handler){

        
        fetch('http://localhost/php/getSessionId.php', {
            method: 'get',
            }).then(function(response) {  
           return response.json();
            }).then(function (data) {
                handler(data);
            })
            
    }

}
