// Code goes here

function Calc (shots, BS, str){
   var outcomes;
   outcomes = CalcSuccessRate(shots, BS);
   return outcomes;
}

function CalcSuccessRate(shots, BS){
  var binomial;
  var suc;
  var fail;
  var odds = 0;
  var retarray = [];

  for(var i = 0; i <=shots; i++){
    binomial = factoral(shots) / (factoral(i)*factoral(shots-i));
    suc = Math.pow(BS/6, i);
    fail = Math.pow((6-BS)/6, shots-i);
    //console.log("HITS: "+binomial);
    //console.log("SUC: "+suc);
    //console.log("FAIL: "+fail);
    odds = binomial*suc*fail;
    retarray[i] = odds
  }
  return retarray;
}

function factoral(x){
  var ret = x;
  for(var i = x-1; i>0;i--){
    var ret = ret * i;
  }
  if(ret==0)ret=1;
  return ret;
}

function CalcDamage(hitOdds, DM_Roll){
  var FinalArray=[];
  var binomial;
  var suc;
  var fail;
  var odds;
  //console.log(hitOdds.length);
  
  for(var k = 0; k<hitOdds.length; k++){
    FinalArray[k] = 0;
  }

  for(var j = 0; j < hitOdds.length; j++){ 
    for(var i = 0; i <=j; i++){
      binomial = factoral(j) / (factoral(i)*factoral(j-i));
      suc = Math.pow(DM_Roll/6, i);
      fail = Math.pow((6-DM_Roll)/6, j-i);
      odds = binomial*suc*fail;

      FinalArray[i] = FinalArray[i] + (odds*hitOdds[j]);
    }
  }
  //for(var k = 0; k<FinalArray.length; k++){
    //console.log(FinalArray[k]);
  //}
  return FinalArray;
}
