import{d as e,L as r,u as t}from"./useEcharts.a4e0412d.js";import{d as a,k as o,e as s,f as i,_ as l,o as n,c as p}from"./vendor.25688f0d.js";var d=a({name:"OrderChart",setup(){const a=o(!0),n=o(null);return s((()=>{const e={tooltip:{trigger:"item",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{x:"-5%",y:0,x2:"-5%",y2:0},xAxis:{type:"category",splitLine:{show:!1}},yAxis:[{type:"value",splitLine:{show:!1}}],series:[{data:[82,93,90,74,82,60,50],type:"line",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new r(0,0,0,1,[{offset:0,color:"rgba(128, 255, 165)"},{offset:1,color:"rgba(1, 191, 236)"}])}}]};setTimeout((()=>{a.value=!1,l((()=>{t(n.value).setOption(e)}))}),100)})),i((()=>{e(n.value)})),{loading:a,orderChartWrapper:n,updateChart:()=>{t(n.value).resize()}}}});const u={ref:"orderChartWrapper",style:{height:"100%"}};d.render=function(e,r,t,a,o,s){return n(),p("div",u,null,512)};export default d;