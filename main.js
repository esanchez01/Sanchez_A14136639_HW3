// JSON file name
const JSONFileName = 'assets/springfield.json';

// Area chart
chart1 = Highcharts.chart('first-left', {
    chart: {
        type: 'area',
        width: 1000,
        height: 365,
        backgroundColor: 'transparent'
    },

    title: {
        text: '<span style="font-weight:bold">Generation & Utilization</span> MW',
        align: 'left',
        style: {
            fontSize: '20px'
        }
    },

    legend: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e %b',
            hour: "%I %p"
        },
        crosshair: true,
        events: {
            setExtremes: syncExtremes
        }
    },

    yAxis: {
        min: -1000,
        max: 10000,
        tickAmount: 12,
        title: {
            text: ''
        }
    },

    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            },
            states: {
                inactive: {
                    opacity: 1
                }
            }
        },
        series: {
            states: {
                hover: {
                    enabled: false
                }
            },
            series: {
                stickyTracking: true
            }
        }
    },

    tooltip: {
        positioner: function () {
            return {
                x: this.chart.chartWidth - this.label.width,
                y: 10
            };
        },
        formatter: function() {

            // Handles events in the document

            if (document.getElementById('solar-av').innerHTML === '$49.82') {
                document.getElementById('total-power').innerHTML = '1165';

                document.getElementById('solar-value').innerHTML = '82';
                document.getElementById('solar-percent').innerHTML = '7.1%';
                document.getElementsByClassName('source-colors yellow bar')[0].style.width = '7.1px';
                document.getElementsByClassName('solar-bar-percent')[0].innerHTML = '7.1%';
    
                document.getElementById('wind-value').innerHTML = '81';
                document.getElementById('wind-percent').innerHTML = '7.0%';
                document.getElementsByClassName('source-colors green bar')[0].style.width = '7px';
                document.getElementsByClassName('wind-bar-percent')[0].innerHTML = '7%';
    
                document.getElementById('hydro-value').innerHTML = '60';
                document.getElementById('hydro-percent').innerHTML = '5.1%';
                document.getElementsByClassName('source-colors steelblue bar')[0].style.width = '5.1px';
                document.getElementsByClassName('hydro-bar-percent')[0].innerHTML = '5%';
    
                document.getElementById('gas-value').innerHTML = '65';
                document.getElementById('gas-percent').innerHTML = '5.6%';
                document.getElementsByClassName('source-colors sandybrown bar')[0].style.width = '5.6px';
                document.getElementsByClassName('gas-bar-percent')[0].innerHTML = '5.6%';
    
                document.getElementById('distillate-value').innerHTML = '0.02';
                document.getElementById('distillate-percent').innerHTML = '0.002%';
                document.getElementsByClassName('source-colors red bar')[0].style.width = '.002px';
                document.getElementsByClassName('distillate-bar-percent')[0].innerHTML = '.002%';
    
                document.getElementById('coal-value').innerHTML = '891';
                document.getElementById('coal-percent').innerHTML = '76.5%';
                document.getElementsByClassName('source-colors black bar')[0].style.width = '76.5px';
                document.getElementsByClassName('coal-bar-percent')[0].innerHTML = '76.5%';
    
                document.getElementById('export-value').innerHTML = '-2';
                document.getElementById('export-percent').innerHTML = '-0.2%';
    
                document.getElementById('pump-value').innerHTML = '-12';
                document.getElementById('pump-percent').innerHTML = '-1.0%';
    
                document.getElementById('load-value').innerHTML = '-15';
                document.getElementById('renewables-percent').innerHTML = '19.2%';
                document.getElementById('sources-value').innerHTML = '1179';
    
                document.getElementById('table-date').innerHTML =  '20 Oct, 7:00AM - 27 Oct, 6:30AM';
                updateData()
                
            } else {
                document.getElementById('total-power').innerHTML = this.total.toFixed(0);

                document.getElementById('solar-value').innerHTML = this.series.chart.series[0].processedYData[this.point.index].toFixed(0);
                document.getElementById('solar-percent').innerHTML = ((this.series.chart.series[0].processedYData[this.point.index]/this.total)*100).toFixed(1)+'%';
                document.getElementsByClassName('source-colors yellow bar')[0].style.width = ((this.series.chart.series[0].processedYData[this.point.index]/this.total)*100).toFixed(1) + 'px';
                document.getElementsByClassName('solar-bar-percent')[0].innerHTML = ((this.series.chart.series[0].processedYData[this.point.index]/this.total)*100).toFixed(1)+'%';
    
                document.getElementById('wind-value').innerHTML = this.series.chart.series[1].processedYData[this.point.index].toFixed(0);
                document.getElementById('wind-percent').innerHTML = ((this.series.chart.series[1].processedYData[this.point.index]/this.total)*100).toFixed(1)+'%';
                document.getElementsByClassName('source-colors green bar')[0].style.width = ((this.series.chart.series[1].processedYData[this.point.index]/this.total)*100).toFixed(1) + 'px';
                document.getElementsByClassName('wind-bar-percent')[0].innerHTML = ((this.series.chart.series[1].processedYData[this.point.index]/this.total)*100).toFixed(1)+'%';
    
                document.getElementById('hydro-value').innerHTML = this.series.chart.series[2].processedYData[this.point.index].toFixed(0);
                document.getElementById('hydro-percent').innerHTML = ((this.series.chart.series[2].processedYData[this.point.index]/this.total)*100).toFixed(1)+'%';
                document.getElementsByClassName('source-colors steelblue bar')[0].style.width = ((this.series.chart.series[2].processedYData[this.point.index]/this.total)*100).toFixed(1) + 'px';
                document.getElementsByClassName('hydro-bar-percent')[0].innerHTML = ((this.series.chart.series[2].processedYData[this.point.index]/this.total)*100).toFixed(1)+'%';
    
                document.getElementById('gas-value').innerHTML = this.series.chart.series[3].processedYData[this.point.index].toFixed(0);
                document.getElementById('gas-percent').innerHTML = ((this.series.chart.series[3].processedYData[this.point.index]/this.total)*100).toFixed(1)+'%';
                document.getElementsByClassName('source-colors sandybrown bar')[0].style.width = ((this.series.chart.series[3].processedYData[this.point.index]/this.total)*100).toFixed(1) + 'px';
                document.getElementsByClassName('gas-bar-percent')[0].innerHTML = ((this.series.chart.series[3].processedYData[this.point.index]/this.total)*100).toFixed(1)+'%';
    
                document.getElementById('distillate-value').innerHTML = this.series.chart.series[4].processedYData[this.point.index].toFixed(2);
                document.getElementById('distillate-percent').innerHTML = ((this.series.chart.series[4].processedYData[this.point.index]/this.total)*100).toFixed(4)+'%';
                document.getElementsByClassName('source-colors red bar')[0].style.width = ((this.series.chart.series[4].processedYData[this.point.index]/this.total)*100).toFixed(1) + 'px';
                document.getElementsByClassName('distillate-bar-percent')[0].innerHTML = ((this.series.chart.series[4].processedYData[this.point.index]/this.total)*100).toFixed(4)+'%';
    
                document.getElementById('coal-value').innerHTML = this.series.chart.series[5].processedYData[this.point.index].toFixed(0);
                document.getElementById('coal-percent').innerHTML = ((this.series.chart.series[5].processedYData[this.point.index]/this.total)*100).toFixed(1)+'%';
                document.getElementsByClassName('source-colors black bar')[0].style.width = ((this.series.chart.series[5].processedYData[this.point.index]/this.total)*100).toFixed(1) + 'px';
                document.getElementsByClassName('coal-bar-percent')[0].innerHTML = ((this.series.chart.series[5].processedYData[this.point.index]/this.total)*100).toFixed(1)+'%';
    
                document.getElementById('export-value').innerHTML = this.series.chart.series[6].processedYData[this.point.index].toFixed(0);
                document.getElementById('export-percent').innerHTML = ((this.series.chart.series[6].processedYData[this.point.index]/this.total)*100).toFixed(1)+'%';
    
                document.getElementById('pump-value').innerHTML = this.series.chart.series[7].processedYData[this.point.index].toFixed(0);
                document.getElementById('pump-percent').innerHTML = ((this.series.chart.series[7].processedYData[this.point.index]/this.total)*100).toFixed(1)+'%';
    
                document.getElementById('load-value').innerHTML = (this.series.chart.series[6].processedYData[this.point.index]+this.series.chart.series[7].processedYData[this.point.index]).toFixed(0);
                document.getElementById('renewables-percent').innerHTML = (((this.series.chart.series[0].processedYData[this.point.index]/this.total)*100)+((this.series.chart.series[1].processedYData[this.point.index]/this.total)*100)+((this.series.chart.series[2].processedYData[this.point.index]/this.total)*100)).toFixed(1)+'%';
                document.getElementById('sources-value').innerHTML = (this.series.chart.series[0].processedYData[this.point.index]+this.series.chart.series[1].processedYData[this.point.index]+this.series.chart.series[2].processedYData[this.point.index]+this.series.chart.series[3].processedYData[this.point.index]+this.series.chart.series[4].processedYData[this.point.index]+this.series.chart.series[5].processedYData[this.point.index]).toFixed(0);
    
                document.getElementById('table-date').innerHTML =  Highcharts.dateFormat('%e %b, %I:%M%p', this.x);
                updateData()
            }

        },
        backgroundColor: 'None',
        borderWidth: 0,
        shadow: false,
        style: {
            fontSize: '16px'
        },
        xDateFormat: "%A, %b %e, %I:%M%p"
    },
    
    series: [{
        name: 'Solar (Rooftop)',
        color: 'yellow',
        pointStart: Date.UTC(2019, 9, 20, 7),
        pointInterval: 1 * 3600 * 500,
        marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              }
            }
        },
        data: []
    }, {
        name: 'Wind',
        color: 'green',
        pointStart: Date.UTC(2019, 9, 20, 7),
        pointInterval: 1 * 3600 * 500,
        marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              }
            }
        },
        data: []
    }, {
        name: 'Hydro',
        color: 'steelblue',
        pointStart: Date.UTC(2019, 9, 20, 7),
        pointInterval: 1 * 3600 * 500,
        marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              }
            }
        },
        data: []
    }, {
        name: 'Gas (CCGT)',
        color: 'sandybrown',
        pointStart: Date.UTC(2019, 9, 20, 7),
        pointInterval: 1 * 3600 * 500,
        marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              }
            }
        },
        data: []
    }, {
        name: 'Distillate',
        color: 'red',
        pointStart: Date.UTC(2019, 9, 20, 7),
        pointInterval: 1 * 3600 * 500,
        marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              }
            }
        },
        data: []
    }, {
        name: 'Black Coal',
        color: 'black',
        pointStart: Date.UTC(2019, 9, 20, 7),
        pointInterval: 1 * 3600 * 500,
        marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              }
            }
        },
        data: []
    }, {
        name: 'Exports',
        color: 'mediumpurple',
        pointStart: Date.UTC(2019, 9, 20, 7),
        pointInterval: 1 * 3600 * 500,
        data: []
    }, {
        name: 'Pumps',
        color: '#4ECFFE',
        pointStart: Date.UTC(2019, 9, 20, 7),
        pointInterval: 1 * 3600 * 500,
        data: []
    }]
});

// Price line chart
chart2 = Highcharts.chart('second-left', {
    chart: {
        width: 1000,
        height: 200,
        backgroundColor: 'transparent'
    },

    title: {
        text: '<span style="font-weight:bold">Price</span> $/MWh',
        align: 'left',
        style: {
            fontSize: '20px'
        }
    },

    credits: {
        enabled: false
    },

    xAxis: {
        type: 'datetime',
        visible: false,
        crosshair: true,
        events: {
            setExtremes: syncExtremes
        }
    },

    yAxis: {
        max: 180,
        tickAmount: 4,
        title: {
            text: ''
        }
    },
    legend: {
        enabled: false
    },

    plotOptions: {
        enableMouseTracking: false ,
        series: {
            label: {
                connectorAllowed: false,
                enabled: false
            }
        }
    },

    tooltip: {
        positioner: function () {
            return {
                x: this.chart.chartWidth - this.label.width - 10,
                y: 30
            };
        },
        formatter: function() {
            if (document.getElementById('solar-av').innerHTML === '$49.82') {
                document.getElementById('av-value').innerHTML = '$58.62';
                return '<b>$'+this.y+'.00</b>';
            };
            document.getElementById('av-value').innerHTML = '$'+this.y+'.00';

            return '<b>$'+this.y+'.00</b>';
        },
        borderWidth: 0,
        backgroundColor: 'none',
        pointFormat: '{point.x} ${point.y}.00',
        headerFormat: '',
        shadow: false,
        style: {
            fontSize: '16px'
        }
    },

    series: [{
        type: 'line',
        name: 'Price',
        color: '#D43B3B',
        lineWidth: 3,
        pointStart: Date.UTC(2019, 9, 20, 7),
        pointInterval: 1 * 3600 * 500,
        marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              }
            }
        },
        states: { 
            hover: { 
                enabled: false 
            } 
        },
        data: []
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

// Temperature line chart
chart3 = Highcharts.chart('third-left', {
    chart: {
        width: 1000,
        height: 150,
        backgroundColor: 'transparent'
    },

    title: {
        text: '<span style="font-weight:bold">Temperature</span> °F',
        align: 'left',
        style: {
            fontSize: '20px'
        }
    },

    credits: {
        enabled: false
    },

    xAxis: {
        type: 'datetime',
        visible: false,
        crosshair: true,
        events: {
            setExtremes: syncExtremes
        }
    },

    yAxis: {
        min: 0,
        max: 100,
        tickAmount: 4,
        title: {
            text: ''
        }
    },

    legend: {
        enabled: false
    },

    plotOptions: {
        enableMouseTracking: false ,
        series: {
            label: {
                connectorAllowed: false,
                enabled: false
            }
        }
    },

    tooltip: {
        positioner: function () {
            return {
                x: this.chart.chartWidth - this.label.width - 10,
                y: 5
            };
        },
        formatter: function() {
            return '<b>Av '+ this.y+'°F</b>';
        },
        borderWidth: 0,
        backgroundColor: 'none',
        headerFormat: '',
        shadow: false,
        style: {
            fontSize: '16px'
        }
    },

    series: [{
        type: 'line',
        name: 'Temperature',
        color: '#D43B3B',
        lineWidth: 3,
        pointStart: Date.UTC(2019, 9, 20, 7),
        pointInterval: 1 * 3600 * 500,
        marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              }
            }
        },
        states: { 
            hover: { 
                enabled: false 
            } 
        },
        data: []
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

// Chart synchronization
['mousemove', 'touchmove', 'touchstart'].forEach(function (eventType) {
    document.getElementById('charts').addEventListener(
        eventType,
        function (e) {
            var chart,
                point,
                i,
                event;

            for (i = 0; i < Highcharts.charts.length-1; i = i + 1) {
                chart = Highcharts.charts[i];
                // Find coordinates within the chart
                event = chart.pointer.normalize(e);
                // Get the hovered point
                point = chart.series[0].searchPoint(event, true);

                if (point) {
                    point.highlight(e);
                }
            }
        }
    );
});

/**
 * Override the reset function, we don't need to hide the tooltips and
 * crosshairs.
 */
Highcharts.Pointer.prototype.reset = function () {
    return undefined;
};

/**
 * Highlight a point by showing tooltip, setting hover state and draw crosshair
 */
Highcharts.Point.prototype.highlight = function (event) {
    event = this.series.chart.pointer.normalize(event);
    this.series.chart.tooltip.refresh(this); // Show the tooltip
    this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
};

/**
 * Synchronize zooming through the setExtremes event handler.
 */
function syncExtremes(e) {
    var thisChart = this.chart;

    if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
        Highcharts.each(Highcharts.charts, function (chart) {
            if (chart !== thisChart) {
                if (chart.xAxis[0].setExtremes) { 
                    chart.xAxis[0].setExtremes(
                        e.min,
                        e.max,
                        undefined,
                        false,
                        { trigger: 'syncExtremes' }
                    );
                }
            }
        });
    }
};

// Pie chart
var chart4 = Highcharts.chart('pie-chart', {
    chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        width: 400,
        height: 300

    },
    title: {
        text: '-',
        verticalAlign: 'middle',
        floating: true
    },

    credits: {
        enabled: false
    },
    
    tooltip: {
        enabled: false
    },
    
    plotOptions: {
        pie: {
            shadow: false,
            innerSize: '55%',
            dataLabels: {
                enabled: false
            }
        }
    },

    series: [{
        data: [{
            name: 'Solar',
            color: 'yellow',
            y: 10,
        }, {
            name: 'Wind',
            color: 'green',
            y: 10,
        }, {
            name: 'Hydro',
            color: 'steelblue',
            y: 10,
        }, {
            name: 'Gas',
            color: 'sandybrown',
            y: 10,
        }, {
            name: 'Distillate',
            color: 'red',
            y: 10,
        }, {
            name: 'Coal',
            color: 'black',
            y: 10
        }]
    }]
});

// Radio button trigger
function radioTrigger(e) {
    var x = document.getElementById("radio-one")
    var y = document.getElementById("radio-two")
    if (x.checked === true) {
        document.getElementById("sources-bar").style.display = "block";
        document.getElementById("pie-chart").style.display = "none";
    } 
    if (y.checked === true) {
        document.getElementById("sources-bar").style.display = "none";
        document.getElementById("pie-chart").style.display = "block";
    }
};

// Pie chart data updater
function updateData() {
    var solar = Number(document.getElementById('solar-value').innerHTML);
    var wind = Number(document.getElementById('wind-value').innerHTML);
    var hydro = Number(document.getElementById('hydro-value').innerHTML);
    var gas = Number(document.getElementById('gas-value').innerHTML);
    var distillate = Number(document.getElementById('distillate-value').innerHTML);
    var coal = Number(document.getElementById('coal-value').innerHTML);
    chart4.series[0].setData([solar, wind, hydro, gas, distillate, coal])

    if (document.getElementById('solar-av').innerHTML === '$49.82') {
        chart4.setTitle({text: 'Average <br> 7020 MW'});
    } else {
        chart4.setTitle({text: document.getElementById('sources-value').innerHTML+' MW'});
    }
};

// function to undersample data at 30m intervals
function underSample(arr) {
    var new_arr = [];
    for (i = 1; i < arr.length; i=i+6) {
        new_arr.push(arr[i]);
      }
    return new_arr
};

function updateGlobalEnergyData(data) {
    demandData = data[9]['values'];

    chart1.series[0].setData(data[7]['values'])
    chart1.series[1].setData(underSample(data[5]['values']).map(v => parseInt(v, 10)));
    chart1.series[2].setData(underSample(data[3]['values']));
    chart1.series[3].setData(underSample(data[2]['values']));
    chart1.series[4].setData(underSample(data[1]['values']));
    chart1.series[5].setData(underSample(data[0]['values']));
    chart1.series[6].setData(underSample(data[6]['values']).map(value => -value));
    chart1.series[7].setData(underSample(data[4]['values']).map(value => -value));

    chart2.series[0].setData(data[8]['values']);

    chart3.series[0].setData(data[10]['values']);
};

function onSuccessCb(jsonData) {
    var energyData = jsonData.filter(function(elm) {
        return elm['region'] === 'Springfield';
    }).map(function(elm) {
        return {
          values: elm['history']['data'],
          text: elm['id']
        };
    });
    updateGlobalEnergyData(energyData);
};

// Utility function to fetch any file from the server
function fetchJSONFile(filePath, callbackFunc) {
    console.debug("Fetching file:", filePath);
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200 || httpRequest.status === 0) {
                console.info("Loaded file:", filePath);
                var data = JSON.parse(httpRequest.responseText);
                console.debug("Data parsed into valid JSON!");
                console.debug(data);
                if (callbackFunc) callbackFunc(data);
            } else {
                console.error("Error while fetching file", filePath, 
                    "with error:", httpRequest.statusText);
            }
        }
    };
    httpRequest.open('GET', filePath);
    httpRequest.send();
};

function removeAv() {
    document.getElementById('solar-av').innerHTML = '-';
    document.getElementById('wind-av').innerHTML = '-';
    document.getElementById('hydro-av').innerHTML = '-';
    document.getElementById('gas-av').innerHTML = '-';
    document.getElementById('distillate-av').innerHTML = '-';
    document.getElementById('coal-av').innerHTML = '-';
    document.getElementById('export-av').innerHTML = '-';
    document.getElementById('pump-av').innerHTML = '-';
};

function updateAv() {
    document.getElementById('solar-av').innerHTML = '$49.82';
    document.getElementById('wind-av').innerHTML = '$56.43';
    document.getElementById('hydro-av').innerHTML = '$63.96';
    document.getElementById('gas-av').innerHTML = '$60.22';
    document.getElementById('distillate-av').innerHTML = '$57.42';
    document.getElementById('coal-av').innerHTML = '$59.01';
    document.getElementById('export-av').innerHTML = '$65.36';
    document.getElementById('pump-av').innerHTML = '$46.49';
};

// The entrypoint of the script execution
function doMain() {
    fetchJSONFile(JSONFileName, onSuccessCb);
};

document.onload = doMain();