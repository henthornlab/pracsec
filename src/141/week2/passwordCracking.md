# Cracking Passwords with Kali

## Cracking a hashed password with a wordlist

Show 
Kali --> 05 Password Attacks --> hashcat

It's a command line tool, so we need to work in the terminal.

The example shown is:

Let's attack 

So we should find our wordlists:

do:
```
wordlists -h
```

It will ask whether or not to extract Rockyou. We are now placed in:
/usr/share/wordlists

Go back to your home directory
```
cd
```

but remember that the rockyou list is located at ```/usr/share/wordlists/rockyou.txt```


OPTIONAL: Remove all the extraneous stuff except the final hash from your ```shadow``` file:


Crack with:
```
hashcat -a 0 shadow /usr/share/wordlists/rockyou.txt
```


The first parameter ```-a 0``` means do a wordlist attack


## Important for demos

hashcat saves the results. To run it again from scratch, do the following:
```
rm -rf ~/.local/share/hashcat/
```

## Results:

Once hashcat was up and running, it took only 2 seconds on my school laptop.

```
Host memory required for this attack: 0 MB

Dictionary cache built:
* Filename..: /usr/share/wordlists/rockyou.txt
* Passwords.: 14344392
* Bytes.....: 139921507
* Keyspace..: 14344385
* Runtime...: 2 secs

$6$E/U//EImDPJ0YG75$EEgWMu/83/JMORMJ5OdgF1HeCI9imjyTElJ8MB86ssNkw8gyT8bGOW5qdwuj9FX4dyaYjRoWh9Ecd1pjCQCpX1:carebear1

Session..........: hashcat
Status...........: Cracked
Hash.Mode........: 1800 (sha512crypt $6$, SHA512 (Unix))
Hash.Target......: $6$E/U//EImDPJ0YG75$EEgWMu/83/JMORMJ5OdgF1HeCI9imjy...CQCpX1
Time.Started.....: Fri Dec  6 13:22:04 2024 (1 sec)
Time.Estimated...: Fri Dec  6 13:22:05 2024 (0 secs)
Kernel.Feature...: Pure Kernel
Guess.Base.......: File (/usr/share/wordlists/rockyou.txt)
Guess.Queue......: 1/1 (100.00%)
Speed.#1.........:     3183 H/s (6.86ms) @ Accel:128 Loops:1024 Thr:1 Vec:4
Recovered........: 1/1 (100.00%) Digests (total), 1/1 (100.00%) Digests (new)
Progress.........: 4480/14344385 (0.03%)
Rejected.........: 0/4480 (0.00%)
Restore.Point....: 4352/14344385 (0.03%)
Restore.Sub.#1...: Salt:0 Amplifier:0-1 Iteration:4096-5000
Candidate.Engine.: Device Generator
Candidates.#1....: nineteen -> memyselfandi

Started: Fri Dec  6 13:21:59 2024
Stopped: Fri Dec  6 13:22:07 2024
```