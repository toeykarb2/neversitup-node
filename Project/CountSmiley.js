const CountSmiley = (items) => {
    let count = 0;
    
    items.forEach(ele => {
        const isEye = (ele[0] === ":" || ele[0] === ";");
        const isSmileyWithOutNose = ele.length === 2;
        const isSmileyWithNose = ele.length === 3;
        if(isSmileyWithOutNose){
            const isMouth = (ele[1] === ")" || ele[1] === "D");
           
            if(isEye && isMouth ){
                count++;
            }
        }else if(isSmileyWithNose){
            const isNose = (ele[1] === "-" || ele[1] === "~");
            const isMouth = (ele[2] === ")" || ele[2] === "D");

            if(isMouth && isNose && isMouth ){
                count++;
            }

        }else{
            console.log('Not match any condition')
        }
    });
   
    return count;
}

  module.exports = {
    CountSmiley
  };