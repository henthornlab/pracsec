# Installing Kali Linux on Hyper-V


For this class I would like us to use Hyper-V as our hypervisor of choice. We will be working with the following:
* Kali under Hyper-V with Enhanced Session Mode
* Windows Dev images for some proof-of-concept work. Info [here.](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines/)
* Windows Sandbox mode [Link to Sandbox mode.](https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-overview)

Contact me if you are planning to use a Mac or Linux laptop for this course. 


Ready to install Kali on Hyper-V? Follow these instructions:

1. Enable Hyper-V if you haven't already. Instructions are [here](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v).
2. Enable Enhanced Session Mode in Hyper-V. Follow [this guide](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/learn-more/use-local-resources-on-hyper-v-virtual-machine-with-vmconnect) for instructions.
3. Download an installation ISO (not pre-built VM) from [here](https://www.kali.org/get-kali/#kali-installer-images).
4. Set up a Hyper-V VM for a Kali install. Check out this guide [here](https://www.kali.org/docs/virtualization/install-hyper-v-guest-vm/).
5. Install Kali into the new VM. Instructions [here](https://www.kali.org/docs/installation/hard-disk-install/).
6. Follow [these instructions](https://www.kali.org/docs/virtualization/install-hyper-v-guest-enhanced-session-mode/) on how to make Enhanced Session Mode active. This will allow you to use the clipboard effectively.
7. Use your newly found Copy/Paste abilities to transfer a new desktop wallpaper to your Kali instance, for example from [here](https://github.com/dorianpro/kali-linux-wallpapers).

At this point, you should have Kali in a beautifully rendered screen with a functioning clipboard. 

