function showProfile(userId){
    console.log(userId[0].username);
    $('#content').empty();
    $('#main').empty()
    $('#main').append(`<section class="vh-100" style="background-color: #f4f5f7;">
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
                      <p class="text-muted">${userId[0].email}.com</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>register date:</h6>
                      <p class="text-muted">${userId[0].created_at}</p>
                    </div>
                  </div>
                  <h6>Details</h6>
                  <hr class="mt-0 mb-4">
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Username</h6>
                      <p class="text-muted">${userId[0].username}</p>
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



function deleteUsers(users){
  console.dir(users)
  $('#content').empty();
  $('#main').empty()
  $('#main').empty();
    for (const u of users) {
        $('#content').append(`<div class="card" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">${u.username}</h5>
          <p class="card-text">${u.created_at}</p>
          <p class="card-text">${u.email}</p>
        </div>
        
        <div class="card-body">
        <form name="fNewOffer" role="form" id="fNewOffer"  class="container" action="http://localhost/php/delete/deleteUser.php" method="post" ">
        <input type="hidden" name="id" id="id" value="${u.id}">
        <input type="submit" class="btn btn-danger">
        <form>
        </div>
      </div>`)
    }

}



function deleteCategory(categories){

  $('#content').empty();
  $('#main').empty()
  $('#main').empty();
    for (const c of categories) {
        $('#content').append(`<div class="card" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">${c.name}</h5>
          <p class="card-text">${c.description}</p>
        </div>
        
        <div class="card-body">
        <form name="fNewOffer" role="form" id="fNewOffer"  class="container" action="http://localhost/php/delete/deleteCategory.php" method="post" ">
        <input type="hidden" name="id" id="id" value="${c.id}">
        <input type="submit" class="btn btn-danger">
        <form>
        </div>
      </div>`)
    }

}

function deleteCompanies(companies){

  $('#content').empty();
  $('#main').empty();
    for (const c of companies) {
        $('#content').append(`<div class="card" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">${c.name}</h5>
          
        </div>
        
        <div class="card-body">
        <form name="fNewOffer" role="form" id="fNewOffer"  class="container" action="http://localhost/php/delete/deleteCompany.php" method="post" ">
        <input type="hidden" name="id" id="id" value="${c.id}">
        <input type="submit" class="btn btn-danger">
        <form>
        </div>
      </div>`)
    }

}


function deleteOffers(offers){
  console.dir(offers)
  $('#content').empty();
  $('#main').empty();
  for (const offer of offers) {
    $('#content').append(`<div class="card" style="width: 18rem;">
    
    <div class="card-body">
      <h5 class="card-title">${offer.name}</h5>
      <p class="card-text">${offer.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${offer.if_category}</li>
      <li class="list-group-item">${offer.id_company}</li>
    </ul>
    <div class="card-body">
    <form name="fNewOffer" role="form" id="fNewOffer"  class="container" action="http://localhost/php/delete/deleteoffer.php" method="post" ">
    <input type="hidden" name="id" id="id" value="${offer.id}">
    <input type="submit" class="btn btn-danger">
    <form>
      
    </div>
  </div>`)
}

}






