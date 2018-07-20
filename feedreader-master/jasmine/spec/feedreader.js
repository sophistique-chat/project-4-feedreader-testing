/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
/* This is our first test suite - a test suite just contains
* a related set of tests. This suite is all about the RSS
* feeds definitions, the allFeeds variable in our application.
*/
        /*-----------RSS FEEDS------------*/

    describe('RSS Feeds', function () {
/* This is our first test - it tests to make sure that the
* allFeeds variable has been defined and that it is not
* empty. Experiment with this before you get started on
* the rest of this project. What happens when you change
* allFeeds in app.js to be an empty array and refresh the
* page?
*/
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
    });

/* A test that loops through each feed
* in the allFeeds object and ensures it has a URL defined
* and that the URL is not empty.
*/
        it('has a URL defined and not empty', function () {
            for (var feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

/* A test that loops through each feed
* in the allFeeds object and ensures it has a name defined
* and that the name is not empty.
*/
        it('has a name defined and not empty', function () {
            for (var feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

        /*----------END RSS FEEDS-----------*/

        /*------------THE MENU-------------*/

/* A test suite "The menu" */
    describe('The menu', function () {
/* A test that ensures the menu element is
* hidden by default.
*/
    var body = $('body');
        it('is hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
/* A test that ensures the menu changes
* visibility when the menu icon is clicked. This test
* has two expectations: does the menu display when
* clicked and does it hide when clicked again.
*/
        it('changes visibility when the menu icon is clicked', function () {
            var icon = $('.menu-icon-link');
            icon.click();
                expect(body.hasClass('menu-hidden')).toEqual(false);
            icon.click();
                expect(body.hasClass('menu-hidden')).toEqual(true);
        });
    });

        /*------------END THE MENU-------------*/

        /*------------INITIAL ENTRIES-------------*/

/* A test suite "Initial Entries" */
    describe('Initial Entries', function () {
/* A test that ensures when the loadFeed
* function is called and completes its work, there is at least
* a single .entry element within the .feed container.
* Since loadFeed() is asynchronous this test
* uses Jasmine's beforeEach and asynchronous done() function.
*/
    beforeEach(function(done) {
        var id = 0;
    loadFeed(id, function() {
        done();
    });
});

        it('has at least a single .entry element within the .feed container', function(done) {
            var feedBox = $('.feed').html(),
                entry = $('.entry').html(),
                feedBoxEntry = $('.feed .entry').length;
            expect(feedBox.length).not.toBe(0);
            expect(entry.length).not.toBe(0);
            expect(feedBox).toContain('entry');
            expect(feedBoxEntry).toBeGreaterThan(0);
            done();
        });
    });

        /*------------END INITIAL ENTRIES-------------*/

        /*------------NEW FEED SELECTION-------------*/

/* A test suite "New Feed Selection" */
    describe('New Feed Selection', function() {
        var feedOne,
            feedTwo;
/* A test that ensures when a new feed is loaded
* by the loadFeed function that the content actually changes.
* Since loadFeed() is asynchronous this test
* uses Jasmine's beforeEach and asynchronous done() function.
*/
    beforeEach(function(done) {
    loadFeed(0, function() {
        feedOne = $('.feed').html();
        loadFeed(1, function() {
            feedTwo = $('.feed').html();
                    done();
        });
    });
});

        it('loads content each time loadFeed executes', function(done) {
            expect(feedOne.length).not.toBe(0);
            done();
        });

        it('has new content each time loadFeed executes', function(done) {
            expect(feedTwo.length).not.toBe(0);
            expect(feedOne).not.toEqual(feedTwo);
            done();
        });
    });

        /*------------END NEW FEED SELECTION-------------*/
            }());
