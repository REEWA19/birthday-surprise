const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");
const openSurpriseBtn = document.getElementById("openSurpriseBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const finalBtn = document.getElementById("finalBtn");
const restartBtn = document.getElementById("restartBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");
const page6 = document.getElementById("page6");

const bigEnvelope = document.getElementById("bigEnvelope");


function showPage(pageToShow) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    pageToShow.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* PAGE 1 → PAGE 2 */

let firstEnvelopeOpening = false;

function openFirstEnvelope() {

    if (firstEnvelopeOpening) return;

    firstEnvelopeOpening = true;

    envelope.classList.add("open");

    setTimeout(function() {
        showPage(page2);
        firstEnvelopeOpening = false;
    }, 1200);
}

envelope.addEventListener("click", openFirstEnvelope);
openBtn.addEventListener("click", openFirstEnvelope);


/* PAGE 2 → PAGE 3 */

nextBtn.addEventListener("click", function() {
    showPage(page3);
});


/* PAGE 3 → PAGE 4 */

let bigEnvelopeOpening = false;

function openBigEnvelope() {

    if (bigEnvelopeOpening) return;

    bigEnvelopeOpening = true;

    bigEnvelope.classList.add("open");

    setTimeout(function() {
        showPage(page4);
        bigEnvelopeOpening = false;
    }, 1000);
}

bigEnvelope.addEventListener("click", openBigEnvelope);
openSurpriseBtn.addEventListener("click", openBigEnvelope);


/* PAGE 4 → PAGE 5 */

nextPageBtn.addEventListener("click", function() {
    showPage(page5);
});


/* PAGE 5 → PAGE 6 */

finalBtn.addEventListener("click", function() {
    showPage(page6);
});


/* REPLAY */

restartBtn.addEventListener("click", function() {

    envelope.classList.remove("open");
    bigEnvelope.classList.remove("open");

    showPage(page1);
});q
