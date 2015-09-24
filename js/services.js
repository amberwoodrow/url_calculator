app.factory('CalcUrlService', function() {

  var CalcUrlService = {};

  CalcUrlService.getAns = function(param1, param2, operator) {  
    switch(operator) {
      case 'add':
        return param1 + param2;
      case 'divide':
        return param1 / param2;
      case 'multiply':
        return param1 * param2;
      case 'subtract':
        return param1 - param2;
      case 'modulus':
        return param1 % param2;
      default:
        return "Your operator is no good";
    }
  };

  return CalcUrlService;

});


function boolean(routeParams) { 
  console.log(routeParams); 
  if (Object.getOwnPropertyNames(routeParams).length === 0 || Object.getOwnPropertyNames(routeParams).length === 1 || Object.getOwnPropertyNames(routeParams).length === 2) {
    return false;
  }
  else {
    return true;
  }
}


app.factory('basedOnUrlService', function() {

  var basedOnUrlService = {};

  basedOnUrlService.getThings = function(param1, param2, operator, routeParams) {
    console.log(param2);

    if (param1 === undefined) {
      return false;
    }
    else if (param2 === undefined || param2 === true || param2 === "") {
      return false;
    }
    else if ((operator.match(/^add$|^subtract$|^multiply$|^divide$|^modulus$/)) &&
        (param1.match(/^-?\d*(\.\d+)?$/)) && 
        (param2.match(/^-?\d*(\.\d+)?$/))
       )
    {
      return boolean(routeParams);
    }
    else {
      return false;
    }

  };

  return basedOnUrlService;

});


