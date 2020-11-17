import '../css/result.css';
import qrcode from 'qrcode-generator'

const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);

const firstName = urlParams.get("fname");
const lastName = urlParams.get("lname");
const email = urlParams.get("email");
const twitter = urlParams.get("twitter");
const github = urlParams.get("github");


document.getElementById("fname").innerHTML = firstName;
document.getElementById("lname").innerHTML = lastName;
document.getElementById("email").innerHTML = email;
document.getElementById("twitter").innerHTML = twitter;
document.getElementById("twitter-a").setAttribute("href", ("https://www.twitter.com/" + (twitter.replace("@", ""))));
document.getElementById("github").innerHTML = github;

document.getElementById("github-a").setAttribute("href", ("https://www.github.com/" + (github.replace("@", ""))));


var data = "https://jtte-qrcodebadge.netlify.app/result.html?" +        "fname=" + firstName +
                "&lname=" + lastName +      "&email=" + email +
                "&twitter=" + twitter +     "&github=" + github;

var typeNumber = 13;
var errorCorrectionLevel = 'L';
var qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData(data);
qr.make();
document.getElementById('qrcode').innerHTML = qr.createImgTag();