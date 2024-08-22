const searchBox = $("#search-term");
const gifContainer = $(".gif-container");

async function getGif(){
    try{
        const userTerm = searchBox.val();
        const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${userTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
        const randomGif = Math.floor(Math.random() * res.data.data.length);
        const gifUrl = res.data.data[randomGif].images.original.url;

        createGif(gifUrl);
        searchBox.val("");
    } catch(e) {
        alert("INVALID SEARCH TERM, TRY AGAIN");
        searchBox.val("");
    }
}

function createGif(url){
    const gif = document.createElement("IMG");
    gif.src = url;
    gifContainer.append(gif);
}

function removeGifs(){
    gifContainer.empty();  
}

$("#submit-form").on("click", getGif);  
$("#remove-gif").on("click", removeGifs);  
