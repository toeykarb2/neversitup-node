
const backtrack = (items) => {
  if (items.length < 2 ){
    return [items]
  }

  let results = [] 
  
  for (let i = 0; i < items.length; i++){
    let word = items[i]

    if (items.indexOf(word) != i){
      continue
    }
    

    let currentWord = items.slice(0, i) + items.slice(i + 1, items.length)
    
    for (let permutation of backtrack(currentWord)){
      
      results.push(word + permutation) 
      
    }
  }
  return results
}

  module.exports = {
    backtrack
  };