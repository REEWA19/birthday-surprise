/* =====================================================
   ELEMENTS
   ===================================================== */

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


/* =====================================================
   CHANGE PAGE FUNCTION
   ===================================================== */

function showPage(pageToShow) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    pageToShow.classList.add("active");
}


/* =====================================================
   PAGE 1 → PAGE 2
   ===================================================== */

function openFirstEnvelope() {

    envelope.classList.add("open");

    setTimeout(function() {

        showPage(page2);

    }, 1200);
}


envelope.addEventListener(
    "click",
    openFirstEnvelope
);


openBtn.addEventListener(
    "click",
    openFirstEnvelope
);


/* =====================================================
   PAGE 2 → PAGE 3
   ===================================================== */

nextBtn.addEventListener(
    "click",
    function() {

        showPage(page3);

    }
);


/* =====================================================
   PAGE 3 → PAGE 4
   ===================================================== */

function openBigEnvelope() {

    bigEnvelope.classList.add("open");

    setTimeout(function() {

        showPage(page4);

    }, 1000);
}


bigEnvelope.addEventListener(
    "click",
    openBigEnvelope
);


openSurpriseBtn.addEventListener(
    "click",
    openBigEnvelope
);


/* =====================================================
   PAGE 4 → PAGE 5
   ===================================================== */

nextPageBtn.addEventListener(
    "click",
    function() {

        showPage(page5);

    }
);


/* =====================================================
   PAGE 5 → PAGE 6
   ===================================================== */

finalBtn.addEventListener(
    "click",
    function() {

        showPage(page6);

    }
);


/* =====================================================
   REPLAY BUTTON
   ===================================================== */

restartBtn.addEventListener(
    "click",
    function() {

        envelope.classList.remove("open");

        bigEnvelope.classList.remove("open");

        showPage(page1);

    }
);