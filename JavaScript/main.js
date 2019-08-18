/*var myPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest()

        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null);


        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject('Erro na requisição');
            }
        }
    });
}
*/
axios.get('https://api.github.com/users/diego3g')
    .then(function(response) {
        console.log(response);

    })
    .catch(function(error) {
        console.log(error);

    })