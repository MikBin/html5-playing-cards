$(document).ready(function() {


  let spades = createCardDomElements("spades", $,true);
  let diams  =createCardDomElements("diams", $,true);
  let hearts = createCardDomElements("hearts", $,true);
  let clubs=createCardDomElements("clubs", $,true);
  let deck = [...spades,...diams,...hearts,...clubs];
  let jandb =getJokerAndBackFace($);
  jandb.forEach(C=>C.css({
    width:"15.7vh",
    height:"22vh",
    "fontSize":"0.4vmin",
    float:"left"
  }));
//style="width:15.7vh; height:22vh; font-size:0.4vmin; float:left"
  let $fulldecks = $(".fulldeck");
let $d0 = $($fulldecks[0]);
spades.forEach($s=>$d0.append($s));
  let $d1 = $($fulldecks[1]);
  diams.forEach($s=>$d1.append($s));
let $d2 = $($fulldecks[2]);
hearts.forEach($s=>$d2.append($s));
let $d3 = $($fulldecks[3]);
clubs.forEach($s=>$d3.append($s));
jandb.forEach((j)=>{
  $("body").append(j);
})
});
