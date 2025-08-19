# Ultra simple web file sharing using Python

Need to share files quickly? Python has your back.

Navigate to the folder where your file, called ```filename``` is located. Note the IP address of the computer and then run:
```
python -m http.server 9999
```

This will create an http instance at port 9999 capable of serving files located in that directory.

From a different machine, connect to it through a browser or simply use wget.

```
wget x.x.x.x:9999/filename
```

where x.x.x.x is the IP address of your HTTP server.

Note: This is an unencrypted HTTP stream. Be cognizant of the files you transfer over this stream as they will be readily visible.


