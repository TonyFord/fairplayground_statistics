function ChartOnLoad(){

  var J=json_load("http://api.fairplayground.info/rawdata/tx_by_day.json","json");

  var highest_date="";
  var highest_count=0;
  var highest_avg_date="";
  var highest_avg_count=0;
  var t="";

  J.forEach(
    function(v,i){
      if( v.tx_count_ex > highest_count ){
        highest_count = v.tx_count_ex;
        highest_date = v.date;
      }
      if( v.tx_count_ex_avg > highest_avg_count ){
        highest_avg_count = v.tx_count_ex_avg;
        highest_avg_date = v.date;
      }
    }
  );

  t+="<br><br>";
  t+="last tx count: <b>" + J[J.length-1].tx_count_ex + "</b> (" + J[J.length-1].date + ")<br><br>"
  t+="highest tx count: <b>" + highest_count + "</b> (" + highest_date + ")<br><br>";
  t+="highest avg tx count: <b>" + highest_avg_count + "</b> (" + highest_avg_date + ")";

  $($(".row:last-child .col")[0]).html( t );

}
