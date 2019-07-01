# Caching
- You have started an analytics company with the domain “hashtag­analytics.com”. You provide this tracking pixel for your customers to place on their websites. By summing the number of times the pixel was loaded, you calculate the number of visitors to each site.

   ```
   <img src=”http://hashtag­analytics.com/12345/pixel.gif” width=”1” height=”1”/>
   ```

- As it stands, this pixel has a problem because it will be cached by the browser.

1. Why is caching a problem for the analytics company?
- If the same user visits the site, the pixel will not be tracked beacues the pixel was cached.
2. How could you prevent browser caching? (use any technique(s) you want)
- Adding a timestamp to the img will disable caching of the pixel.
3. What will happen if the customer’s website is served over HTTPS? How could you modify the tracking pixel to fix that?
- Secure sites will block the pixel.  Hosting the pixel on a secure server will by-pass this.
4. List some information the tracking company could collect (ex: IP address)
- Date and Time the site was visited
- Client’s screen resolution
- Type of device used (mobile or desktop)
- Operating system used
5. List some additional information (if any) that could be collected if a <script> tag is used instead of an <img> tag.
- More information can be collected using a script tag.  It also makes it possible to differentiate between real users and bots. Script tags also automatically use HTTP or HTTPS as required for the page they are placed on.
