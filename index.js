function fetchNews(){
    $('#search-form').submit(function(event){
        event.preventDefault();
        console.log(this);
    });
}

function handleApp(){
    fetchNews();
}

$(handleApp);