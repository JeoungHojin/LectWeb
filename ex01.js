console.log("Hello, Node.js!");
function first()
{
    second();
    console.log('첫 번째');
}
function second()
{
    thrid();
    console.log('두 번째');
}
function third()
{
    console.log('첫 번째');
}

var num1 = 1;
var num2 = 2;
var result = 3;
var stirng1 = num1 + '더하기' + num2 + '는 \'' + result + '\'';
console.log(stirng1);


const add2 = (x, y) => {
    return x + y;
}

const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);

function not1(x) {
    return !x;
}
const not2 = x => !x;

console.log(add2(1, 2));

const relationship2 = {
    first_name : 'Han Nu Ri',
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => { //시험 문제 나올수있대
            console.log(this.first_name,this.name, friend);
        });
    },
};
relationship2.logFriends();