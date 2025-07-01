const input = document.getElementById('input');

function reverseString(string) {
    return string.split('').reverse().join('')
}

function check() {
    const value = input.value;
    const reversed = reverseString(value);

    if (reversed === value) {
        alert('Palindrome detected: '+value);
    }else{
        alert(reversed);
    }

    input.value = ''
}