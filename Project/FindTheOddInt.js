const findTheOddInt = (items) => {
    
    if(items.length <= 1)return items[0];
    const getUnique = Array.from(new Set(items));
   
    for(let i=0;i<getUnique.length;i++){
        let counter =0;
        items.map(x =>{
            if(x == getUnique[i]){
                counter++;
            }
        })
        
        if(counter % 2 !== 0){
            return getUnique[i]
        }
        
    }

}

  module.exports = {
    findTheOddInt
  };