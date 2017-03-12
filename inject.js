/**
 * @file GoT: New Message Auto Show
 * @author Redsandro <info@redsandro.com> (http://www.Redsandro.com/)
 * @copyright Copyright (C) 2016 - 2017 Redsandro Media (http://www.Redsandro.com/)
 * @license MIT
 * @created 2015
 * @modified 2017-03-12
 */

addXhrCallback(function(xhr) {
	setTimeout(function() {
		var json = JSON.parse(xhr.responseText);
		if (json.data && json.data.messages && json.data.messages.length) {
			var notification = document.getElementById('newMessageNotification');
			while ((message = json.data.messages.shift())) {
				el = document.createElement('div');
				el.innerHTML = Ajax.stripScripts(message);
				notification.parentNode.insertBefore(el, notification)
				notification.style.display = 'none'
				BehaviourManager.exec(el)
				messageBehaviourHandler.addBehaviour(el)
			}
		}
	}, 500)
});

function addXhrCallback(callback) {
	XMLHttpRequest.callbacks = XMLHttpRequest.callbacks || []
	XMLHttpRequest.callbacks.push(callback)
	if (XMLHttpRequest.callbacks.length > 1) return
	var _send = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.send = function() {
		XMLHttpRequest.callbacks.forEach(function(cb) {cb(this)}, this)
		_send.apply(this, arguments);
	}
}
