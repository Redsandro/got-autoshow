/**
 * @file GoT: New Message Auto Show
 * @author Redsandro <info@redsandro.com> (http://www.Redsandro.com/)
 * @copyright Copyright (C) 2016 - 2017 Redsandro Media (http://www.Redsandro.com/)
 * @license MIT
 * @created 2015
 * @modified 2017-03-12
 */

var s = document.createElement('script');
s.src = chrome.extension.getURL('inject.js');
(document.head || document.documentElement).appendChild(s);
s.onload = function() {
	s.parentNode.removeChild(s);
};
