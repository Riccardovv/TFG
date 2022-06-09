document.onload=function () {
    console.log('load');
    getProfile(init);
}


function init(user) {
    console.log('init');
    console.log(user);
    
      $('#loginbtn').hide();
        if (user[0].id==1) {
            adminMenu()
            logOut();
        }else{
          logOut();
        }
        $('#content').empty();
    

}



  window.addEventListener("load", function(event) {
    getProfile(init);
  });


function getProfile(handler){
        
    fetch('php/getSessionId.php', {
        method: 'get',
        }).then(function(response) {  
        return response.json();
        }).then(function (data) {
            handler(data);
        })
        
}

$('#userProfile').click(function () {
    getProfile(showProfile);
})



function adminMenu(){
    console.log('admin');
    
    $('#tools').append(`<li class="nav-item dropdown">
    
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="add" role="button" data-bs-toggle="dropdown"
      aria-expanded="false">
      Add
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="#" id="addOffer">Offer</a></li>
      <li><a class="dropdown-item" href="#" id="addCompany">Company</a></li>
      <li><a class="dropdown-item" href="#" id="addCategoy">Category</a></li>
    </ul>
    
    </li>


    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="add" role="button" data-bs-toggle="dropdown"
      aria-expanded="false">
      Delete
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="#" id="deleteOffer">Offer</a></li>
      <li><a class="dropdown-item" href="#" id="deleteCompany">Company</a></li>
      <li><a class="dropdown-item" href="#" id="deleteCategoy">Category</a></li>
      <li><a class="dropdown-item" href="#" id="deleteUser">User</a></li>
    </ul>
    
    </li>
    
    `)




    $('#deleteOffer').click(function () {
      getOffersDelete(deleteOffers);
      
    })
    $('#deleteCompany').click(function () {
      getCompanies(deleteCompanies)
      
    })
    $('#deleteCategoy').click(function () {
      getCategories(deleteCategory);
      
    })
    $('#deleteUser').click(function () {
      getUsers(deleteUsers)
    })





    $('#addOffer').click(function () {
      getOffers(addOffer);
      
    })
    $('#addCompany').click(function () {
      addCompany();
      
    })
    $('#addCategoy').click(function () {
      addCategoy();
      
    })


}

function logOut() {
  console.log('btn');
  $('#tools').append(`<button type="button" id="logOut" class="btn btn-danger">Cerrar Sesion</button>`)
  $('#logOut').click(function () {
    console.log('logout');
    window.location.href='./php/logout.php';
  })
}





