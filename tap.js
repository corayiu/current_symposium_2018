var el = document.getElementById('volunteer'),
    myTap = new Tap(el);

    el.addEventListener('tap', tapDidOccur, false);
function tapDidOccur (e) {
    //your code
}

el.removeEventListener('tap', tapDidOccur, false);