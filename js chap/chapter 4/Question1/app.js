// Question no : 1

alert(`Question
1 .Declare 3 variables in one statement.
2. Declare 5 legal & 5 illegal variable names.
3. Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,
______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or
_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________`);

alert(`Output`);

alert(`Part 1`);
let variable1 =`Variable no : 1` , variable2 =`Variable no : 2` , variable3 =`Variable no : 3`;
alert(`${variable1} \n ${variable2} \n ${variable3}\n`);


alert(`Part 2`);
let legalVariableName = [`$name`,`_name`,`myName`,`my_name`,`name$`];
let illegalVariableName = [`1name`,`my name`,`var`,`/name`,`234 name`];

alert(`5 Legal Variable Name:
\n
1.  ${legalVariableName[0]}
2.  ${legalVariableName[1]}
3.  ${legalVariableName[2]}
4.  ${legalVariableName[3]}
5.  ${legalVariableName[4]}`);

alert(`5 Illegal Variable Name:
\n    
1.  ${illegalVariableName[0]}
2.  ${illegalVariableName[1]}
3.  ${illegalVariableName[2]}
4.  ${illegalVariableName[3]}
5.  ${illegalVariableName[4]}`);

alert(`Part 3`);

let heading = `Rules for naming JS variables`;
let variable = [`letter`, `$`, `_`,`sensitive`, `keyword`];

document.getElementById( `head`).innerHTML=heading;
document.getElementById(`para`).innerHTML=`<pre>b) Variable names can only contain ${variable[0]}, ${variable[1]} and ${variable[2]} 
For example : $my_1stVariable.
c) Variables must begin with a ${variable[0]}, ${variable[1]} or ${variable[2]}
For example : $name, _name or name.
d) Variable names are case ${variable[3]}
e) Variable names should not be JS ${variable[4]} </pre>`;


alert(`How to do this??
Check the source code in console`)

console.log(`alert(\`Part 1\`);
let variable1 =\`Variable no : 1\` , variable2 =\`Variable no : 2\` , variable3 =\`Variable no : 3\`;
alert(\`\${variable1} \n \${variable2} \n \${variable3}\n\`);
\n

alert(\`Part 2\`);
let legalVariableName = [\`$name\`,\`_name\`,\`myName\`,\`my_name\`,\`name$\`];
let illegalVariableName = [\`1name\`,\`my name\`,\`var\`,\`/name\`,\`234 name\`];
\n
alert(\`5 Legal Variable Name:
\n
1.  \${legalVariableName[0]}
2.  \${legalVariableName[1]}
3.  \${legalVariableName[2]}
4.  \${legalVariableName[3]}
5.  \${legalVariableName[4]}\`);
\n
alert(\`5 Illegal Variable Name:
\n    
1.  \${illegalVariableName[0]}
2.  \${illegalVariableName[1]}
3.  \${illegalVariableName[2]}
4.  \${illegalVariableName[3]}
5.  \${illegalVariableName[4]}\`);
\n
alert(\`Part 3\`);
let heading = \`Rules for naming JS variables\`;
let variable = [\`letter\`, \`$\`, \`_\`,\`sensitive\`, \`keyword\`];
\n
document.getElementById( \`head\`).innerHTML=heading;
\n
document.getElementById(\`para\`).innerHTML=\`<pre>b) Variable names can only contain \${variable[0]}, \${variable[1]} and \${variable[2]} 
For example : $my_1stVariable.
\n
c) Variables must begin with a \${variable[0]}, \${variable[1]} or \${variable[2]}
For example : $name, _name or name.
\n
d) Variable names are case \${variable[3]}
\n
e) Variable names should not be JS \${variable[4]} </pre>\`;

`);







