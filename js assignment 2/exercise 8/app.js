// Exercise no : 8

alert(`Exercise 8: Traffic Light System`);
alert(`Output`);

let heading = `Output`;
let trafficColors = [`red`,`yellow`,`green`];

let signals = prompt(`Enter the Traffic signals Colors`);

let result;
if(signals===trafficColors[0]){
    result = `Stop`;
}
else if (signals===trafficColors[1]){
    result = `Slow down`;
}
else if (signals === trafficColors[2]){
    result = `Go`;
}
else if (signals===null || signals.trim()===""){
    alert(`Reload again`);
}
else{
    result ="Invalid Color";
}


document.getElementById(`head`).innerHTML=heading;
document.getElementById(`ans`).innerHTML=result;

alert(`How to do this??
Check the Source code from Browser`);

let heading2 =`Source Code`;
let sourceCode =`let trafficColors = [\`red\`,\`yellow\`,\`green\`];

let signals = prompt(\`Enter the Traffic signals Colors\`);
let result;
\n
if(signals===trafficColors[0]){
    result = \`Stop\`;
}
\n    
else if (signals===trafficColors[1]){
    result = \`Slow down\`;
}
\n    
else if (signals === trafficColors[2]){
    result = \`Go\`;
}
\n    
else if (signals===null || signals.trim()===""){
    alert(\`Reload again\`);
}
\n    
else{
    result ="Invalid Color";
}
\n
document.getElementById(\`ans\`).innerHTML=result;`;
document.getElementById(`head1`).innerHTML=heading2;
document.getElementById(`para`).innerHTML=`<pre> ${sourceCode}</pre>`;