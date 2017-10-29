// @dril data-user-id: 16298441
// @realDonaldTrump data-user-id: 25073877

const trumpAvatar = 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_bigger.jpg';

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations) {
    // fired when a mutation occurs
    console.log(mutations);

    // find the username of tweeters on the page (not @, so for @dril this is "wint")
    var tweetUsernameList = document.getElementsByClassName('fullname show-popup-with-id ');
    for (index in tweetUsernameList) {
      // swap @dril tweets
      if (tweetUsernameList[index].parentElement && tweetUsernameList[index].parentElement.parentElement.getAttribute("data-user-id") === '16298441') {
        if (tweetUsernameList[index].getAttribute("data-username-swapped") !== "true") {
          tweetUsernameList[index].innerHTML = 'Donald J. Trump';
          tweetUsernameList[index].setAttribute("data-username-swapped", "true");
        }
      }
    }

    // find the @handle or tweeters on the page (like @dril)
    var tweetHandleList = document.getElementsByClassName('username u-dir');
    for (index in tweetHandleList) {
      // swap @dril tweets
      if (tweetHandleList[index].parentElement && tweetHandleList[index].parentElement.getAttribute("data-user-id") === '16298441') {
        if (tweetHandleList[index].getAttribute("data-handle-swapped") !== "true") {
          tweetHandleList[index].innerHTML = '@<b>realDonaldTrump</b>';
          tweetHandleList[index].setAttribute("data-handle-swapped", "true");
        }
      }
    }

    // find the avatars of tweeters on the page
    var tweetAvatarList = document.getElementsByClassName('avatar js-action-profile-avatar');
    for (index in tweetAvatarList) {
      console.log('we in avatar')
      // swap @dril tweets
      if (tweetAvatarList[index].parentElement && tweetAvatarList[index].parentElement.getAttribute("data-user-id") === '16298441') {
        if (tweetAvatarList[index].getAttribute("data-avatar-swapped") !== "true") {
          console.log(tweetAvatarList[index])
          console.log('setting avatar')
          console.log(trumpAvatar)
          tweetAvatarList[index].setAttribute("src", trumpAvatar);
          tweetAvatarList[index].setAttribute("data-avatar-swapped", "true");
        }
      }
    }
});

console.log('Help Im trapped in the dev tools and cant find a way out');

// geteElementById('timeline') will take care of the infinite scroll problem
//  but I don't think it will take care of page change problems
observer.observe(document, {
  attributes: false,
  childList: true,
  characterData: false,
  subtree: true,
});
