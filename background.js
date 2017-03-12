/**
 * @file GoT: New Message Auto Show
 * @author Redsandro <info@redsandro.com> (http://www.Redsandro.com/)
 * @copyright Copyright (C) 2016 - 2017 Redsandro Media (http://www.Redsandro.com/)
 * @license MIT
 * @created 2015
 * @modified 2017-03-12
 */

/**
 * Active on pages:
 * - /forum/list_messages/12345/12
 * - /forum/list_messages/12345/last
 * - /forum/list_message/12345#12345
 */
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (~tab.url.indexOf('gathering.tweakers.net') && ~tab.url.indexOf('list_message'))
		chrome.pageAction.show(tabId);
});
