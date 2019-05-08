window.onload = function() {
    let footnote_refs = document.getElementsByClassName('ref');

    for (var i = 0; i < footnote_refs.length; i++) {
        let ref = footnote_refs[i]
        ref.firstClick = true;
        ref.addEventListener("click", show_footnote);
    }
}

function get_inner_html(int) {
    switch (int) {
        case 1:
            return "<a href = \"https://trends.google.com/trends/explore?q=avocado%20toast&date=all&geo=US\" \
            target = \"_blank\"> https: //trends.google.com/trends/explore?q=avocado%20toast&date=all&geo=US</a> \
            (Note the seasonal spikes in Google searches.)";
        case 2:
            return "<a href = \"https://angelalrae.github.io\" target = \"_blank\">https://angelalrae.github.io/</a>";
        case 3:
            return "Just kidding, I don’t know who you are.";
        case 4:
            return "April-May 2019.";
        case 5:
            return "Bay Area, California to Spokane, Washington to the World Wide Web to your eyes.";
        case 6:
            return "But also because food is cool and important. My poem, the first popup as you navigate the home page, \
            was inspired by the avocado pit I helped grow into a tree (pictured on the Medium page) and \
            Val Plumwood’s “Nature in the Active Voice” (2009). Plumwood calls her readers to consider that nature has agency, \
            rather than our typical view of nature as static or solely responsive. In this spirit, I wanted to give agency and voice \
            to the avocado tree I have nurtured for the last few months by personifying how it might have felt when I bought and ate it. \
            While I edited the poem, outrage broke out among progressive millenials when it was revealed that Trump’s border closing \
            threats briefly hiked the price of avocados. With the convergence of these events, I began to consider the multitude of ways \
            that this single fruit shapes culture and selves.";
    }
}

function show_footnote() {
    // 'this' is reference to the span tag
    // 'this.parentNode' is the paragraph tag
    // 'this.parentNode.parentNode' is the div tag

    if (this.firstClick) {
        // after button has been clicked once, functionality changes to toggle
        this.firstClick = false;

        // get inner text for new element
        let text = get_inner_html(parseInt(this.id));

        // create the new element
        let footnote = document.createElement('p');
        footnote.className = "foot-note";
        footnote.innerHTML = text;

        // append the new element
        let div = this.parentNode.parentNode;
        console.log(div);

        div.append(footnote)

    } else {
        let footnote = this.parentNode.parentNode.getElementsByClassName("foot-note");
        $(footnote).toggle(500);
    }
}