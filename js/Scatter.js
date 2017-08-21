/**
 * Created by saber on 2017/4/25.
 */
/**
 * Created by saber on 2017/4/25.
 */

var myChart1=echarts.init(document.getElementById('san'));
// option = {
//     title: {
//         text: '上层温度&下层温度'
//     },
//     tooltip : {
//         trigger: 'axis',
//         showDelay : 0,
//         axisPointer:{
//             show: true,
//             type : 'cross',
//             lineStyle: {
//                 type : 'dashed',
//                 width : 1
//             }
//         },
//         zlevel: 1
//     },
//     legend: {
//         data:['上层温度','下层温度']
//     },
//     toolbox: {
//         show : true,
//         feature : {
//             mark : {show: true},
//             dataZoom : {show: true},
//             dataView : {show: true, readOnly: false},
//             restore : {show: true},
//             saveAsImage : {show: true}
//         }
//     },
//     xAxis : [
//         {
//             type : 'value',
//             scale:true
//         }
//     ],
//     yAxis : [
//         {
//             type : 'value',
//             scale:true
//         }
//     ],
//     series : [
//         {
//             name:'上层温度',
//             type:'scatter',
//             large: true,
//             symbolSize: 3,
//             data: (function () {
//                 var d = [];
//                 var len = 10000;
//                 var x = 0;
//                 while (len--) {
//                     x = (Math.random() * 10).toFixed(3) - 0;
//                     d.push([
//                         x,
//                         //Math.random() * 10
//                         (Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
//                     ]);
//                 }
//                 //console.log(d)
//                 return d;
//             })()
//         },
//         {
//             name:'下层温度',
//             type:'scatter',
//             large: true,
//             symbolSize: 2,
//             data: (function () {
//                 var d = [];
//                 var len = 20000;
//                 var x = 0;
//                 while (len--) {
//                     x = (Math.random() * 10).toFixed(3) - 0;
//                     d.push([
//                         x,
//                         //Math.random() * 10
//                         (Math.cos(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
//                     ]);
//                 }
//                 //console.log(d)
//                 return d;
//             })()
//         }
//     ]
// };

option = {
    title: {
        text: '温度显示'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['下层温度','中层温度','上层温度']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'下层温度',
            type:'line',
            stack: '总量',
            data:[22, 18, 19, 23, 29, 33, 31]
        },
        {
            name:'中层温度',
            type:'line',
            stack: '总量',
            data:[15, 23, 20, 15, 19, 33, 31]
        },
        {
            name:'上层温度',
            type:'line',
            stack: '总量',
            data:[32, 33, 30, 33, 39, 33, 32]
        }
    ]
};


myChart1.setOption(option);