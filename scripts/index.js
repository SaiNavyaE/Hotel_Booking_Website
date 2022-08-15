let viewMore = () => {
    let viewMoreButtonElement = document.getElementById("vmore");
    if (viewMoreButtonElement.innerText == "View More") {
        document.getElementById("nextcardsset").style.display = "flex";
        viewMoreButtonElement.innerText = "View Less";
    }
    else {
        document.getElementById("nextcardsset").style.display = "none";
        viewMoreButtonElement.innerText = "View More";
    }
}