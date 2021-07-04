document.addEventListener("DOMContentLoaded", () => {
    const s = document.querySelectorAll(".grid div"),
        c = document.querySelector("#time-left"),
        e = document.querySelector("#result"),
        a = document.querySelector("#button"),
        t = document.querySelector("#button1"),
        l = document.querySelectorAll(".car-left"),
        i = document.querySelectorAll(".car-right"),
        o = document.querySelectorAll(".log-left"),
        n = document.querySelectorAll(".log-right"),
        r = 9;
    let L,
        d = 76,
        m = 20;
    function u(c) {
        switch ((s[d].classList.remove("frog"), c.keyCode)) {
            case 37:
                d % r != 0 && (d -= 1);
                break;
            case 38:
                d - r >= 0 && (d -= r);
                break;
            case 39:
                d % r < r - 1 && (d += 1);
                break;
            case 40:
                d + r < r * r && (d += r);
        }
        s[d].classList.add("frog"), v(), s[4].classList.contains("frog") && ((e.innerHTML = "YOU WON"), s[d].classList.remove("frog"), clearInterval(L), document.removeEventListener("keyup", u));
    }
    function v() {
        (0 === m || s[d].classList.contains("c1") || s[d].classList.contains("l5") || s[d].classList.contains("l4")) && ((e.innerHTML = "YOU LOSE"), s[d].classList.remove("frog"), clearInterval(L), document.removeEventListener("keyup", u));
    }
    function f() {
        m--,
            (c.textContent = m),
            l.forEach((s) =>
                (function (s) {
                    switch (!0) {
                        case s.classList.contains("c1"):
                            s.classList.remove("c1"), s.classList.add("c2");
                            break;
                        case s.classList.contains("c2"):
                            s.classList.remove("c2"), s.classList.add("c3");
                            break;
                        case s.classList.contains("c3"):
                            s.classList.remove("c3"), s.classList.add("c1");
                    }
                })(s)
            ),
            i.forEach((s) =>
                (function (s) {
                    switch (!0) {
                        case s.classList.contains("c1"):
                            s.classList.remove("c1"), s.classList.add("c3");
                            break;
                        case s.classList.contains("c2"):
                            s.classList.remove("c2"), s.classList.add("c1");
                            break;
                        case s.classList.contains("c3"):
                            s.classList.remove("c3"), s.classList.add("c2");
                    }
                })(s)
            ),
            o.forEach((s) =>
                (function (s) {
                    switch (!0) {
                        case s.classList.contains("l1"):
                            s.classList.remove("l1"), s.classList.add("l2");
                            break;
                        case s.classList.contains("l2"):
                            s.classList.remove("l2"), s.classList.add("l3");
                            break;
                        case s.classList.contains("l3"):
                            s.classList.remove("l3"), s.classList.add("l4");
                            break;
                        case s.classList.contains("l4"):
                            s.classList.remove("l4"), s.classList.add("l5");
                            break;
                        case s.classList.contains("l5"):
                            s.classList.remove("l5"), s.classList.add("l1");
                    }
                })(s)
            ),
            n.forEach((s) =>
                (function (s) {
                    switch (!0) {
                        case s.classList.contains("l1"):
                            s.classList.remove("l1"), s.classList.add("l5");
                            break;
                        case s.classList.contains("l2"):
                            s.classList.remove("l2"), s.classList.add("l1");
                            break;
                        case s.classList.contains("l3"):
                            s.classList.remove("l3"), s.classList.add("l2");
                            break;
                        case s.classList.contains("l4"):
                            s.classList.remove("l4"), s.classList.add("l3");
                            break;
                        case s.classList.contains("l5"):
                            s.classList.remove("l5"), s.classList.add("l4");
                    }
                })(s)
            ),
            d >= 27 && d < 35 && (s[d].classList.remove("frog"), s[(d += 1)].classList.add("frog")),
            d > 18 && d <= 26 && (s[d].classList.remove("frog"), s[(d -= 1)].classList.add("frog")),
            v();
    }
    s[d].classList.add("frog"),
        a.addEventListener("click", () => {
            L ? clearInterval(L) : ((L = setInterval(f, 1e3)), document.addEventListener("keyup", u));
        }),
        t.addEventListener("click", () => {
            window.location.href = window.location.href;
        });
});
