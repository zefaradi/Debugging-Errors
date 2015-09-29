function reverse(original) {
    return orignal.split('').reverseList().join('');
}

var input = process.argv[2];

if (input)
    console.log(reverse(input));
