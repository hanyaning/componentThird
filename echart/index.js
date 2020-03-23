// 初始化echarts实例
var myChart = echarts.init(document.getElementById('echart'));
// 指定图表的配置项和数据
var option = {
    title : {
        text:'JavaScript语言排名变化'
    },
    //提示框
    tooltip:{
        trigger: 'axis'
    }, 
    //图例
    legend:{
        data:['排名']
    },
    xAxis: {
        data: [2000,2005,2010,2015,2020]
    },
    yAxis: {},
    series:[{
        name:'排名',
        type:'line',
        data:[6,9,8,8,7]
    }],

};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


//电子表格
var dataObject = [
    {
        '语言名称':'java',
        '排名':1,
        '升或降':'降',
        '变化幅度':'-0.01%'
    },
    {
        '语言名称':'C',
        '排名':2,
        '升或降':'升',
        '变化幅度':'+2.24%'
    },
    {
        '语言名称':'Python',
        '排名':3,
        '升或降':'升',
        '变化幅度':'+1.41%'
    },
    {
        '语言名称':'C++',
        '排名':4,
        '升或降':'降',
        '变化幅度':'-2.58%'
    },
    {
        '语言名称':'C#',
        '排名':5,
        '升或降':'升',
        '变化幅度':'+2.07%'
    },
    {
        '语言名称':'Visual Basic .NET',
        '排名':6,
        '升或降':'降',
        '变化幅度': '-1.17%'
    },
    {
        '语言名称':'JavaScript',
        '排名':7,
        '升或降':'降',
        '变化幅度':'-0.85%'
    }
];
var element = document.getElementById('Excel');
var ParentElement = element.parentNode; //挂载元素
var listSettings = {
    //表格数据
    data:dataObject,
    //每列的设置
    colums:[
        {
            data:'语言名称',
            type:'text',
        },
        {
            data:'排名',
            type:'numeric'
        },
        {
            data:'升或降',
            type:'text'
        },
        {
            data:'变化幅度',
            type:'text',
        }
    ],
    manualRowResize:true,  //是否开启手动调整行大小
    manualColumnResize:true,  //是否开启手动移动列
    rowHeaders: false, 
    colHeaders:['语言名称','排名','升或降','变化幅度'],
    autoColumnSize:true,
    colWidths:150,
    className:'htCenter htMiddle',
    manualRowMove: true,  //是否开启手动移动行
    manualColumnMove: true,  //是否开启手动移动列
}
//创建表格
var excel = new Handsontable(element,listSettings);