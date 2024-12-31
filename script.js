"use strict";
(function () {
  const verifiedFollowersURLRegex = /https:\/\/x\.com\/.+\/verified_followers/;
  const isTwitterVerifiedFollowersPage = window.href
    .location()
    .matches(verifiedFollowersURLRegex);
  if (!isTwitterVerifiedFollowersPage) return null;
})();
