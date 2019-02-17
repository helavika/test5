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
		checkVal = Array.from(checkVal).join('');
		let mistakesCounter = 0;
		console.log(checkVal)

		if (checkVal == randomString) {
			alert('True')
		} else {

			var a = Array.from(randomString);
			var b = Array.from(checkVal);

			// function arr_diff (a1, a2) {

			//     var a = [], diff = [];

			//     for (var i = 0; i < a1.length; i++) {
			//         a[a1[i]] = true;
			//     }

			//     for (var i = 0; i < a2.length; i++) {
			//         if (a[a2[i]]) {
			//             delete a[a2[i]];
			//         } else {
			//             a[a2[i]] = true;
			//         }
			//     }

			//     for (var k in a) {
			//         diff.push(k);
			//     }

			//     return diff;
			// }

			// console.log(arr_diff(a, b));


			Array.prototype.diff = function(a) {
			    return this.filter(function(i) {return a.indexOf(i) < 0;});
			};

			var answer = (b.diff(a)).length;

			alert(`Error rate ${answer}`); 
			symbolCount();
		}

	} else {
		alert('Wrong choise, try again');
		symbolCount()
	}
}

symbolCount()




