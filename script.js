anychart.onDocumentReady(function() {
  anychart.data.loadCsvFile('sg-data.csv', function (data) {

      var year = '2000';
      var age_group = '10_to_14';

      var northEasternIsle_resident_count = 0;
      var southWest_resident_count = 0;
      var jurongIsland_resident_count = 0;
      var centralSingapore_resident_count = 0;
      var northWest_resident_count = 0;
      var northEast_resident_count = 0;
      var southEast_resident_count = 0;

      // Singapore areas divided into 7 locations
      var northEasternIsle = ['North-Eastern Islands']

      var southWest = ['BoonLay/Pioneer', 'Bukit Merah', 'Choa Chu Kang', 'Jurong East', 'Tengah', 'Tuas', 'Western Water Catchment', 'Bukit Batok', 'Bukit Panjang', 'Clementi', 'Jurong West', 'Queenstown', 'Southern Islands', 'Bukit Timah', 'Lim Chu Kang', 'Sungei Kadut']

      var jurongIsland = ['Western Islands']

      var centralSingapore = ['Bishan', 'Hougang', 'Downtown Core', 'Marina East', 'Marina South', 'Marine Parade', 'Museum', 'Novena', 'Orchard', 'River Valley', 'Rochor', 'Singapore River', 'Straits View', 'Tanglin', 'Toa Payoh', 'Kallang', 'Newton', 'Seletar', 'Serangoon', 'Outram']

      var northWest = ['Mandai', 'Sembawang', 'Simpang', 'Woodlands', 'Yishun', 'Ang Mo Kio', 'Central Water Catchment']

      var northEast = ['Punggol', 'Sengkang', 'Pasir Ris']

      var southEast = ['Changi Bay', 'Paya Lebar', 'Bedok', 'Geylang', 'Changi', 'Tampines']


      var dataSet = anychart.data.set(data, {ignoreFirstRow: true, columnSeparator: ",", rowsSeparator: "\r\n"});

      dataSet.lc.splice(4500,dataSet.lc.length);

      // // Loop through the data
      dataSet.lc.forEach(function (item, index) {
        console.dir(dataSet.lc[index]);
        // console.log(index);
        if (northEasternIsle.includes(dataSet.lc[index][0]) && dataSet.lc[index][5] == year && dataSet.lc[index][2] == age_group){
          // console.log(dataSet.lc[index][4]);
          northEasternIsle_resident_count += Number(dataSet.lc[index][4]);
        }
        else if (southWest.includes(dataSet.lc[index][0]) && dataSet.lc[index][5] == year && dataSet.lc[index][2] == age_group){
          // console.log(dataSet.lc[index][4]);
          southWest_resident_count += Number(dataSet.lc[index][4]);
        }
        else if (jurongIsland.includes(dataSet.lc[index][0]) && dataSet.lc[index][5] == year && dataSet.lc[index][2] == age_group){
          // console.log(dataSet.lc[index][4]);
          jurongIsland_resident_count += Number(dataSet.lc[index][4]);
        }
        else if (centralSingapore.includes(dataSet.lc[index][0]) && dataSet.lc[index][5] == year && dataSet.lc[index][2] == age_group){
          // console.log(dataSet.lc[index][4]);
          centralSingapore_resident_count += Number(dataSet.lc[index][4]);
        }
        else if (northWest.includes(dataSet.lc[index][0]) && dataSet.lc[index][5] == year && dataSet.lc[index][2] == age_group){
          // console.log(dataSet.lc[index][4]);
          northWest_resident_count += Number(dataSet.lc[index][4]);
        }
        else if (northEast.includes(dataSet.lc[index][0]) && dataSet.lc[index][5] == year && dataSet.lc[index][2] == age_group){
          // console.log(dataSet.lc[index][4]);
          northEast_resident_count += Number(dataSet.lc[index][4]);
        }
        else if (southEast.includes(dataSet.lc[index][0]) && dataSet.lc[index][5] == year && dataSet.lc[index][2] == age_group){
          // console.log(dataSet.lc[index][4]);
          southEast_resident_count += Number(dataSet.lc[index][4]);
        }
        
      })

      var map = anychart.map();

      dataSet.append({id: '0', value: northEasternIsle_resident_count});
      dataSet.append({id: 'SG.SW', value: southWest_resident_count});
      dataSet.append({id: 'SG.JI', value: jurongIsland_resident_count});
      dataSet.append({id: 'SG.CS', value: centralSingapore_resident_count});
      dataSet.append({id: 'SG.NW', value: northWest_resident_count});
      dataSet.append({id: 'SG.NE', value: northEast_resident_count});
      dataSet.append({id: 'SG.SE', value: southEast_resident_count});


      series = map.choropleth(dataSet);


      map.title().useHtml(true).hAlign('center');
      map.title('<span style="font-size: 18px;">Singapore Resident Count </span><br><span style="font-size:12px;">Children Ages 10 to 14 y.o by Region in the year 2000</span>');

      series.labels(true);
      labels = series.labels();

      labels.fontColor('black');
      labels.fontSize("9px");
      labels.offsetX(-12);

      series.geoIdField('id');

       series.colorScale(anychart.scales.linearColor('#FFFF63', '#DDB830'));
      series.hovered().fill('#C1CAD6');


      var colorRange = map.colorRange();
      colorRange.enabled(true);

      colorRange.orientation('right');

      colorRange.length(100);

      map.geoData(anychart.maps['singapore']);

      map.container('container');

      map.draw();




      

      
  });

 
});

function update_text(){
  var user_text = document.getElementById("user_text");
  var conclusion_text = document.getElementById("conclusion_text");
  conclusion_text.innerHTML = user_text.value;
}