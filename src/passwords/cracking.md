# Cracking passwords

Want to try your hand at cracking hashed passwords using your new Kali instance? Download a test file here: [Example shadow file](shadow).

Next, answer the following questions:

1.	There are at least two programs installed on default Kali Linux that can crack passwords from this second file. Name at least two.
2.	Find the following command. Kali menu -- 05 – Password Attacks -- wordlists. What does this do?
3.	What is the rockyou wordlist? Where does it come from?
4.	Using hashcat and the rockyou wordlist, attack the sample file from above.
5.	How long did it take your computer to crack this password? How many characters was the password? 
6.	What does this tell you about using passwords that are susceptible to dictionary attacks?

HINT: hashcat is pretty good about detecting the hashing algorithm. In other words, try at least once without the ```-m``` option and see if the hash is autodetected.

HINT2: Try a dictionary attack here, which is part of the "Straight" attack method of hashcat. How do you tell it which type of attack to use?

