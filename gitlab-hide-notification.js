// ==UserScript==
// @name         GitLab - Hide notification
// @namespace    http://gl.sds.rocks/
// @version      0.2.5
// @description  Hide notification functionality for GitLab. Works with GitLab CE 8.9.4.
// @author       Tomislav Pavlović <tomislav.pavlovic@styria.hr>
// @match        https://gitlab.com/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/spark-md5/2.0.2/spark-md5.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.2/js.cookie.min.js
// @updateURL    https://cdn.rawgit.com/ajhi/gitlab-hide-notification-user-script/master/gitlab-hide-notification.js
// ==/UserScript==

(function() {
    'use strict';

    var confirmMessage = 'Are you sure you want to hide this message?';
    var $bm = $('.broadcast-message');
    var msgHash = md5($bm.html());
    var msgText = $bm.text().trim();
    var cookieKey = 'read_' + msgHash;
    var messageRead = Boolean(Cookies.get(cookieKey));

    function hideMessage() {
        $bm.hide();
    }

    function showMessage() {
        $bm.show();
    }

    function addHideButton() {
        var $btn = $('<p><a class="btn" href="#"><i class="fa fa-check-square"></i></a></p>').css({
            'position': 'absolute',
            'top': '4px',
            'right': '4px',
            'color': '#959494'
        });
        $bm.append($btn);

        $btn.on('click', function(){
            if (confirm(confirmMessage)) {
                Cookies.set(cookieKey, true);
                hideMessage();
                addShowButton();
            }
        });
    }

    function addShowButton() {
        if ($('.message-broadcast-show').length) {
            return;
        }

        var $showBtn = $('<p class="message-broadcast-show"><a class="btn btn-small"><span>●</span>&nbsp; Show message </a></p>').css({
            'text-align': 'center',
            'padding-top': '5px'
        }).attr('title', msgText);

        $bm.after($showBtn);
        var $indicator = $showBtn.find('a span');
        $indicator.css('color', $bm.css('background-color'));
        $showBtn.on('click', function() {
            showMessage();
            $showBtn.remove();
            Cookies.remove(cookieKey);
        });
    }

  	function prepareMessage() {
        $bm.css({
            'position': 'relative',
            'padding-right': '44px'
        });
    }

    prepareMessage();
    addHideButton();

    if(messageRead) {
        hideMessage();
        addShowButton();
    }

})();
