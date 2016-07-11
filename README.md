# gitlab-hide-notification-user-script
Hide notification functionality for GitLab. Works with GitLab CE 8.9.4.

## How to install

### Prerequisite
* Installed Tampermonkey or Greasemonkey extension

### Instalation 

If you have [Tampermonkey](http://tampermonkey.net) or [Greasemonkey](http://www.greasespot.net) installed, you can use this URL directly: https://cdn.rawgit.com/ajhi/gitlab-hide-notification-user-script/master/gitlab-hide-notification.user.js. Just follow instructions. 

Don't forget to add custom user match if your GitLab installation has a custom URL (different from `https://gitlab.com/*`). For example: if your site is hosted on https://mygitlab.company.com, you should add `https://mygitlab.company.com/*` as a user match for this script.

The script will update automatically once you installed it. 

If automatic installation fails, you can use manual installation. Here are guides:
* [Tampermonkey](http://tampermonkey.net/faq.php?ext=dhdg#Q102) (Chrome, Safari, Firefox...) 
* [Greasemonkey](https://wiki.greasespot.net/Greasemonkey_Manual:Installing_Scripts) (Firefox)
