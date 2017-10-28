// var btn = document.createElement("BUTTON")
// var t = document.createTextNode("CLICK ME");
// btn.appendChild(t);
// //Appending to DOM
// document.body.appendChild(btn);

// @dril data-user-id: 16298441
// @realDonaldTrump data-user-id: 25073877

// var list = document.querySelectorAll('[data-user-id="16298441"]');

// find the username of tweeters on the page (not @, so for @dril this is "wint")
var tweetUsernameList = document.getElementsByClassName('fullname show-popup-with-id ')

for (index in tweetUsernameList) {

  // @dril tweet
  if (tweetUsernameList[index].parentElement && tweetUsernameList[index].parentElement.parentElement.getAttribute("data-user-id") === '16298441') {
    tweetUsernameList[index].innerHTML = 'Donald J. Trump';
  }
}
