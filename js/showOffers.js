
function showOffers(){


}


function addOffer(companies, categories) {
    console.log(companies);
    console.log(categories);
    $('#content').empty();
    $('#main').empty()
    $('#content').append(`<form name="fNewOffer" role="form" id="fNewOffer"  class="container" action="php/addOffer.php" method="post" ">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="nName">Nombre *</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="brandPrepend"><i class="bi bi-pen"></i></span>
            </div>
            <input type="text" class="form-control" id="nName" name="nName" placeholder="Nombre" aria-describedby="brandPrepend" value="" required><div id="nameFeedback"></div>

          </div>
        </div>

          <div class="col-md-6 mb-3">
          <label for="nDescription">Descripcion *</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="modelPrepend"><i class="bi bi-phone"></i></span>
            </div>
            <input type="text" class="form-control" id="nDescription" name="nDescription" placeholder="Descripcion" aria-describedby="modelPrepend" value="" required><div id="descriptionFeedback"></div>

          </div>
        </div>
      </div>
     

      <div class="col-md-6 mb-3">
      <label for="nCategory">Category *</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="modelPrepend"><i class="bi bi-list"></i></span>
        </div>
        <select id=nCategory name=nCategory>
        </select>   
        <div id="descriptionFeedback"></div>

        </div>
        </div>


    <div class="col-md-6 mb-3">
    <label for="nCompany">Company *</label>
    <div class="input-group">
    <div class="input-group-prepend">
        <span class="input-group-text" id="modelPrepend"><i class="bi bi-list"></i></span>
    </div>
    <select id=nCompany name=nCompany>

    <div id="descriptionFeedback"></div>

    </div>
    </div>
    </div>

       <input type="submit" class="btn btn-secondary"> 
        
     </form>
            

    `)

    
 for (const cat of categories) {
        $('#nCategory').append(`<option value="${cat.id}">${cat.name}</option>`)
    }

    for (const com of companies) {
        $('#nCompany').append(`<option value="${com.id}">${com.name}</option>`)
    }

        
}

function addCompany() {
    $('#content').empty();
    $('#main').empty()
    $('#content').append(`
    <form name="newCompany" role="form" id="newCompany"  class="container" method="post" action="php/addCompany.php">
      

      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="nNombre">Nombre *</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="brandPrepend"><i class="bi bi-pen"></i></span>
            </div>
            <input type="text" class="form-control" id="nNombre" name="nNombre" placeholder="Nombre" aria-describedby="brandPrepend" value="" required><div id="nameFeedback"></div>

          </div>
        </div>

          
     
      <input type="submit" class="btn btn-secondary"> 
      </form>
`)

    
}
function addCategoy() {$('#content').empty();
$('#main').empty()
$('#content').append(`<form name="fNewProduct" role="form" id="fNewProduct" class="container" method="post" action="php/addCategory.php">
  

  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="nName">Nombre *</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="brandPrepend"><i class="bi bi-pen"></i></span>
        </div>
        <input type="text" class="form-control" id="nName" name="nName" placeholder="Nombre" aria-describedby="brandPrepend" value="" required><div id="nameFeedback"></div>

      </div>
    </div>

      <div class="col-md-6 mb-3">
      <label for="npDesc">Descripcion *</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="modelPrepend"><i class="bi bi-phone"></i></span>
        </div>
        <input type="text" class="form-control" id="npDesc" name="nDesc" placeholder="Descripcion" aria-describedby="modelPrepend" value="" required><div id="descriptionFeedback"></div>

      </div>
    </div>
  </div>
 


  <input type="submit" class="btn btn-secondary"> 

  
  </form>
`)

    
}

function showOffers(offers) {
    $('#content').empty();
    $('#main').empty()
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
          <a href="#" class="btn btn-secondary" data-offer_id=${offer.id}>View Offer</a>
          
        </div>
      </div>`)
    }

}


function showCategories(categories) {
    $('#content').empty();
    $('#main').empty()

    for (const cat of categories) {
        $('#content').append(`<div class="card" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">${cat.name}</h5>
          <p class="card-text">${cat.description}</p>
        </div>
        
        <div class="card-body">
          <a href="#" class="btn btn-secondary" data-offer_id=>View Offer</a>
          
        </div>
      </div>`)
    }

}

function showCompanies(companies) {
    $('#content').empty();
    $('#main').empty()

    for (const comp of companies) {
        $('#content').append(`<div class="card" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">${comp.name}</h5>
          
        </div>
        
        <div class="card-body">
          <a href="#" class="btn btn-secondary" data-offer_id=>View Offer</a>
          
        </div>
      </div>`)
    }


}



$('#showOffers').click(function () {
  getOffersDelete(showOffers)
})

$('#showCategories').click(function () {
    getCategories(showCategories)
})

$('#showCompanies').click(function () {
    getCompanies(showCompanies)
})