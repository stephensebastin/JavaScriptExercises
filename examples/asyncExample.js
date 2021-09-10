var one= () => {
    return "one";
  }
  
  var two = () =>{
     /*setTimeout(function() {
      return  "two";
    }, 3000);*/
    return new Promise((resolve, reject) => {
        setTimeout(function() {
      resolve( "two");
    }, 2000);
    });
  }
  var three= () => {
    return "three";
  }
  
  
  /*var two1 = await two(); //error await is only valid in async function
  console.log(two1);*/
  const call =async ()=> {
    
    let oneC = one();
    console.log(oneC);
    
  let twoC = await two();
  console.log(twoC); //if await not used it will be Promise pending
  /*twoC.catch(function(){
    console.log("Catching error");  
  });*/
  /*twoC.then(function(data){
    console.log("Then ::" +data);
  }); */

  let threeC = three();
  console.log("three");
    
  }  
  call();



  //Example 2::

  function getUserDetails(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get the user from the database.');
        setTimeout(() => {
            resolve({
                id: userId,
                username: 'Sam',
                plan:'premium'
            });
        }, 1000);
    })
}

function getPincodes(city) {
    return new Promise((resolve, reject) => {
        console.log(`Get pincodes for ${city} from the Maps API.`);
        setTimeout(() => {
            resolve([600025, 600026, 600023,600024]);
        }, 2 * 1000);
    });
}


function calculateDeliveryCharge(userDetails,pincodes) {
  var basicCost;
  if(userDetails.plan =="premium" ){
    basicCost =20;
  } else{
    basicCost =50
  }
  
    return new Promise((resolve, reject) => {
        console.log(`Calculate the delievery charge for ${pincodes}.`);
        setTimeout(() => {
          if(pincodes.includes(600023) ){
            resolve({userId:userDetails.id,pincode:600023, cost: basicCost*1.25});
          } else if(pincodes.includes(600024) ){
            resolve({userId:userDetails.id,pincode:600024, cost: basicCost*1.35});
          } else if(pincodes.includes(600025) ){
            resolve({userId:userDetails.id,pincode:600025, cost: basicCost*1.50});
          } else if(pincodes.includes(600026) ){
            resolve({userId:userDetails.id,pincode:600026, cost: basicCost*1.75});
          }

        }, 2 * 1000);
    });
}

/*function showDeliveryCharge(userId,city) {  
var userInfo = getUserDetails(userId);
console.log(userInfo);

var pincodes = getPincodes(city);
console.log(pincodes);

console.log(calculateDeliveryCharge(userInfo,pincodes));
}

*/
async function showDeliveryCharge(userId,city) {  
var userInfo = await getUserDetails(userId);
console.log(userInfo);

var pincodes =await getPincodes(city);
console.log(pincodes);

console.log( await calculateDeliveryCharge(userInfo,pincodes));
}


showDeliveryCharge(101,"Chennai")
