# Linux Template VMs

A template VM is available for you at: <a href="https://classes.csse.rose-hulman.edu/csse14x/" target="_blank">https://classes.csse.rose-hulman.edu/csse14x/</a>

## Working with the debian-template VM

This is a lightweight VM capable of being uploaded to TryHackMe.

Usage:
* Import it into VirtualBox or VMware Workstation.  
* Next, login with username ```minion``` and password ```kingbob```.

* The root user password is also ```kingbob```. It may be beneficial to use ```su``` for some work.

* ssh is enabled for the ```minion``` account. Use it to set up the VM but be sure to disable it before production use.

## Important! Before uploading this to THM, disable the SSH server.

```systemctl disable sshd```

### Want to use Docker?
This VM has Docker pre-installed and is ready for use. Make sure you run the container mode in detached (-d) mode and tell it to restart itself always. 

```docker run -d --restart always ```

For example, to have it run the tenders container, log in as root and then run:

```docker run -d --restart always -p 80:3000 henthornlab/tenders```

and then

```systemctl disable sshd```

The VM now only exposes port 80 and is ready to be uploaded to THM.