function ChartOnLoad(){

  var J=json_load("http://api.fairplayground.info/rawdata/LN_map_data.json","json");

  var K=[];
  J.forEach(
    function( v,i ){
      K.push( [ v.properties.establishing_assembly, i ] );
    }
  );

  var L="";

  K.sort().reverse();

  K.forEach(
    function( v,i ){
      L+= J[ v[1] ].properties.name + " " + J[ v[1] ].properties.establishing_assembly.slice(0,7) + "<br>";
    }
  );


  $($(".row:last-child .col")[0]).html( L );

}
