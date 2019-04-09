// map
google.load("maps", "3.x", {"other_params":"sensor=false"});

function initialize() {
  var myLatLng = new google.maps.LatLng(34.393123, 132.464363); //マップの中心座標
  var myOptions = {
  zoom: 16, //ズームレベル
  center: myLatLng,
  scrollwheel: false,
  draggable: true,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  mapTypeControlOptions: {
  mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'style']
  }
  };
  map = new google.maps.Map(document.getElementById("map"), myOptions);
  new google.maps.Marker({
  position: new google.maps.LatLng(34.393123, 132.464363), //アイコンの中心座標
  map: map,
  icon:"images/pin.gif" //アイコン画像
  });
  var mapstyle = 
  //ここからJSON情報貼り付け
  [
  {
  featureType: "all",
  elementType: "all",
  },{
  featureType: "all",
  elementType: "labels",
  stylers:[
  { visibility: "on" }
  ] 
  },{
  featureType: "administrative",
  elementType: "all",
  stylers: [
  { visibility: "off" }
  ] 
  },{
  featureType: "landscape",
  elementType: "all",
  stylers: [
  { visibility: "on" }
  ] 
  },{
  featureType: "transit",
  elementType: "all",
  stylers: [
  { visibility: "on" }
  ] 
  }
  ]
  //ここまで
  ;
  
  var myOptions = {
  name: "OLIO LUCCA" //今回のスタイル名(地図右上に表示される名前)
  };
  
  var mapType = new google.maps.StyledMapType(mapstyle, myOptions);
  map.mapTypes.set('style', mapType);
  map.setMapTypeId('style');
  }
  google.setOnLoadCallback(initialize);