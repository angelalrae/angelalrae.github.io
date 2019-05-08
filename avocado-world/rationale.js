/* < p class = "foot-note" > < </p> */


window.onload = function() {
    let footnotes = document.getElementsByClassName('ref');
    for (var i = 0; i < footnotes.length; i++) {
        footnotes[i].addEventListener("click", show_footnote);
    }
}

function get_inner_html(int) {
    switch (int) {
        case 1:
            return "<a href = \"https://trends.google.com/trends/explore?q=avocado%20toast&date=all&geo=US\" target = \"_blank\"> https: //trends.google.com/trends/explore?q=avocado%20toast&date=all&geo=US</a> (Note the seasonal spikes in Google searches.)";
        case 2:
            return "<a href = \"https://angelalrae.github.io\" target = \"_blank\">https://angelalrae.github.io/</a>"
    }
}

function show_footnote() {
    // get inner text for new element
    let text = get_inner_html(parseInt(this.id));

    // create the new element
    let footnote = document.createElement('p');
    footnote.className = "foot-note";
    footnote.innerHTML = text;

    // append the new element
    let span = this.parentNode.parentNode;
    span.append(footnote)
}