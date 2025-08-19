
# Passwords in UNIX and Linux
UNIX and UNIX-like OS's (Linux, etc.) used to store passwords in the file ```/etc/passwd``` . They no longer do this, instead saving the passwords in ```/etc/shadow```

* What's the reason for this?

Have the students do

```
cat /etc/passwd
```

What does this stuff mean?


Try the following:

```
sudo adduser csse141
```

Walk them through ```adduser```, being sure to add some fun user info like ```Olin 157``` as their room.

Then 
```
cat /etc/passwd
```

The last line should have the new info for the just-added user.


### Over the years, /etc/passwd became a database to store information on system users, phone numbers, office locations, etc. and turned out to be a terrible place to store passwords.

Why? Because for /etc/passwd to be a useful directory, it must be PUBLIC READABLE!

### Passwords were then moved out of /etc/passwd and into /etc/shadow


Trying
```
cat /etc/shadow
```

But 
```
sudo cat /etc/shadow
```

should work. 

We see the contents look like ```/etc/passwd``` but seem to be:

```username:LOTSOFGIBBERISH```

This gibberish is not the password, but is the the hash of the password.

So what is a hash?

