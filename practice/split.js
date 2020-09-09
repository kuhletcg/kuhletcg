//split by value

function splitByValue(k, e){
      let left = e.filter(v=>v<k);
      let right = e.filter(v=>v>=k);
      return [...left,...right]
}