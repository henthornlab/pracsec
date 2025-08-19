# Build Tools and GDB

After creating your Kali Linux VM you should consider installing the common build tools:

```sudo apt install build-essential```

This should install gcc, g++, make, and several others.

To add support for 32-bit binaries, which are still common in CTFs, do the following:

```sudo apt install gcc-multilib g++-multilib```

Finally, install the GNU Project Debugger, gdb:

```sudo apt install gdb```

