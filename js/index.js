//get news matching user's input
function fetchNews(){
    $('#search-form').submit(function(event){
        event.preventDefault();
        let searchTerm = $('input[type="text"]').val();
        let url = ENDPOINT + `q=` + encodeURIComponent(searchTerm) + `&apiKey=`+ KEY;
        fetch(url)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayNews(responseJson))
        .catch(err => {
            $('#js-error-message').html(`<p>Something went wrong: ${err.message}</p>`);
        });
    });
}

//render the articles to the user
function displayNews(){
    
}

function handleApp(){
    fetchNews();
}

$(handleApp);