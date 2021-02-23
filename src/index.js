module.exports = function toReadable(number) {
    if (number == 0) return "zero";
    let d1_19 = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let d20_90 = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let i = number.toString();
    let result = '';
    if (number >= 100) {
        result += d1_19[i[0]] + " hundred ";
        i = i.substring(1);
        number = Number(i);
    }
    if (number <= 19) result += d1_19[number];
    if (number >= 20) result += d20_90[i[0]] + ' ' + d1_19[i[1]];
    return result.trim();
};
