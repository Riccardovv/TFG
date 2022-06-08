


class View{
  constructor() {

      if (View.hasOwnProperty('singleton'))
          return View.singleton;
      Object.defineProperty(View, 'singleton',{
          value: this,
          enumerable:false,
          writable:false,
          configurable:false
      });
      
  }



  init(isLogged){
    $('#content').empty();
    console.log('init');

    if(isLogged()){

      $('#register').attr('display', 'none');;
      $('#login').hide();
      $('#nav-bar').append(`<li class="nav-item">
      <a id="logout" class="btn btn-danger" href="./php/logout.php">Cerrar Sesion</a>
    </li>`)

    }
  }


	bindInit(handler){
    $('#init').click(handler);
    $('#logo').click(handler);
    }




//   login(handler){
//     $('#content').empty();
    
//     $('#content').append(`
//     <div class="container w-50">
//         <form name="login" id="login">
//           <!-- Email input -->
//           <div class="form-outline mb-4">
//             <input type="email" id="loginName" class="form-control" />
//             <label class="form-label" for="loginName">Email</label>
//           </div>
    
//           <!-- Password input -->
//           <div class="form-outline mb-4">
//             <input type="password" id="loginPassword" class="form-control" />
//             <label class="form-label" for="loginPassword">Password</label>
//           </div>
    
//           <!-- 2 column grid layout -->
//           <div class="row mb-4">
//             <div class="col-md-6 d-flex justify-content-center">
//               <!-- Checkbox -->
//               <div class="form-check mb-3 mb-md-0">
//                 <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
//                 <label class="form-check-label" for="loginCheck"> Remember me </label>
//               </div>
//             </div>
    
//             <div class="col-md-6 d-flex justify-content-center">
//               <!-- Simple link -->
//               <a href="#!">Forgot password?</a>
//             </div>
//           </div>
    
//           <!-- Submit button -->
//           <button id="log" type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
    
//           <!-- Register buttons -->
//           <div class="text-center">
//             <p>Not a member? <a href="#!" id=registerFromLogin>Register</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//     <!-- Pills content -->
//     </div>
//     `);
//     $('log').click(function (e) {
//       //e.preventDefault();
//       console.log('legeando');
//       handler($('#login'))
//     })
// }


// register(validate){
//     $('#content').empty();
//     $('#content').append(`
//     <div class="container w-50">
    
//     <div class="tab-content">
//       <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
//         <form>
          
    
//         <form data-name=registerForm>
//         <!-- Name input -->
//         <div class="form-outline mb-4">
//           <input type="text" id="registerName" class="form-control" />
//           <label class="form-label" for="registerName">Name</label>
//         </div>
  
//         <!-- Email input -->
//         <div class="form-outline mb-4">
//           <input type="email" id="registerEmail" class="form-control" />
//           <label class="form-label" for="registerEmail">Email</label>
//         </div>
  
//         <!-- Password input -->
//         <div class="form-outline mb-4">
//           <input type="password" id="registerPassword" class="form-control" />
//           <label class="form-label" for="registerPassword">Password</label>
//         </div>
  
//         <!-- Repeat Password input -->
//         <div class="form-outline mb-4">
//           <input type="password" id="registerRepeatPassword" class="form-control" />
//           <label class="form-label" for="registerRepeatPassword">Repeat password</label>
//         </div>
  
//         <!-- Checkbox -->
//         <div class="form-check d-flex justify-content-center mb-4">
//           <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
//             aria-describedby="registerCheckHelpText" />
//           <label class="form-check-label" for="registerCheck">
//             I have read and agree to the terms
//           </label>
//         </div>
  
//         <!-- Submit button -->
//         <button type="submit" id="logIn" class="btn btn-primary btn-block mb-3">Sign in</button>
//       </form>
    
//         </form>
//       </div>
      
//     <!-- Pills content -->
//     </div>
    
//     `)

//     $('#logIn').click(validate)
// }




  
bindRegister(handler,register){
  $('#register').click(function () {
    handler(register);
  })
}

bindLogin(handler,login){
  $('#login').click(function () {
    handler(login);
  })
}

bindLogout(handler){
  $('#logout').click(function () {
    handler();
    console.log('cerrar sesion');
    
  })
}
bindShowProfile(handler){
  $('#userProfile').click(function () {
    handler(this.ShowProfile);
  })
}


  showProfile(userId){
    console.log('show prof'+userId);
    $('#content').empty();
    $('#content').append(`<section class="vh-100" style="background-color: #f4f5f7;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-6 mb-4 mb-lg-0">
          <div class="card mb-3" style="border-radius: .5rem;">
            <div class="row g-0">

              <div class="col-md-8">
                <div class="card-body p-4">
                  <h6>Information</h6>
                  <hr class="mt-0 mb-4">
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Email</h6>
                      <p class="text-muted">info@example.com</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Phone</h6>
                      <p class="text-muted">123 456 789</p>
                    </div>
                  </div>
                  <h6>Projects</h6>
                  <hr class="mt-0 mb-4">
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Recent</h6>
                      <p class="text-muted">Lorem ipsum</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Most Viewed</h6>
                      <p class="text-muted">Dolor sit amet</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start">
                    <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                    <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                    <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

`)
  }



}
