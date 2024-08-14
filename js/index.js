var page = 0;
var leftPage = document.getElementById("leftPage");
var rightPage = document.getElementById("rightPage");

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

var type = ".jpg"

if (params.png == "true") {
    type = ".png"

    leftPage.src = "pages/0.png";
    rightPage.src = "pages/1.png";
}

function left() {
    page = Math.max(page - 1, 0)
    console.log(page);

    leftPage.src = "pages/" + (2 * page).toString() + type;
    rightPage.src = "pages/" + (2 * page + 1).toString() + type;
}

function right() {
    page = Math.min(page + 1, 7)
    console.log(page);

    leftPage.src = "pages/" + (2 * page).toString() + type;
    rightPage.src = "pages/" + (2 * page + 1).toString() + type;
}

function min(a, b) {
    if (a > b) {
        return b;
    }

    return a;
}

function max(a, b) {
    if (a < b) {
        return b;
    }

    return a;
}