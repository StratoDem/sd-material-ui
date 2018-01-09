### Writing an integration test with selenium

Add an integration test to `test_integration.py` by adding a test function
to the Tests class. The tests give access to `self.startServer` which takes
a `dash.Dash` application and starts a Flask server with the dash application
running.

Using the waiter, `waiter(self.wait_for_element_by_id)`, selenium
waits until the div with the "waitfor" id to show up on the page, at which point
the Dash application has rendered to the DOM for the first time. Selenium can be used as normal at this point.

The tests tear down the server at the completion of the tests.

#### Environment
These tests require chromedriver to be found in the PATH variable.

The simplest way is to extract [`chromedriver`](https://chromedriver.storage.googleapis.com/index.html?path=2.34/)
at `/usr/local/bin`.
