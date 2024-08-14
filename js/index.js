var page = 0;
var leftPage = document.getElementById("leftPage");
var rightPage = document.getElementById("rightPage");

function left() {
    page = Math.max(page - 1, 0)
    console.log(page);

    leftPage.src = "pages/" + (2 * page).toString() + ".png";
    rightPage.src = "pages/" + (2 * page + 1).toString() + ".png";
}

function right() {
    page = Math.min(page + 1, 7)
    console.log(page);

    leftPage.src = "pages/" + (2 * page).toString() + ".png";
    rightPage.src = "pages/" + (2 * page + 1).toString() + ".png";
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