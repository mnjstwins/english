(function() {
'use strict';

var searchResultDOMElement = document.querySelector('#search-result');

/**
 * Starts page refresh to display information about the word
 */
function searchWord() {
	clearSearchResult();
	showLoadingMessage();
}

function clearSearchResult() {
	searchResultDOMElement.innerHTML = ''
}

function showLoadingMessage() {
	searchResultDOMElement.innerHTML = 'Loading data...'
}

window.searchWord = searchWord
})();