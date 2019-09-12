const memberArray = ['devJnag', 'Hong', 'Suzy']
console.log(memberArray[2])

const memberObject = {
	manager:'GeonilJang',
	developer:'DevJang',
	designer:'Ruzin'
}

console.log(memberObject['manager']);
console.log(memberObject.manager);

delete memberObject.designer;
console.log(memberObject.designer);

console.group('forin')
for(let member in memberObject){
	console.log(member, memberObject[member]);
}
console.groupEnd('forin')
