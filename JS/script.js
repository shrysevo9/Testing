$(function() {

  $(document).ready(function() {

    // Build the voters chart
    Highcharts.chart('voter', {
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      title: {
        text: ''
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Percentage',
        colorByPoint: true,
        data: [{
          name: 'Men',
          y: 60
        }, {
          name: 'Women',
          y: 40
        }]
      }]
    });
    //voter chart ends
    // Build the population chart
    Highcharts.chart('population', {
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      title: {
        text: ''
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Percentage',
        colorByPoint: true,
        data: [{
          name: 'Men',
          y: 60
        }, {
          name: 'Women',
          y: 40
        }, {
          name: 'Children',
          y: 20
        }],
        innerSize: '60%'
      }]
    });
    //population chart ends

    // Build the mlahistory chart
    Highcharts.chart('mlahistory', {
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        valueSuffix: '°C'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
        name: 'New York',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
      }, {
        name: 'Berlin',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
      }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
    });
    //mlahistory chart ends

    //Maps charts
    google.charts.load('upcoming', {
      packages: ['map']
    });
    google.charts.setOnLoadCallback(drawMap);

    function drawMap() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Address');
      data.addColumn('string', 'Location');
      data.addColumn('string', 'Marker')

      data.addRows([
        ['New York City NY, United States', 'New York', 'blue'],
        ['Scranton PA, United States', 'Scranton', 'green'],
        ['Washington DC, United States', 'Washington', 'pink'],
        ['Philadelphia PA, United States', 'Philly', 'green'],
        ['Pittsburgh PA, United States', 'Pittsburgh', 'green'],
        ['Buffalo NY, United States', 'Buffalo', 'blue'],
        ['Baltimore MD, United States', 'Baltimore', 'pink'],
        ['Albany NY, United States', 'Albany', 'blue'],
        ['Allentown PA, United States', 'Allentown', 'green']
      ]);
      var url = 'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/';

      var options = {
        zoomLevel: 6,
        mapType: 'normal',
        showTooltip: true,
        showInfoWindow: true,
        useMapTypeControl: true,
        icons: {
          blue: {
            normal: url + 'Map-Marker-Ball-Azure-icon.png',
            selected: url + 'Map-Marker-Ball-Right-Azure-icon.png'
          },
          green: {
            normal: url + 'Map-Marker-Push-Pin-1-Chartreuse-icon.png',
            selected: url + 'Map-Marker-Push-Pin-1-Right-Chartreuse-icon.png'
          },
          pink: {
            normal: url + 'Map-Marker-Ball-Pink-icon.png',
            selected: url + 'Map-Marker-Ball-Right-Pink-icon.png'
          }
        }
      };
      var map = new google.visualization.Map(document.getElementById('map_div'));

      map.draw(data, options);
    }

    //Maps charts


    var dataOne = [{"id":0,"name":"Item 0","price":"0"},{"id":1,"name":"Item 1","price":"1"},{"id":2,"name":"Item 2","price":"2"},{"id":3,"name":"Item 3","price":"3"},{"id":4,"name":"Item 4","price":"4"},{"id":5,"name":"Item 5","price":"5"},{"id":6,"name":"Item 6","price":"6"},{"id":7,"name":"Item 7","price":"7"},{"id":8,"name":"Item 8","price":"8"},{"id":9,"name":"Item 9","price":"9"},{"id":10,"name":"Item 10","price":"10"},{"id":11,"name":"Item 11","price":"11"},{"id":12,"name":"Item 12","price":"12"},{"id":13,"name":"Item 13","price":"13"},{"id":14,"name":"Item 14","price":"14"},{"id":15,"name":"Item 15","price":"15"},{"id":16,"name":"Item 16","price":"16"},{"id":17,"name":"Item 17","price":"17"},{"id":18,"name":"Item 18","price":"18"},{"id":19,"name":"Item 19","price":"19"},{"id":20,"name":"Item 20","price":"20"}]
    for (var i = dataOne.length - 1; i >= 0; i--) {
      var a = '<div class="easypiechart" data-percent="'+(dataOne[i].price*5)+'" ><span class="percent">'+(dataOne[i].price*5)+'</span></div>';
      $('#tableComp').bootstrapTable('append', data());
      function data() {
        var rows = [];
        rows.push({
          id: dataOne[i].id,
          name: dataOne[i].name,
          price: a
        });
        return rows;
      }
    };
    $(function() {
    $('.easypiechart').easyPieChart({
        scaleColor: false,
        barColor: '#1ebfae'
    });
});

    var dataTwo = [{"year":2014,"name":"Lowe Torres","ward":"Slater","constituency":"Clemons","votes":3349,"party":"http://placehold.it/32x32"},{"year":2010,"name":"Hancock Hines","ward":"Shaw","constituency":"Marks","votes":1664,"party":"http://placehold.it/32x32"},{"year":2014,"name":"Oneal Pennington","ward":"Cotton","constituency":"Lott","votes":3853,"party":"http://placehold.it/32x32"},{"year":2014,"name":"Neal Johnson","ward":"Russell","constituency":"Burns","votes":2936,"party":"http://placehold.it/32x32"},{"year":2015,"name":"Finch Herman","ward":"Hendricks","constituency":"Lyons","votes":3434,"party":"http://placehold.it/32x32"},{"year":2016,"name":"Tanisha Contreras","ward":"Rodriguez","constituency":"Pearson","votes":1292,"party":"http://placehold.it/32x32"}]

    for (var i = dataTwo.length - 1; i >= 0; i--) {
      $('#tableMLA').bootstrapTable('append', data());
      function data() {
        var rows = [];
        var img = '<img src="'+dataTwo[i].party+'">';
        rows.push({
          year: dataTwo[i].year,
          name: dataTwo[i].name,
          ward: dataTwo[i].ward,
          constituency: dataTwo[i].constituency,
          votes: dataTwo[i].votes,
          party: img
        });
        return rows;
      }
      ;
    };

  });
});

