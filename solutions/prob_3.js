require("fs").readFile("../input/3.txt",(e,d)=>{a=`${d}`.split`
`
for(i=0;i<a[0];++i){console.log([...new Set(a[2*i+1].split` `.sort((a,b)=>b-a))][a[2*i+2]-1])}})
