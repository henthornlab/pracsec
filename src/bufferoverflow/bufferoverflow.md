# Buffer Overflows (Intro)

Let's check out the example C program below.

``` C
// Replace the line below with the real flag.
char flag[] = "replace with real flag";

// Replace the line below with the actual passcode
char passcode[] = "123456";
char nickname[12];
char user_passcode[7];

printf("\nWhat should we call you: ");
scanf("%s", nickname);

printf("\nGreetings %s. ", nickname);
printf("Please enter the six character passcode: ");
scanf("%s", user_passcode);

if (strncmp(passcode, user_passcode, 6) == 0) {
    printf("\nNice work! The flag is %s", flag);
}
else {
    printf("\nSorry. passcode is incorrect.");
}
```

You can download the x86 ELF binary [here](overcode) if you would like. 

There's a way to exploit this program and get the flag without knowing the passcode at all. Work with a teammate to brainstorm how you might do so.

In an x86 compatible VM (or emulator), attempt to run the program and try your solution.


