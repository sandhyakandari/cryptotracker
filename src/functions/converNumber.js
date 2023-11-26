
export const converNumber=(number)=> {
  const numberWithComas=number.toLocaleString();
  var arr=numberWithComas.split(",");
  if(arr.length===5){
    //Trillions
    return arr[0]+"."+arr[1].slice(0,2)+"T";
  }
  else if(arr.length===4){
    //billions
    return arr[0]+"."+arr[1].slice(0,2)+"B";
  }
  else if(arr.length===3){
    //millions
    return arr[0]+"."+arr[1].slice(0,2)+"M";
  }
  else if(arr.length===2){
    //thousands
     return arr[0]+"."+arr[1].slice(0,2)+"K";
  }
  else return number;


}

