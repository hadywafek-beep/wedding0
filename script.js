/* =====================================================
   OPEN INVITATION
===================================================== */

const openButton = document.getElementById("openButton");
const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");
const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");

if (openButton) {

    openButton.addEventListener("click", function () {

        opening.classList.add("hide");

        setTimeout(() => {

            invitation.classList.add("show");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 500);

        if (music) {
            music.play().catch(() => {});
        }

    });

}


/* =====================================================
   MUSIC
===================================================== */

let musicPlaying = false;

if (musicButton && music) {

    musicButton.addEventListener("click", function () {

        if (musicPlaying) {

            music.pause();

            musicButton.innerHTML = "♪";

            musicPlaying = false;

        } else {

            music.play().catch(() => {});

            musicButton.innerHTML = "❚❚";

            musicPlaying = true;

        }

    });

}


/* =====================================================
   COUNTDOWN
===================================================== */

const weddingDate =
    new Date("October 11, 2026 20:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference =
        weddingDate - now;

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {
        return;
    }


    if (difference <= 0) {

        daysElement.innerText = "00";
        hoursElement.innerText = "00";
        minutesElement.innerText = "00";
        secondsElement.innerText = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


    daysElement.innerText =
        String(days).padStart(2, "0");

    hoursElement.innerText =
        String(hours).padStart(2, "0");

    minutesElement.innerText =
        String(minutes).padStart(2, "0");

    secondsElement.innerText =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =====================================================
   SCROLL ANIMATIONS
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   GOOGLE MAPS
===================================================== */

const mapButton =
    document.getElementById("mapButton");

if (mapButton) {

    mapButton.addEventListener("click", function () {

        const mapURL =
            "https://maps.app.goo.gl/pCK4Htir4b8ZnXjM6";

        window.open(
            mapURL,
            "_blank"
        );

    });

}


/* =====================================================
   RSVP
===================================================== */

const rsvpButton =
    document.getElementById("rsvpButton");

if (rsvpButton) {

    rsvpButton.addEventListener("click", function () {

        const phone =
            "201000000000";

        const message =
            encodeURIComponent(
                "Hello Paula & Shery ❤️ I confirm my attendance."
            );

        window.open(
            `https://wa.me/${phone}?text=${message}`,
            "_blank"
        );

    });

}


/* =====================================================
   ADD TO CALENDAR
===================================================== */

const calendarButton =
    document.getElementById("calendarButton");

if (calendarButton) {

    calendarButton.addEventListener(
        "click",
        function () {

            const title =
                encodeURIComponent(
                    "Paula & Shery Wedding"
                );

            const details =
                encodeURIComponent(
                    "Wedding celebration of Paula & Shery"
                );

            const location =
                encodeURIComponent(
                    "Wedding Reception"
                );

            const url =
                "https://calendar.google.com/calendar/render" +
                "?action=TEMPLATE" +
                "&text=" + title +
                "&dates=20261011T200000/20261011T230000" +
                "&details=" + details +
                "&location=" + location;

            window.open(
                url,
                "_blank"
            );

        }
    );

}


/* =====================================================
   GUESTBOOK → WHATSAPP
===================================================== */

const wishForm =
    document.getElementById("wishForm");

if (wishForm) {

    wishForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("guestName")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("guestMessage")
                    .value
                    .trim();


            const recipient =
                document.querySelector(
                    'input[name="recipient"]:checked'
                );


            if (!name || !message) {

                alert(
                    "Please enter your name and message."
                );

                return;
            }


            if (!recipient) {

                alert(
                    "Please choose Groom or Bride."
                );

                return;
            }


            /* Groom */

            const groomNumber =
                "201065151761";


            /* Bride */

            const brideNumber =
                "201553829562";


            let phoneNumber = "";


            if (recipient.value === "groom") {

                phoneNumber =
                    groomNumber;

            }


            if (recipient.value === "bride") {

                phoneNumber =
                    brideNumber;

            }


            if (!phoneNumber) {

                alert(
                    "WhatsApp number is not added yet."
                );

                return;
            }


            const whatsappMessage =
                "Wedding Guestbook 💍\n\n" +
                "Name: " + name + "\n\n" +
                "Message:\n" + message;


            const whatsappURL =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}