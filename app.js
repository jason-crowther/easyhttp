//Uses easyhttp.js

const http = new easyHTTP;

//Get all Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts){
    if(error){
        console.log(error);
    }else{
        console.log(posts);
    }
});

// Get single post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, posts){
    if(error){
        console.log(error);
    }else{
        console.log(posts);
    }
});

const data = {
    title: 'Custom Post',
    body: 'This is a custom post',
};

// Submit post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
    if(error){
        console.log(error);
    }else{
        console.log(post);
    }
});

// Edit single post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post){
    if(error){
        console.log(error);
        }else{
        console.log(post);
        }
});

// Delete single post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log(response);
    }
});