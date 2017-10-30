const drilID = '16298441';
const trumpID = '25073877';
const trumpAvatar = 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_bigger.jpg';
const drilAvatar = 'https://pbs.twimg.com/profile_images/847818629840228354/VXyQHfn0_bigger.jpg';

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations) {
    // find the username of tweeters on the page (not @, so for @dril this is "wint")
    var tweetUsernameList = document.getElementsByClassName('fullname show-popup-with-id ');
    for (index in tweetUsernameList) {
      // if @dril tweets, swap for @realDonaldTrump
      if (tweetUsernameList[index].parentElement && tweetUsernameList[index].parentElement.parentElement.getAttribute("data-user-id") === drilID) {
        if (tweetUsernameList[index].getAttribute("data-username-swapped") !== "true") {
          tweetUsernameList[index].innerHTML = 'Donald J. Trump';
          tweetUsernameList[index].setAttribute("data-username-swapped", "true");
        }
      }

      // if @realDonaldTrump tweets, swap for @dril
      if (tweetUsernameList[index].parentElement && tweetUsernameList[index].parentElement.parentElement.getAttribute("data-user-id") === trumpID) {
        if (tweetUsernameList[index].getAttribute("data-username-swapped") !== "true") {
          tweetUsernameList[index].innerHTML = 'wint';
          tweetUsernameList[index].setAttribute("data-username-swapped", "true");
        }
      }
    }

    // find the @handle or tweeters on the page (like @dril)
    var tweetHandleList = document.getElementsByClassName('username u-dir');
    for (index in tweetHandleList) {
      // if @dril tweets, swap for @realDonaldTrump
      if (tweetHandleList[index].parentElement && tweetHandleList[index].parentElement.getAttribute("data-user-id") === drilID) {
        if (tweetHandleList[index].getAttribute("data-handle-swapped") !== "true") {
          tweetHandleList[index].innerHTML = '@<b>realDonaldTrump</b>';
          tweetHandleList[index].setAttribute("data-handle-swapped", "true");
        }
      }

      // if @realDonaldTrump tweets, swap for @dril
      if (tweetHandleList[index].parentElement && tweetHandleList[index].parentElement.getAttribute("data-user-id") === trumpID) {
        if (tweetHandleList[index].getAttribute("data-handle-swapped") !== "true") {
          tweetHandleList[index].innerHTML = '@<b>dril</b>';
          tweetHandleList[index].setAttribute("data-handle-swapped", "true");
        }
      }
    }

    // find the avatars of tweeters on the page
    var tweetAvatarList = document.getElementsByClassName('avatar js-action-profile-avatar');
    for (index in tweetAvatarList) {
      // if @dril tweets, swap for @realDonaldTrump
      if (tweetAvatarList[index].parentElement && tweetAvatarList[index].parentElement.getAttribute("data-user-id") === drilID) {
        if (tweetAvatarList[index].getAttribute("data-avatar-swapped") !== "true") {
          tweetAvatarList[index].setAttribute("src", trumpAvatar);
          tweetAvatarList[index].setAttribute("data-avatar-swapped", "true");
        }
      }

      // if @realDonaldTrump tweets, swap for @dril
      if (tweetAvatarList[index].parentElement && tweetAvatarList[index].parentElement.getAttribute("data-user-id") === trumpID) {
        if (tweetAvatarList[index].getAttribute("data-avatar-swapped") !== "true") {
          tweetAvatarList[index].setAttribute("src", drilAvatar);
          tweetAvatarList[index].setAttribute("data-avatar-swapped", "true");
        }
      }
    }
});

observer.observe(document, {
  attributes: false,
  childList: true,
  characterData: false,
  subtree: true,
});
