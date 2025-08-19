# Building recipes in Cyberchef

Let's say we find the following message when reverse engineering a binary.

```
ttmq3a2X8YKp2qmDp8Kr2avPu4O9wrOCqcyqzraSqJCR45zsk8qK7urJqQ==
```

We know from inspecting the executable there is an XOR binary operation to obfuscate the text. But our keen eyes notice this is a Base64 encoded string. 

Build a recipe that:
1. Decodes the Base64 encoded string.
2. Decrypts that string using XOR decryption. Unfortunately we only know that the key used for encryption is 2 bytes in size. You will need to brute force it. HINT: We believe it is an ```http``` string.
