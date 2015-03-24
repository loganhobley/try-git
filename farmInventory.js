'use strict';

var farmInventory = [
	{
		label: 'Cows',
		count: '5'
	},
	{
		label: 'Chickens',
		count: '17'
	},
	{
		label: 'Pigs',
		count: '3'
	}
];

function padWithZeroes(number, length){
var string = String(number);
while(string.length < length)
	string = '0' + string;
return string;
}

function printInventory(inventoryArray, length){
	for(var i = 0; i < inventoryArray.length; i++){
		console.log(padWithZeroes(inventoryArray[i].count, length) + ' ' + inventoryArray[i].label);
	}
}

printInventory(farmInventory, 3);