

let arr = [10,20,30,40]
localStorage.setItem('arr' , arr)

let obj = {
    user:'ajay',
    age:20,
    city : 'bhopal'
}

let newObj = JSON.stringify(obj)
localStorage.setItem('obj' , newObj)

console.log(newObj);
