# Python XOR

Exclusive or (XOR) is a [well-known](https://en.wikipedia.org/wiki/Exclusive_or) binary logical operator and can be used in Python with the ```^``` operator.

For example:

![xor on bytes()](pythonxor.png)

XOR is a fun CTF encryption challenge since two rounds of it returns the plaintext.

Plaintext -- XOR with key --> Ciphertext -- XOR with key --> Plaintext

For XOR'ing long bytes() or bytearray() objects, you can use a for loop or the map function:

```
def xor(bytes_in, key):
    return bytearray(a^b for a, b in zip(*map(bytearray, [bytes_in, key])))
```

This function assumes your key is long enough to align with ```bytes_in```. If need be, extend the key by repeating it over and over until it is long enough before calling this function.




