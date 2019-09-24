//Uses either easyhttp2.j or easyhttp3.js

const http = new EasyHTTP;

//Get all Users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

const data = {
    name: 'John Doe',
    username: 'JD',
    email: 'sdasd@asd.sad'
}

//Submit User
http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err));

//Edit all User
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));

//Delete all User
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));