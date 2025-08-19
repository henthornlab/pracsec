# Ghidra

Ghidra is an open source tool from the National Security Agency (yes, that NSA!) that we use for reverse engineering.

Ghidra is a Java app, so you need a working JDK before you can run it. 

1. On a Linux machine, you can check your Java version with:
    ```
    java -version
    ```

2. Look for the version output, something like:
    ```openjdk version "17.0.8" 2023-07-18```
Be sure that you have version 17 or higher. 

3. If you need to install Java, you can use the following command on Kali Linux.
    ```
    sudo apt install default-jdk
    ```


4. After you [download Ghidra](https://ghidra-sre.org/), there isn't a traditional installer. Instead, do the following:
    * Unzip the file. In the unzipped archive, you will find a script to start Ghidra.
        *   On UNIX-like systems, run the file 
        ```
        ./ghidraRun
        ```

        * On Windows, run the file:
        ```
        ghidraRun.bat
        ```


