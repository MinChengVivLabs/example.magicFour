// REV 1.01

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords9 (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
    return str.substring(0, str.length-1);
}

function inWords5 (num) {
  if ((num = num.toString()).length > 5) return 'overflow';
  n = ('00000' + num).substr(-5).match(/^(\d{2})(\d{1})(\d{2})$/)
  if (!n) return 'undefined';
  var str = ''
  str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'thousand ' : ''
  str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'hundred ' : ''
  str += (n[3] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) : ''
  return str.substring(0, str.length-1);
}

var steps = []

var firstflag = false

function NextStep(str_number) {
  if (str_number=='four') {
    steps.push('Magic FOUR!')
    return;
  }
  else {
    if (firstflag) {
      next_number = inWords5(23456)
      firstflag = false
    }
    else
      next_number = inWords5(str_number.length)
    steps.push(str_number + ' becomes ' + next_number + '. ')
    return NextStep(next_number);
  }
}

module.exports.function = function magicFour (str_number) {
  if (!str_number)
    return  'Sorry, I need more training.'
  if (str_number == 'zero')
    return [];
  NextStep(str_number)
  var rslt_name = ''
  for (var i=0; i<steps.length; i++) {
    rslt_name += steps[i]
  }
  var rslt_list = []
  for (var i=0; i<steps.length; i++) {
    rslt_list.push((i+1)+'. '+steps[i])
  }
  return rslt_list
}
