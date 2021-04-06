const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// Nav
let navAll = document.querySelectorAll("nav > a");
navAll[0].textContent = siteContent["nav"]["nav-item-1"];
navAll[1].textContent = siteContent["nav"]["nav-item-2"];
navAll[2].textContent = siteContent["nav"]["nav-item-3"];
navAll[3].textContent = siteContent["nav"]["nav-item-4"];
navAll[4].textContent = siteContent["nav"]["nav-item-5"];
navAll[5].textContent = siteContent["nav"]["nav-item-6"];

// cta img
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// cta text
let ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"]

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"]

// main content headings
let mainHead = document.querySelectorAll(".main-content h4");
mainHead[0].textContent = siteContent["main-content"]["features-h4"];

mainHead[1].textContent = siteContent["main-content"]["about-h4"];

mainHead[2].textContent = siteContent["main-content"]["services-h4"];

mainHead[3].textContent = siteContent["main-content"]["product-h4"];

mainHead[4].textContent = siteContent["main-content"]["vision-h4"];

// main content text
let mainText = document.querySelectorAll(".main-content p")
mainText[0].textContent = siteContent["main-content"]["features-content"];

mainText[1].textContent = siteContent["main-content"]["about-h4"];

mainText[2].textContent = siteContent["main-content"]["services-content"];

mainText[3].textContent = siteContent["main-content"]["product-content"];

mainText[4].textContent = siteContent["main-content"]["vision-content"];

// middle img
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// top content

// bottom content