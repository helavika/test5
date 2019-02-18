'use strict'

/*
['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

Разработать приложение «Клавиатурный тренажер» в котором, 
пользователь сможет указать количество символов, 
которые ему надо будет ввести в следующем диалоговом окне.

Исходя из введенного пользователем количества символов, 
в случайном порядке сформировать задание для прохождения 
из предоставленного набора символов.

После окончания ввода и подтверждения, подсчитать количество ошибок. 
Если ошибок нет, начать выполнение программы заново, 
если есть, предложить пройти это же упражнение заново.*/


const keyboard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const keyboardJoined = keyboard.join('');
let stringLength = '';


var symbolCount = function() {
	stringLength = prompt(`Enter the number of characters`);

	function pickRandom() {
	    return keyboardJoined[Math.round(Math.random() * keyboardJoined.length)];
	}

	var randomString = Array.from({ length: stringLength }, pickRandom).join('');

	console.log(randomString)

	if (stringLength > 0 && stringLength < keyboard.length && stringLength !== 0) {
		let checkVal = prompt(`Repeat this ${randomString}`);
		console.log(checkVal)

		if (checkVal === randomString) {
			alert('True')
		} else if (checkVal.length > randomString.length || checkVal.length < randomString.length) {
			alert(`Wrong symbols quantity!`); 
			symbolCount();
		} else {
			let counter = 0;
			let errorSymbol;
			let errorNum;
			function arr_diff (a, b) {
				var a = Array.from(randomString);
				var b = Array.from(checkVal);
				for (let i = 0; i < a.length; ++i) {
					if (a[i] !== b[i]){
						counter++;
						errorSymbol = a[i];
						errorNum = i + 1;
					}
				}
			} 

			arr_diff();

			alert(`Error rate ${counter}. Start on ${errorSymbol} (${errorNum})`); 
			symbolCount();
		}

	} else {
		alert('Wrong choise, try again');
		symbolCount()
	}
}

symbolCount()
