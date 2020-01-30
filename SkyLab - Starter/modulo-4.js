axios.get('https://api.github.com/users/toonydias')
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn()
    })