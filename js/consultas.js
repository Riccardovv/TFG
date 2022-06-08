function getOffers(handler) {
  let comps=[];
  let cats=[];
  fetch('http://localhost/php/getCompanies.php', {
        method: 'get',
        }).then(function(response) {  
          return response.json();
        }).then(function (companies) {
          comps.push(companies)
          fetch('http://localhost/php/getCategories.php', {
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
    fetch('http://localhost/php/getCategories.php', {
        method: 'get',
        }).then(function(response) {  
        return response.json();
        }).then(function (data) {
            handler(data);
        })
}


function getCompanies(handler) {
    fetch('http://localhost/php/getCompanies.php', {
        method: 'get',
        }).then(function(response) {  
        return response.json();
        }).then(function (data) {
            handler(data);
        })
}


function getUsers(handler) {
    fetch('http://localhost/php/getUsers.php', {
        method: 'get',
        }).then(function(response) {  
        return response.json();
        }).then(function (data) {
            handler(data);
        })
}

function getOffersDelete(handler) {
    fetch('http://localhost/php/loadOffers.php', {
        method: 'get',
        }).then(function(response) {  
        return response.json();
        }).then(function (data) {
            handler(data);
        })
}


