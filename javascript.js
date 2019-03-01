var ans = 1;

window.onload = function() {
	document.onclick = function(e) {
		if(e.target.matches('button')) {
			var screen = document.getElementById('screen');
			var valueButton = e.target.innerHTML;

			switch(valueButton) {
				case 'AC' :
					screen.value = '0';
					break;

				case 'DEL' :
					if(screen.value.length) {
						if(screen.value.length == 1) {
							screen.value = '0';
						} else {
							screen.value = screen.value.slice(0, -1);
						}
					}
					break;

				case '=' :
					var str = screen.value;
					str = str.replaceAll('+', '+');
					str = str.replaceAll('−', '-');
					str = str.replaceAll('×', '*');
					str = str.replaceAll('÷', '/');
					str = str.replaceAll('Ans', ans);

					console.log(str);

					try {
						screen.value = eval(str);
						ans = screen.value;
					} catch(err) {
						screen.value = 'ERROR';
					}
					
					break;

				default: 
					if(screen.value == '0') {
						screen.value = valueButton;
					} else {
						screen.value += valueButton;	
					}
			}

			screen.value = screen.value;
		}
	}
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};