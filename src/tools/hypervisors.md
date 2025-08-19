# Hypervisors

Hypervisors are the software piece that manage virtual machines and allow them access to your hardware. The most common hypervisors for penetration testing or CTF competitions are:

* VMware
* VirtualBox
* Hyper-V
* KVM / QEMU

I find hypervisors to be a matter of personal preference -- each has a set of pros/cons. Some thoughts:

## VMware:
* The flagship VMware hypervisors are run on the largest servers in the world and are hugely expensive and immensely capable. The company provides some of this functionality in desktop versions, VMware Player (Intel/AMD) and VMware Fusion (Mac). While these cost money, they provide them free for non-commercial and academic use. These are my personal choice. High quality networking options, display tuning, snapshots, etc. Fusion (Mac) can be found [here](https://www.vmware.com/products/fusion/fusion-evaluation.html) while Player (Intel/AMD) is [here](https://www.vmware.com/content/vmware/vmware-published-sites/us/products/workstation-player/workstation-player-evaluation.html.html).

## VirtualBox
* Available [here](https://www.virtualbox.org/) Sort of the opposite of VMware... much of it is open source (GPLv2 license) and free. Very popular for hackers because of this. I wish it had better documentation and advanced networking support, but you can't beat the price.

## Hyper-V
* Developed by Microsoft and available as a built-in service in many versions of Windows, this is an easy one to use for many people. Growing in popularity every year. Learn how to enable Hyper-V [here](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v). With some configuration tweaks you can use Enhanced Session Mode which enables a better graphical experience along with a working clipboard, complete with file transfer.

## KVM/QEMU
* Great choice if you are on a Linux distro. Instructions for enabling on Debian distros [here](https://wiki.debian.org/KVM).
