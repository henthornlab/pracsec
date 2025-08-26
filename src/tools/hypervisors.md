# Hypervisors

Hypervisors manage virtual machines and allow them access to your hardware. A hypervisor will allow you to control how much memory, disk space, and CPU time the guest is able to have from the host machine. The most common hypervisors for penetration testing or CTF competitions are:

* VMware
* VirtualBox
* Hyper-V
* KVM / QEMU

I find hypervisors to be a matter of personal preference -- each has a set of pros/cons. Some thoughts:

## VMware:
* The flagship VMware hypervisors are run on the largest servers in the world and are hugely expensive but immensely capable. The company provides some of this functionality in desktop versions, VMware Workstation (Windows/Linux) and VMware Fusion (Mac). Previously, these applications required paid licenses, but recent changes from Broadcom allow us to use these for free. These are my personal choice. High quality networking options, display tuning, reliable copy-paste, easy snapshots, etc. [Download here -- requires you to create a Broadcom account.](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion). Installation instructions follow on the next few pages of this site.

## VirtualBox

* Available [here](https://www.virtualbox.org/) Sort of the opposite of VMware... much of it is open source (GPLv2 license) and free. Very popular for hackers because of this. I wish it had better documentation and advanced networking support, but you can't beat the price.

## Hyper-V
* Developed by Microsoft and available as a built-in service in many versions of Windows, this is an easy one to use for many people. Growing in popularity every year. Learn how to enable Hyper-V [here](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v). With some configuration tweaks you can use Enhanced Session Mode which enables a better graphical experience along with a working clipboard, complete with file transfer.

## KVM/QEMU
* Great choice if you are on a Linux distro. Instructions for enabling on Debian distros [here](https://wiki.debian.org/KVM).
