# Ghidra not working?

If you find that parts of Ghidra are not working out of the box on your Kali instance (especially Kali on ARM), try the following:

1. Install sdkman

    ```
    sudo curl -s "https://get.sdkman.io" | bash
    ```
2. Restart your terminal shell.
3. Install gradle
    ```
    sdk install gradle
    ```
4. cd into your Ghidra directory.
5. cd into the ```support``` directory.
6. Run
    ```
    ./buildNatives
    ```
7. Now try Ghidra.

