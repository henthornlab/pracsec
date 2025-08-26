# VM Snapshots

One of the coolest features of VMs is the ability to take "snapshots". You are, in essence, saving the state of a VM at that instant in time -- this includes what is loaded in memory, shown on the screen, etc. You can then roll back changes to a previous known state whenever needed.

## [Check out this video about snapshots](https://rose-hulman.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=379a5705-b2e7-4de5-a62d-b34001124e27)

For CTF competitions, a workflow I see quite a bit is:
1. Create a VM and tweak with all the tools you will need.
2. Snapshot the VM.
3. Start a challenge. This may require you to install new software, add new packages to Python, add temporary entries to /etc/hosts, download binaries for reverse engineering, etc.
4. Complete the challenge.
5. Rollback the VM to the pre-challenge snapshot. On to the next challenge!


