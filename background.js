// Listener for browser action click
chrome.action.onClicked.addListener(() => {
	// Search for the 'Startup' folder in bookmarks
	chrome.bookmarks.search({ title: 'Startup' }, (bookmarks) => {
		for (let bookmark of bookmarks) {
			if (bookmark.url) {
				continue; // Skip individual bookmarks, we are looking for a folder
			}
			// Get all bookmarks in the 'Startup' folder
			chrome.bookmarks.getChildren(bookmark.id, (children) => {
				children.forEach(child => {
					// Check if a tab with the same domain is already open
					chrome.tabs.query({}, (tabs) => {
						const urlObj = new URL(child.url);
						const isTabOpen = tabs.some(tab => new URL(tab.url).hostname === urlObj.hostname);

						// Open a new tab if no tab with the same domain is open
						if (!isTabOpen) {
							chrome.tabs.create({ url: child.url, pinned: true });
						}
					});
				});
			});
			break; // Assuming there's only one 'Startup' folder
		}
	});
});