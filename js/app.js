var githubUsername = "tawfiqmp";

var url = "https://api.github.com/users/"+githubUsername;

$.get(url).then(function(data){
    drawProfile(data);
});

function drawProfile(data) {
    document.body.innerHTML = [
        '<h1>',
        data.name,
        '</h1>',
        '<h2> blog:',
        data.blog,
        '</h2>'
    ].join('');
}