# Chrome Extension: Startup tools

## Description

Auto Tab Management is a Chrome extension that automates the opening of a predefined set of URLs in new tabs. It ensures that these URLs are only opened if there is not already a tab open with the same domain, preventing duplication and clutter.

This extension was something I wanted to create for my own needs and so it may have limited utility for others. There maybe other similar scripts in the chrome store, however I am uncomfortable using most third party chrome extensions. 

## Features

*   **Automated Tab Opening**: Opens a set of predefined URLs in new tabs with a single click on the extension icon.
*   **Domain Duplication Check**: Checks for existing tabs with the same domain and prevents opening a new one, reducing clutter.
*   **Customizable URL List**: The list of URLs to open is fetched from the "Startup" bookmarks folder, allowing for easy customization.

## Installation

1.  Download and unpack the extension files.
2.  Open Google Chrome and navigate to `chrome://extensions/`.
3.  Enable "Developer mode" at the top-right corner.
4.  Click "Load unpacked" and select the directory containing the extension files.
5.  Create a "Startup" folder in Chrome bookmarks and add the URLs you wish to open.

## Usage

Click the extension icon to open the set of predefined URLs. Tabs will open only if their domain is not already open in another tab.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
William Owen (wo.dev)