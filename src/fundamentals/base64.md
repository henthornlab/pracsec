# Base64 Encoding

Sometimes we need to share binary data with others and one way to do this is in text form. But as we saw in the *Character Encoding* section, there is a careful mapping between characters and numerical values. 

Let's say we want to share a single byte. If that byte has a value between 32 and 126, it would be possible to send the ASCII representation of the value over plaintext. For example, a byte of value 0x41 could be represented as A. 

But what happens to the byte values outside the printable range? To accommodate for scenarios such as these a binary to text encoding scheme known as Base64 was invented. Every 6 bits of binary data are represented by an 8 bit character. Since 2^6 is 64, we need only part of the typical ASCII character set.

This ratio of 8 bit characters to 6 bit encoding means that, for every 3 bytes of data, we need 4 bytes of characters to encode it.

What happens in the case where the data is not a simple multiple of 6 bits? The values are padded with zeros and the = character appears.


---

Example 1: The hex value 0xc0ffee is a 24-bit number. To encode this we will need 24/6 * 8 = 32 bits, or 4 characters. db

0xc0ffee is therefore encoded as wP/u in Base64.

---

Example 2: Encoding 0xdeadbeef.

We have four bytes to encode here, or 32-bits, which does not divide evenly by 6. Instead, some padding will be introduced which leads to the characteristic '=' sign at the end of many Base64 encoded strings.

We see 0xdeadbeef encoded as 3q2+7w== after padding.

---




