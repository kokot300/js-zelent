function inter(){
    let today = new Date();
    document.getElementById('clock').innerHTML = today;
}

setInterval(inter, 1000);

