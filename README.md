# Questions

1. What is the difference between HTTP and HTTPS?
- HTTPS transfers data between computers over the internet in an encrypted format, making it "Secure" whereas HTTP does not, making it more vulnerable to attacks.
2. What is the difference between HTTP GET and POST?
- GET requests are used to request / retrieve data, POST requests are used to insert / update remote data.  
3. What is the difference between the HTTP 2xx status codes and 4xx status codes?
- 2xx Messages mean successful communication between the client and the server, while 4xx status codes mean client-side errors.
4. What is ajax (conceptually, what does it do)? Describe a situation where it is useful.
- An AJAX requests is the use of the XMLHttpRequest object to communicate with servers.  It is done Asynchronously so that a page can be updated without having to refresh or reload the page.
5. What is responsive design?
- Responsive design means that all pages on the site will look good on all devices (laptop, desktop, mobile, tablet...)
6. What is the difference between these 3 CSS rules?
- ```div {background:#fff;} ``` : All DIV elements
- ```#div {background:#fff;} ``` : Elements with an id attribute of div (id="div")
- ```.div {background:#fff;}``` : Elements with a class attribute of div (class="div")
7. What is the difference between these 2 uses of the <script> tag?
- ```<script src=”http://example.com/whatever.js”></script>``` : points to an external script file
- ```<script>var whatever = true</script>``` : declares the script to run
8. What is the difference between these two javascript snippets?
-  ``` var x = function()
  { return 1+1;
  }(); ``` : calls back function x and will run it, returning 2.
- ``` var y = function() 
  { return 1+1;
  };``` : does not call back function y and will not run it.
