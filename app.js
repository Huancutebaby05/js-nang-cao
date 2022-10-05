import 'regenerator-runtime/runtime';
import axios from 'axios';

// ...

APIKey = "nFtSbBegduRbE6mQnqZo4Zy7HMhgpEMv"
let lists = []
let displayGif = document.getElementById("image")

async function searchFunction() {
    let value = document.getElementById("search").value.trim();
    let key = Math.ceil(Math.random() * 50)
    console.log(key);
    try {
        console.log(value);
        const images = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${APIKey}`)
        lists.push(images.data.data[key].images.downsized.url)
        console.log(lists);
        console.log(images.data);

        display()
    } catch (error) {
        console.log(Error("Can't find giphy"));
    }
}

function display() {
    let data = ""
    for (let i = 0; i < lists.length; i++) {
        data += '<img src=' + lists[i] + ' alt="">'
    }
    displayGif.innerHTML = data;
    document.getElementById("search").value = ""
}

function deleteFunction() {
    lists = [];
    displayGif.innerHTML = ""
}