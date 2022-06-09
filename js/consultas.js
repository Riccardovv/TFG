function getOffers(handler) {
  let comps=[];
  let cats=[];
  fetch('/php/getCompanies.php', {
        method: 'get',
        }).then(function(response) {  
          return response.json();
        }).then(function (companies) {
          comps.push(companies)
          fetch('php/getCategories.php', {
            method: 'get',
            }).then(function(response) {
              return response.json()
            }).then(function(data) {
              handler(companies, data)
              cats.push(data)
            })
        })
        
  
}


function getCategories(handler) {
    fetch('php/getCategories.php', {
        method: 'get',
        }).then(function(response) {  
        return response.json();
        }).then(function (data) {
            handler(data);
        })
}


function getCompanies(handler) {
    fetch('php/getCompanies.php', {
        method: 'get',
        }).then(function(response) {  
        return response.json();
        }).then(function (data) {
            handler(data);
        })
}


function getUsers(handler) {
    fetch('php/getUsers.php', {
        method: 'get',
        }).then(function(response) {  
        return response.json();
        }).then(function (data) {
            handler(data);
        })
}

function getOffersDelete(handler) {
    fetch('/php/loadOffers.php', {
        method: 'get',
        }).then(function(response) {  
        return response.json();
        }).then(function (data) {
            handler(data);
        })
}


