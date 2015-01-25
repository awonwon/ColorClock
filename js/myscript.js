$(function(){
  display();

  setInterval(function(){
    display();
  },1000);

});

function display(){
  var d = new Date($.now()); // d = new Date();
  var h = format_digit(d.getHours(),'00');
  var m = format_digit(d.getMinutes(),'00');
  var s = format_digit(d.getSeconds(),'00');

  $('#time').html(
    String.format('{0}:{1}:{2}',h,m,s)
  );

  var bg = String.format('#{0}{1}{2}',h,m,s);
  var color = String.format('#{0}{1}{2}',
                            (255-h).toString(16),
                            (255-m).toString(16),
                            (255-s).toString(16));

  $('body').css('backgroundColor',bg);
  $('body').css('color',color);
}

function format_digit (obj,format) {
  var digit = format.length - obj.toString().length;
  if(digit==0){return obj;}

  return format.substring(0,digit).concat(obj);
}

String.format = function(){
  if(arguments.length==0)return null;
  var str=arguments[0];

  for(var i=0; i<arguments.length-1; i++){
    var rex = new RegExp('\\{' + i + '\\}', 'gm');
    str = str.replace(rex, arguments[i+1]);
  }
  return str;

};
/*
setTimeout : only exe once

setInterval : loop
EX. setInterval(function(){ alert("Hello"); }, 3000);
*/

/*
  RegExp(reg,modifier)
  modifier has:
  i:case sensitive
  g:find all matches rather than stopping after the first match
  m:perform multiline matching

  {}左右大括弧是跳脫字元，所以想當正常字時需要加上\\
  Ex. 要印出 "\{" ，但是 "\" 也是跳脫字元，所以顯示為"\\"
*/
