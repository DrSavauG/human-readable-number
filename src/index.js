module.exports = 
function toReadable (number) {
    if(number == 0) return 'zero';
    let d1_19 = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let d20_90 = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let result = '';
    let i = number.toString();
    if(number>=100){
        result += d1_19[i[0]]+' hundred ';
        number = Number(i.substring(1));
        i = number.toString()
        console.log('number =', number);
    }
    if(number<=19) result += d1_19[number];
    console.log(number>=20);
    if(number>=20) {
        console.log(i);
        result += d20_90[i[0]]+' '+d1_19[i[1]]
    }
    


return result.trim()
};
// console.log('toReadable(123) =', toReadable(123));
