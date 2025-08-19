# Single Line Python Scripts

Did you know you can run single line Python scripts from the command line using the -c argument?

Try the following:

```
python -c "print('A'*46)"
```

Output
```
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
```

Single line program to create 46 A characters. But why?

When we get around to creating buffer overflows, keep this tool in mind. We often need to create a long string that fills up a buffer and then injects characters beyond it.

For example, I could fill up the buffer with a 46 'A' characters and then start injecting additional hex characters I want using this simple command line:

```
python -c "print('A'*46 + '\xd0\x8f\x04\x08')"
```