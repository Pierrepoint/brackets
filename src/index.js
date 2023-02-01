  function check(str, bracketsConfig) {
    let arr = Array.from(str);
    let lengthBefore;
    let lengthAfter;
    let i = 0;
    function analisys(bracketsConfig){
        bracketsConfig.forEach(element => {
            if ((arr[i] == element[0]) && (arr[i + 1] == element[1])){
                if(arr.length == 2){arr = []}
                else{arr = arr.slice(0,i).concat(arr.slice(i+2))}; 
              i = 0;
              lengthAfter = arr.length;
            };
          })
    };

    if(arr.length % 2 != 0){return false}
    else{
    while ( i <= arr.length - 2){
      lengthBefore = arr.length;
      analisys(bracketsConfig);
      if(lengthAfter < lengthBefore){i = 0}
        if(arr.length == 2){analisys(bracketsConfig)};
      if(arr.length == 0){return true}
      else if((arr.length != 0) && (i == arr.length - 2)){return false}
      else i++;
    }
  }
}
module.exports = check;