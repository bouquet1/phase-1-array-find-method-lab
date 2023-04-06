// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//   ]
//will write a function to check the year the win occured. 
//It needs to search through the array and find that year

/* function superbowlWin(record) {
    for(let item of record){
        if(item.result === "W" ){
            return item.year
        }
    }
}*/
// yukardaki functionda dedikki: superbowl func da record adli parametreyi al (yani parametremiz array), for of ile array icindeki her item i karsilastir, eger item daki result value su 'W' ile eslesiyorsa, item daki year valuesunu return yap.


const superbowlWin = (record) => {
    let singleRecord = record.find(item => item.result === "W")
    if (singleRecord === undefined){
        return undefined
    } else {
        return singleRecord.year
    };
}






// // function to find the year
// const superbowlWin = record.find(function(record) {
//     return record.result === "W"
//   })
  


