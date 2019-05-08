let counter = 0;
let popupWindow;

document.onkeydown = function(key_pressed) {
    switch (key_pressed.keyCode) {
        case 37:
            counter = (counter - 1) % 10;
            createPopUps(counter);
            break;
        case 39:
            counter = (counter + 1) % 10;
            createPopUps(counter);
            break;
    }
}

function createPopUps(counter) {
    // get the urls to display the the window sizes to use
    let urls = getUrlData(counter);
    url1 = urls[0];
    height1 = urls[1]
    width1 = urls[2]
    url2 = urls[3];
    height2 = urls[4];
    width2 = urls[5]

    // create the first window
    popup(url1, height1, width1, url2, height2, width2);
}

/**
 * given the number of button clicks (counter), returns a set of urls and sizes
 * @param {*} counter 
 */
function getUrlData(counter) {
    switch (counter) {
        case 1:
            return ["https://twitter.com/Things4WhitePpl/status/1116107411612295168", 413, 660,
                "https://medium.com/@angela.rae/the-miracle-of-life-779eda4f7ac3", 630, 700
            ];
        case 2:
            return ["https://twitter.com/angielourae/status/559442720100339712", 413, 804,
                "https://youtu.be/MFmr_TZLpS0?t=174&autoplay=1", 530, 804
            ];
        case 3:
            return ["https://www.youtube.com/watch?v=DkYqWRgiIz4&autoplay=1", 530, 804,
                "https://medium.com/migration-issues/avocado-toast-is-ruining-this-country-44fa82afd248", 700, 700
            ];
        case 4:
            return ["https://www.youtube.com/watch?v=bE4C8a48o1E", 530, 804,
                "https://www.etsy.com/listing/538957048/avocado-shirt-adidas-avocado-t-shirt", 613, 804
            ];
        case 5:
            return ["https://www.instagram.com/p/Bw0neCNBEwF/", 413, 804,
                "https://the-amateur-chef.tumblr.com/post/182735914097/the-father-and-the-son", 413, 804
            ];
        case 6:
            return ["https://youtu.be/DhaG_Zi6izU", 530, 804,
                "https://twitter.com/angielourae/status/1013942280284135424", 413, 804
            ];
        case 7:
            return ["https://www.refinery29.com/en-ca/2019/04/230021/oprah-avocado-orchard-daily-show", 413, 804,
                "https://youtu.be/Ih3dFWg3znI", 530, 804
            ];
        case 8:
            return ["https://www.delish.com/food-news/a26963442/millennialls-ignore-avocado-recall/", 413, 804,
                "https://www.redbubble.com/people/tartarbinks/works/21819235-avocado-scream", 413, 804
            ];
        case 9:
            return ["https://medium.com/@angela.rae/the-miracle-of-life-779eda4f7ac3", 413, 804,
                "https://www.vox.com/the-goods/2019/4/3/18293803/trump-closing-border-avocado-prices-shortage", 413, 804
            ];
        case 0:
            return ["https://docs.google.com/document/d/1RADjEKmTb5k2ddUc-iRGkulWpGMbfy9kUH895VSAx-E/edit?usp=sharing", 600, 500,
                "https://news.google.com/search?q=avocado", 600, 600
            ];
    }
}

function popup(url1, height1, width1, url2, height2, width2) {
    if (popupWindow) {
        popupWindow.close();
    }

    popupWindow = window.open(url1, "window1", 'height=' + height1 + ',width=' + width1 + ',\
    left=0,top=0,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,\
    location=no,directories=yes,status=no');

    popupWindow = window.open(url2, "window2", 'height=' + height2 + ',width=' + width2 + ',\
    left=600,top=300,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,\
    location=no,directories=yes,status=no');
}