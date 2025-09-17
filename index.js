const { odd, even } = require('./var');
const checkNumber = require('./func');


function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    }
    return even;
}
fs.readfile('./readme.txt')
    .then((data) => {
        console.log(checkNumber(10));

        fs.readfile('./readme.txt')
            .then((data) => {
                console.log(data.toString());
            })
            .catch((err) => {
            console.log(err)
        })
    })

fs.writefile(('./readme.txt', '읽었습니다.')
    .then(() => {
    return fs.readFile('./readme.txt')
    })
    .then((data) => {
                console.log(data.toString());
            })
    .catch((err) => {
        console.log(err)
    })
)
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));