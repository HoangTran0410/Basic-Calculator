var ans = 1;

window.onload = function() {
    document.onclick = function(e) {
        if (e.target.matches('button')) {
            var screen = document.getElementById('screen');
            var innerHTMLButton = e.target.innerHTML;

            switch (innerHTMLButton) {
                case 'AC':
                    screen.value = '0';
                    break;

                case 'DEL':
                    if (screen.value.length) {
                        if (screen.value.length == 1) {
                            screen.value = '0';
                        } else {
                            screen.value = screen.value.slice(0, -1);
                        }
                    }
                    break;

                case '=':
                    var str = screen.value;
                    str = str.replaceAll('+', '+');
                    str = str.replaceAll('−', '-');
                    str = str.replaceAll('×', '*');
                    str = str.replaceAll('÷', '/');
                    str = str.replaceAll('sin', 'Math.sin');
                    str = str.replaceAll('cos', 'Math.cos');
                    str = str.replaceAll('tan', 'Math.tan');
                    str = str.replaceAll('log', 'Math.log10');
                    str = str.replaceAll('ln', 'Math.log');
                    str = str.replaceAll('√', 'Math.sqrt');
                    
                    str = str.replaceAll('Ans', ans);

                    console.log(str);

                    try {
                        screen.value = eval(str);
                        ans = screen.value;
                    } catch (err) {
                        screen.value = 'ERROR';
                    }

                    break;

                default:
                    if (screen.value == '0') {
                        screen.value = e.target.value;
                    } else {
                        screen.value = screen.value.splice(screen.selectionStart || screen.value.length, 0, e.target.value);
                        screen.focus();
                        // screen.value += e.target.value;	
                    }
            }
        }
    }
}

// ================================ Math Functions =====================================
function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}


// ================================= String Functions ==================================
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

if (!String.prototype.splice) {
    /**
     * {JSDoc}
     *
     * The splice() method changes the content of a string by removing a range of
     * characters and/or adding new characters.
     *
     * @this {String}
     * @param {number} start Index at which to start changing the string.
     * @param {number} delCount An integer indicating the number of old chars to remove.
     * @param {string} newSubStr The String that is spliced in.
     * @return {string} A new string with the spliced substring.
     */
    String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
}