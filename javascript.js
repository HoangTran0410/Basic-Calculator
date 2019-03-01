window.onload = function() {
	document.onclick = function(e) {
		if(e.target.matches('button')) {
			var screen = document.getElementById('screen');
			var valueButton = e.target.innerHTML;

			switch(valueButton) {
				case 'AC' :
					screen.value = '0';
					break;

				case '=' :
					var str = screen.value;
					str = str.replaceAll('×', '*');
					str = str.replaceAll('÷', '/');

					console.log(str);
					screen.value = eval(str);
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