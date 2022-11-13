// spread
/*
const arr = [1,2,3,4]
console.log(...arr);
console.log(arr);

const obj = {
    name: 'abhinav',
    add: 'delhi'
}

console.log(obj);
const obj2 = {
    name: 'abhinav',
    add: 'delhi',

}
console.log({...obj, country: 'ind'});

// destructuring

const arrNo = [1,2,3,4,5];
// let a = arrNo[0];
// let b = arrNo[3];
// let c = arrNo[2];
// let d = arrNo[3];

const getNameAndAddress = () => {
    let name = 'Abhinav'
    let add = 'Delhi'
    return [name, add]
}

const props = {
    model: '',
    name: ''
}

console.log(getNameAndAddress());

// let newObj = {
//     a: 1,
//     b: 2
// }

// destructing array 1,2,3,4,5]
// const [a,b,c,d,e] = [1,2,3,4,5];

const [a,b,c,d,e] = arrNo;
console.log(a);

const [userName, userAdd] = getNameAndAddress();

console.log(userName);


*/
// object 

let obj = {
    username: 'Abhinav',
    add: 'Delhi',
    city: 'Noida',
    country: 'india'
}

// let {name, address} = {
//     name: 'Abhinav',
//     add: 'Delhi'
// }

let {username, country, role} = obj

// let name  = obj.name;
// let add = obj.add;
console.log(username, country, role);

// props.name
// props.company



console.log('start');

setTimeout(() => {
    console.log('timer');
},0);

console.log('end');

AJAX 
// ---> async js and XML

// it wil make call to server or api calls

// stat
// end 
// timer

/*
const button = document.getElementById('getUsers');

// GET, PUT, POST, DELETE
button.onclick = () => {
    const req = new XMLHttpRequest(); //creating an instance
    // console.log(req);
    // req.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    req.open('GET', 'product.json', true);
    req.send();
    req.onload = () => {
        console.log(req.response);
    }

}

*/
