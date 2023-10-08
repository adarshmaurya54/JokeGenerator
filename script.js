const apiKey = "afa105c554383bfdb9954973bcbd";
document.querySelector(".joke-content .content").innerText="Please wait 😂😁";
fetch(`https://hindi-jokes-api.onrender.com/jokes?api_key=${apiKey}`)
.then(response => {
    if(!response.ok)
        throw new Error("Network response was not ok");
    return response.json();
}).then(data => {
    console.log(data);
    document.querySelector(".joke-content .content").innerText=data.jokeContent;
}).catch(e => {
    alert("There was a problem with the fetch operation:" + e)
})