import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import About from "./views/About.js";
import Guides from "./views/Guides.js";
import None from "./views/None.js";

const defaultLocale = "en";

let locale;

let translations = {};

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/none", view: None },
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/posts/:id", view: PostView },
        { path: "/guides", view: Guides },
        { path: "/about", view: About },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getHtml();
    translatePage();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", async () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    
    await setLocale(defaultLocale);
    bindLocaleSwitcher(defaultLocale);
    router();
});

function bindLocaleSwitcher(initialValue) {
    const switcher =
      document.querySelector("[data-i18n-switcher]");
    switcher.value = initialValue;
    switcher.onchange = (e) => {
      setLocale(e.target.value);
    };
  }

async function setLocale(newLocale) {
    if (newLocale === locale) return;
    const newTranslations = await fetchTranslationsFor(newLocale);
    locale = newLocale;
    translations = newTranslations;
    translatePage();
}

async function fetchTranslationsFor(newLocale) {
    const response = await fetch(`/static/lang/${newLocale}.json`);
    if (!response.ok) {
        throw new Error(`Failed to fetch translations for ${newLocale}.`);
    }
    return await response.json();
}

function translatePage() {
    document
        .querySelectorAll("[data-i18n-key]")
        .forEach(translateElement);
}

function translateElement(element) {
    const key = element.getAttribute("data-i18n-key");
    const translation = translations[key];
    element.innerHTML = translation;
}