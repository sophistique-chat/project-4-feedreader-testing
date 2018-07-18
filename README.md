# **Feed Reader Testing**

### This is to accomplish Project 4 for Udacity Nanodegree course (Front-End Web Dev)
**Files:**

| File type | Description | File name |
| ------ | ------ |------ |
| HTML | Tests | index.html|
| Folder | Udacity supplied CSS Files Folder | /css |
| Folder | Udacity supplied JS Files Folder with the Source File | /js/app.js |
| Folder | Udacity supplied Fonts Folder | /fonts |
| Folder | Jasmine Testing Library Files Folder with the Spec File | /jasmine/spec/feedreader.js |

----
## **TESTS IMPLEMENTED ON THE FEEDREADER APPLICATION**
----
### 1) RSS Feeds:
 - tests to make sure that the `allFeeds` variable has been defined and that it is not empty.
 
### 2) The menu:
 - ensures the `menu` element is hidden by default;
 - ensures the `menu` changes visibility when the menu icon is clicked.
 
### 3) Initial Entries:
 - ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
 
### 4) New Feed Selection:
 - ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
----
----
## **How to run the application:**
----
* Download all nessessary files from [here];
* Open `index.html` in any browser to see if the tests implemented are actually passing:
    * the # of failures will indicate how many tests didn't pass;
* In order to review or edit the tests, open the `feedreader.js` file at `/jasmine/spec/feedreader.js`.
* For more information on how Jasmine testing library works, please visit Jasmine's [Getting Started Page].
* For more information about how to write tests, check on Udacity developed course [JavaScript Testing]
----
## **External libraries:**
----
- #### [JQuery]

- #### [Jasmine]

- #### [Handlebars.js]
----
----
## **Useful Sources:**
----
- [Stackoverflow]
- [W3Schools]
- [MDN]
- [Dillinger]
- [Google]
----
**All resources and ideas that needed attribution were mentioned above.**

----
_Developed by a proud Grow with Google scholarship recipient (USA, 2018)_

----
[JavaScript Testing]: <https://www.udacity.com/course/javascript-testing--ud549>
[Getting Started Page]: <https://jasmine.github.io/pages/getting_started.html>
[here]: <https://github.com/sophistique-chat/project-4-feedreader-testing.git>
[Stackoverflow]: <https://stackoverflow.com/>
[W3Schools]: <www.w3schools.com>
[MDN]: <https://developer.mozilla.org/>
[Dillinger]: <https://dillinger.io/>
[Google]: <www.google.com>
[JQuery]: <http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js>
[Jasmine]: <https://jasmine.github.io/>
[Handlebars.js]: <http://cdn.jsdelivr.net/handlebarsjs/2.0.0/handlebars.min.js>
