("" == document.location.hash || "#" == document.location.hash) && (document.location.hash = "/portal/");

document.getElementById("navi").onclick = function () {
    myFunction()
};

function myFunction() {
    document.getElementById("navigation").classList.toggle("show")
}
window.onclick = function (event) {
    if (!event.target.matches(".left")) {
        var dropdowns = document.getElementsByClassName("drawer");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show")
            }
        }
    }
};

var svgs = document.querySelectorAll("svg");
for (var i = 0, l = svgs.length; i < l; i++) {
    (function (svg) {
        svg.addEventListener("focus", function () {
            console.log("focus:" + svg.tabIndex)
        })
    })(svgs[i])
}
var inputId = "search";
var itemsData = "filter";
var displaySet = false;
var displayArr = [];

function getDisplayType(element) {
    var elementStyle = element.currentStyle || window.getComputedStyle(element, "");
    return elementStyle.display
}
document.getElementById(inputId).onkeyup = function () {
    var searchVal = this.value.toLowerCase();
    var filterItems = document.querySelectorAll("[" + itemsData + "]");
    for (var i = 0; i < filterItems.length; i++) {
        if (!displaySet) {
            displayArr.push(getDisplayType(filterItems[i]))
        }
        filterItems[i].style.display = "none";
        if (filterItems[i].getAttribute("filter").indexOf(searchVal) >= 0) {
            filterItems[i].style.display = displayArr[i]
        }
    }
    displaySet = true
};
/*
var PostToCodepen = function () {
    var e, t, n, a, r, s, o = document.getElementsByClassName("pen"),
        u = function (e) {
            var t = document.createElement("form"),
                n = document.createElement("input"),
                i = document.createElement("button"),
                a = document.createDocumentFragment();
            t.setAttribute("action", "https://codepen.io/pen/define"), t.setAttribute("method", "POST"), t.setAttribute("target", "_blank"), n.setAttribute("type", "hidden"), n.setAttribute("name", "data"), n.setAttribute("value", s), t.appendChild(n), i.setAttribute("class", "codepen"), t.appendChild(i), a.appendChild(t), e.appendChild(a)
        },
        c = function (e) {
            var t = JSON.stringify(e);
            return t = t.replace(/"/g, "&quot;"), t = t.replace(/'/g, "&apos;")
        },
        l = function () {
            for (i = 0, len = o.length; i < len; i++) {
                var l = {
                    title: "SVG Icons & Logos by SVG.LIFE",
                    description: "More SVG - https://svg.life/",
                    css: "svg {width:100vw; height:100vh}"
                };
                e = o[i].getElementsByClassName("data");
                for (var d = 0, p = e.length; p > d; d++) t = e[d], n = t.getAttribute("type"), a = t.firstChild, r = a.innerHTML, r.length > 0 && (l[n] = r);
                s = c(l), u(o[i])
            }
        };
    return {
        please: l
    }
}();
PostToCodepen.please();

WebFontConfig = {
    google: {
        families: ["Roboto+Mono::latin"]
    }
};
(function () {
    var wf = document.createElement("script");
    wf.src = "https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    wf.type = "text/javascript";
    wf.async = "true";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wf, s)
})();
*/