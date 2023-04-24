
function ConvertNumberToWord(num) {
    const under_20 = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
  const tens = ['Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
  const above_100 = {100: 'Hundred', 1000: 'Thousand', 100000: 'Lakhs', 10000000: 'Crores'};

  if (num < 20) {
    return under_20[num];
  }

  if (num < 100) {
    return tens[Math.floor(num/10)-2] + (num%10===0 ? '' : ' ' + under_20[num%10]);
  }

  const pivot = Math.max(...Object.keys(above_100).filter(key => key <= num));

  return ConvertNumberToWord(Math.floor(num/pivot)) + ' ' + above_100[pivot] + (num%pivot===0 ? '' : ' ' + ConvertNumberToWord(num%pivot));
  }
  
  module.exports = ConvertNumberToWord;