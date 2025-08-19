# SSH into Kali

Since many of the tools you will use on Kali are command line, you don't always need to use the graphical user interface. Sometimes it's easiest to use a terminal and SSH into your Kali instance.

Out of the box, SSH connections to your Kali box are disabled. To enable them, complete the following on your VM:

Install the OpenSSH server.
```
sudo apt install openssh-server
```
Enable the SSH service.
```
sudo systemctl enable ssh.service 
```
Now start the SSH service.
```
sudo systemctl start ssh.service
```
Finally, record the IP address of your box -- usually located at eth0 for a VM with one network interface.
```
ip a
```
![image](ipaddr.png)

In the above case, the address of your VM is ```192.168.46.91``` and your username is ```kali```. 

You should be able to log in from your desktop now using:
```
ssh kali@192.168.46.9
```