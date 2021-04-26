function twitterLazyLoad(src) {

    const scriptTag = document.createElement('script');
    scriptTag.src = src;
    scriptTag.async = true;

    document.body.appendChild(scriptTag);alert(scriptTag);
}

function doTwitterLazyLoad() {

    const twitterEmbed = document.getElementsByClassName('twitter-tweet2');
    try {
        if (twitterEmbed.length !== 0) twitterLazyLoad('https://platform.twitter.com/widgets.js');
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener('scroll', doTwitterLazyLoad, { once: true });
/*
window.onload = function () {
    doTwitterLazyLoad();
}
*/