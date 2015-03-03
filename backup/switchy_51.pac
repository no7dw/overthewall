function regExpMatch(url, pattern) {
	try { return new RegExp(pattern).test(url); } catch(ex) { return false; }
}

function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*.google.com.hk/*") || shExpMatch(url, "*://google.com.hk/*")) return 'PROXY 192.168.1.51:8080';
    if (shExpMatch(url, "*.google.com/*") || shExpMatch(url, "*://google.com/*")) return 'PROXY 192.168.1.51:8080';
    if (shExpMatch(url, "*.gmail.com/*") || shExpMatch(url, "*://gmail.com/*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.youtube.com/*") || shExpMatch(url, "*://youtube.com/*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.youtube-nocookie.com/*") || shExpMatch(url, "*://youtube-nocookie.com/*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.googlevideo.com/*") || shExpMatch(url, "*://googlevideo.com/*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.facebook.com/*") || shExpMatch(url, "*://facebook.com/*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.facebook.net/*") || shExpMatch(url, "*://facebook.net/*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.ytimg.com/*") || shExpMatch(url, "*://ytimg.com/*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.fbcdn.net/*") || shExpMatch(url, "*://fbcdn.net/*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.twitter.com/*") || shExpMatch(url, "*://twitter.com/*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.wordpress.com/*") || shExpMatch(url, "*://wordpress.com/*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.apigee.com/*") || shExpMatch(url, "*://apigee.com/*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.doxygen.org*") || shExpMatch(url, "*://doxygen.org*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.qq.com*") || shExpMatch(url, "*://qq.com*")) return 'DIRECT';
	if (shExpMatch(url, "*.blogspot.com*") || shExpMatch(url, "*://blogspot.com*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.casperjs.org*") || shExpMatch(url, "*://casperjs.org*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.sourceforge.net*") || shExpMatch(url, "*://sourceforge.net*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.cloudflare.com*") || shExpMatch(url, "*://cloudflare.com*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "cdn.appstorm.net*") || shExpMatch(url, "*://cdn.appstorm.net*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.joomla.org*") || shExpMatch(url, "*://joomla.org*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.joomlacode.org*") || shExpMatch(url, "*://joomlacode.org*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.slideshare.net*") || shExpMatch(url, "*://slideshare.net*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.pttrns.com*") || shExpMatch(url, "*://pttrns.com*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.trellocdn.com*") || shExpMatch(url, "*://trellocdn.com*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.duineframework.org*") || shExpMatch(url, "*://duineframework.org*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.vimeo.com*") || shExpMatch(url, "*://vimeo.com*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.gstatic.com*") || shExpMatch(url, "*://gstatic.com*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.openvpn.net*") || shExpMatch(url, "*://openvpn.net*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*.android.com*") || shExpMatch(url, "*://android.com*")) return 'PROXY 192.168.1.51:8080';
	if (shExpMatch(url, "*")) return 'DIRECT';
	return 'DIRECT';
}
