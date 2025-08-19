# Basic HTTP Authentication

Did you know that HTTP provides the means to do basic (username / password) authentication on websites?

It used to be super common, but it's not anymore.

Your browser will collect username and password from you and send it to the website in a string that looks like this:

```
ZmxhZzp0aGlzX3VzZWRfdG9fYmVfY29tbW9ubHlfdXNlZA==
```

1. Can you decode it? 

2. Why is it not used anymore?

3. Why is it especially dangerous over http:// (instead of https://)?