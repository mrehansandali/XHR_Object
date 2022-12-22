// Create an XHMHttpRequest (xhr) object
// const xhr = new XMLHttpRequest();

// Open the object
// xhr.open("method(GET) or (POST)etc", "(url => fileName)", true or false(async or sync))

// What to do on progress (optional)
// xhr.onprogress = function (){}

// What to do when request is done 
// xhr.onload = function () {}

// Send the request
// xhr.send()

// const button = document.querySelector("button").addEventListener("click", getData)
// const demo = document.getElementById('demo')

// function getData() {
//     const xhr = new XMLHttpRequest;

//     xhr.open("GET", "text.txt", true)

//     xhr.onload = function () {
//         demo.innerHTML = this.responseText;
//     }
//     xhr.send()
// }




// document.querySelector("button")
// let demo = document.getElementById("demo")
// ///asynchronous => true
// ///synchronous => false
// function loadData() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "data.txt", true);

//   xhr.onload = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       demo.innerHTML = this.responseText;
//     }
// }

// xhr.send()
// }




const button = document.querySelector("button").addEventListener("click", getData)
const demo = document.getElementById('demo')

function getData() {
    const xhr = new XMLHttpRequest();

    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true)
    // (Post Request)
    xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true)
    // xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onprogress = function () {
        demo.innerHTML = "On Progress..."
    }

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(demo.innerHTML = this.responseText)
        }
        else if (this.status === 404) {
            console.log(demo.innerHTML = "Not Found")
        }
    }

    // xhr.onreadystatechange = function () {
    //     console.log(xhr.readyState)
    // }

    param = { "name": "tesadsat", "salary": "123", "age": "23" }

    xhr.send(param)
}





const popbutton = document.getElementById("popBtn").addEventListener("click", getPopData)
const list = document.getElementById('list')

function getPopData() {
    const xhr = new XMLHttpRequest;

    xhr.open("GET", "https://reqres.in/api/users?page=2", true)

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText)
            console.log(obj)
            str = "";
            for (key in obj) {
                str += `<li>${obj.data[5].first_name + last_name}</li>`
            }
            list.innerHTML = str;
        }
    }

    xhr.send()
}