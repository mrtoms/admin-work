import y from"./DataItem.56505b0b.js";import $ from"./OrderChart.98646c0f.js";import k from"./SalesChart.4383dce9.js";import O from"./StudentChart.64f3e09d.js";import Y from"./EnrollmentChannelsChart.59ef1e1f.js";import A from"./FullYearSalesChart.4eaeb8fe.js";import w from"./DepartmentChart.daa84f89.js";import{u as I}from"./index.3630a3e9.js";import{d as T,l,b as L,J as N,r as e,o as B,i as b,a as t,w as a,F as V,O as H,c as z,Y as J,k as s,H as C,h as R}from"./vendor.66b1fd00.js";import"./useEcharts.5a9cb742.js";import"./lodash.8db45c76.js";var x=T({name:"Home",components:{DataItem:y,OrderChart:$,SalesChart:k,StudentChart:O,EnrollmentChannelsChart:Y,FullYearSalesChart:A,DepartmentChart:w},setup(){const h=I(),f=l(),v=l(),S=l(),g=l(),E=l(),m=l(),F=()=>{setTimeout(()=>{var r,o,c,i,p,_;(r=f.value)==null||r.updateChart(),(o=v.value)==null||o.updateChart(),(c=S.value)==null||c.updateChart(),(i=g.value)==null||i.updateChart(),(p=E.value)==null||p.updateChart(),(_=m.value)==null||_.updateChart()},500)},d=L(()=>h.state.isCollapse);return N(d,()=>{F()}),{collapse:d,mOrderChart:f,salesChart:v,enrollmentChannelsChart:S,studentChart:g,departmentChart:m,fullYearSalesChart:E,dataList:[{title:"\u4ECA\u65E5\u8BBF\u95EE\u91CF",data:"+1000",bottomTitle:"\u603B\u8BBF\u95EE\u91CF",totalSum:"100\u4E07+",iconClass:"data-chart",extra:{data:1e3,data1:2350}},{title:"\u65B0\u589E\u7528\u6237",data:"+500",bottomTitle:"\u603B\u7528\u6237\u91CF",totalSum:"200\u4E07+",iconClass:"data-people",extra:{data:700,data1:968}},{title:"\u5F53\u6708\u9500\u552E\u989D",data:"\uFFE550000",bottomTitle:"\u7D2F\u8BA1\u9500\u552E\u989D",totalSum:"2000\u4E07+",iconClass:"data-money",extra:{data:80}},{title:"\u5F53\u6708\u8BA2\u5355\u91CF",data:"189\u7B14",bottomTitle:"\u7D2F\u8BA1\u8BA2\u5355\u91CF",totalSum:"1\u4E07+",iconClass:"data-order",extra:{data:80}}]}}});const q={class:"main-container"},G={class:"margin-top-lg"},K={class:"margin-top-sm"};function M(h,f,v,S,g,E){const m=e("n-progress"),F=e("OrderChart"),d=e("DataItem"),r=e("n-grid-item"),o=e("n-grid"),c=e("FullYearSalesChart"),i=e("SalesChart"),p=e("StudentChart"),_=e("EnrollmentChannelsChart"),D=e("DepartmentChart");return B(),b("div",q,[t(o,{responsive:"screen",cols:"1 s:2 m:4 l:4 xl:4 2xl:4","x-gap":"5","y-gap":"5"},{default:a(()=>[(B(!0),b(V,null,H(h.dataList,(j,u)=>(B(),z(r,{key:u,class:"item-wrapper"},{default:a(()=>[t(d,{"data-model":j},J({_:2},[u===0?{name:"extra",fn:a(({extra:n})=>[s("div",G,[s("div",null," \u8F83\u6628\u65E5\u65B0\u589E\uFF1A"+C(n.data),1),s("div",K," \u8F83\u4E0A\u5468\u65B0\u589E\uFF1A"+C(n.data1),1)])])}:u===1?{name:"extra",fn:a(({extra:n})=>[s("div",{class:"margin-top",style:{position:"relative"}},[s("div",null," \u8F83\u6628\u65E5\u65B0\u589E\uFF1A"+C(n.data),1),s("div",{class:"margin-top-sm"}," \u8F83\u4E0A\u5468\u65B0\u589E\uFF1A"+C(n.data1),1),s("div",{class:"stack-avatar-wrapper"},[R(" <StackAvatar /> ")])])])}:u===2?{name:"extra",fn:a(({extra:n})=>[t(m,{type:"line",percentage:n.data},null,8,["percentage"])])}:u===3?{name:"extra",fn:a(()=>[t(F,{ref_for:!0,ref:"mOrderChart"},null,512)])}:void 0]),1032,["data-model"])]),_:2},1024))),128))]),_:1}),t(o,{class:"mt-2"},{default:a(()=>[t(r,{span:24},{default:a(()=>[t(c,{ref:"fullYearSalesChart"},null,512)]),_:1})]),_:1}),t(o,{responsive:"screen",cols:"1 s:2 m:4 l:4 xl:4 2xl:4","x-gap":"5","y-gap":"5",class:"mt-2 mb-2"},{default:a(()=>[t(r,null,{default:a(()=>[t(i,{ref:"salesChart"},null,512)]),_:1}),t(r,null,{default:a(()=>[t(p,{ref:"studentChart",class:"margin-top-xs"},null,512)]),_:1}),t(r,null,{default:a(()=>[t(_,{ref:"enrollmentChannelsChart"},null,512)]),_:1}),t(r,null,{default:a(()=>[t(D,{ref:"departmentChart"},null,512)]),_:1})]),_:1})])}x.render=M;x.__scopeId="data-v-04b209a0";export{x as default};