//get news matching user's input
function fetchNews(){
    $('#search-form').on('click', 'input[type="submit"]', (function(event){
        event.preventDefault();
        console.log('clicked');
        let searchTerm = $('input[type="text"]').val();
        console.log(searchTerm);
        let url = ENDPOINT + `q=` + encodeURIComponent(searchTerm) + `&apiKey=`+ KEY;
        fetch(url)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayNews(responseJson, searchTerm))
        .catch(err => {
            $('#js-error-message').html(`<p>Something went wrong: ${err.message}</p>`);
        });
    }));
}

//render the articles to the user
function displayNews(responseJson, term){
    $('#search-form')[0].reset();
    $('.results').empty();
    COUNTER = 1; //start after responseJson index to iterate through max return properly
    $('.results-description').html(`<h3>Articles about "` + term + `":</h3><br>`);
    while(!(COUNTER % MAX_RETURN === 0) && COUNTER < responseJson.totalResults){
         $('.results').append(`<div class="article">
            <p class="source">` + responseJson.articles[COUNTER-1].source.name + `</p>
            <h4><a href="` + responseJson.articles[COUNTER-1].url + `" target="_blank">` + responseJson.articles[COUNTER-1].title + `</a></h4>
            <img src="` + responseJson.articles[COUNTER-1].urlToImage + `" alt="">
            <p class="description">` + responseJson.articles[COUNTER-1].description + `</p></div>`);
        COUNTER++;
    }

  /*  if(COUNTER > responseJson.totalResults){
        $('.js-error-message').
    }*/
}

function handleApp(){
    fetchNews();
}

$(handleApp);