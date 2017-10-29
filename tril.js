// @dril data-user-id: 16298441
// @realDonaldTrump data-user-id: 25073877

// var list = document.querySelectorAll('[data-user-id="16298441"]');

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations) {
    // fired when a mutation occurs
    console.log(mutations);

    // find the username of tweeters on the page (not @, so for @dril this is "wint")
    var tweetUsernameList = document.getElementsByClassName('fullname show-popup-with-id ')
    for (index in tweetUsernameList) {
      if (tweetUsernameList[index].parentElement && tweetUsernameList[index].parentElement.parentElement.getAttribute("data-user-id") === '16298441') {
        if (tweetUsernameList[index].getAttribute("data-username-swapped") !== "true") {
          tweetUsernameList[index].innerHTML = 'Donald J. Trump';
          tweetUsernameList[index].setAttribute("data-username-swapped", "true");
        }
      }
    }

    // find the @handle or tweeters on the page (like @dril)
});

console.log('Help Im trapped in the dev tools and cant find a way out');

// var list = document.getElementsByClassName('stream-items js-navigable-stream');
// console.log(list)

// geteElementById('timeline') will take care of the infinite scroll problem
//  but I don't think it will take care of page change problems
observer.observe(document.getElementById('timeline'), {
  attributes: false,
  childList: true,
  characterData: false,
  subtree: true,
});

// // find the username of tweeters on the page (not @, so for @dril this is "wint")
// var tweetUsernameList = document.getElementsByClassName('fullname show-popup-with-id ')
//
// for (index in tweetUsernameList) {
//   // @dril tweet
//   if (tweetUsernameList[index].parentElement && tweetUsernameList[index].parentElement.parentElement.getAttribute("data-user-id") === '16298441') {
//     tweetUsernameList[index].innerHTML = 'Donald J. Trump';
//   }
// }
