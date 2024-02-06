---
layout: single
title:  "Manage files from the Command line"
author: Stephen Mahon
categories: 
  - RH124
tags:
  - rhel
  - simple 
  - linux
  - file 
  - commands
---

# Manage files from the Commandline

## Access the Command line

### Introduction to Bash Shell

The Bash shell, short for **Bourne Again Shell** is a powerful command-line interface used in Red Hat Enterprise Linux (RHEL) and other Unix-like operating systems. As the default shell in most Linux distributions, Bash provides users a versatile environment for interacting with the operating system through commands and scripts.

With its robust features, including command-line editing, job control, and shell scripting capabilities, Bash empowers users to navigate the file system efficiently, manage processes, and automate tasks. Whether you're a novice user or an experienced sysadmin, mastering the Bash shell is essential for maximizing productivity and leveraging the full potential of Red Hat Linux systems.

The shell displays a string while waiting for user input, called the shell prompt. When a regular user starts a shell, the prompt includes an ending dollar ($) character:

``` bash
  [smahon@DellXPS13 ~]$
```

A hash (#) character replaces the dollar ($) character when the shell is running as the superuser, root. This character indicates that it is a superuser shell, which helps to avoid mistakes that can affect the whole system.

``` bash
  [root@DellXPS13 ~]#
```

It is imperative that I quickly grasp Bash if I want to take _command_ of a Linux OS. My previous experience with PowerShell, although a very different command line interface (CLI), should stand to me.

### Anatomy of a Command

Commands that are entered into Bash have the following basic parts:

- **Command**

  The command to run, e.g., _ls_ (List files).

- **Options / Flags**

  Options / Flags modify the behaviour of the command, for example, in the _ls_ command, the  '-l' options is used to display detailed file information.

- **Arguments**

  Arguements provide additional information to the command, for example, in the _mkdir_ command, the argument specified would be the directory name.

- **Redirection**

  Redirection operators, i.e., '>', '>>', or '<', allow users to control the input and output of commands.
  
  For example,
  
  - '>' operator is used to redirect the output of a command to a file (**Overwrite**).
  - '>>' opertor is used to redirect the output of a command to a file (**Append**).
  - '<' operator is used to provide input into a command from a file.

- **Pipes**

  The pipe character '\|' allows users to chain multiple commands together, using the output of one command as the input for another. This enables powerful data processing and manipulation workflows.

  For example,

  ``` bash
    ls | grep "keyword" 
  ```

  Uses the _ls_ command output as input for the _grep_ command to filter files containing the specified keyword.

## Manage files from the command line

### List Files

**ls** is the command to list files in a directory.

``` bash
  [smahon@DellXPS13 mtechsolutions]$ ls
  file1.txt redhat-notes
  [smahon@DellXPS13 mtechsolutions]$
```

Common arguments include:

|Key|Description|
|--|--|
|**-l**|Shows a detailed output of the files in a directory, including permissions, number of links, owner, group, size, and last modification time.|
|**-a**, **--all**|Show _all_ files in a directory including hidden files.|
|**-h**, **--human-readable**|The size value output will be more human-readable by using K (kilobytes), M (Megabytes), or G (Gigabytes).|

The following is a great online resource for the arguments available for the [ls](https://ss64.com/bash/ls.html) command. In a later post, I'll show you how to use the [_man_](https://ss64.com/bash/man.html) command to review help locallly.

### Copy

**cp** is the command to _copy_ file(s) or directories from one location to another.

As part of the command, you must supply two arguments,

**[source]:** the file(s) or directory that you want to copy.
**[destination]:** the location to copy the file(s)/directory too.

``` bash
  [smahon@DellXPS13 mtechsolutions]$ cp file1.txt file2.txt
  [smahon@DellXPS13 mtechsolutions]$ ls
  file1.txt file2.txt redhat-notes
  [smahon@DellXPS13 mtechsolutions]$

```

### Move

**mv** is the command to _move_ file(s) or directories from one location to another.

As part of the command, you must supply two arguments,

**[source]:** the file(s) or directory that you want to move.
**[destination]:** the location to move the file(s)/directory too.

``` bash
  [smahon@DellXPS13 mtechsolutions]$ mv file2.txt ./redhat-notes/
  [smahon@DellXPS13 mtechsolutions]$ ls
  file1.txt redhat-notes
  [smahon@DellXPS13 mtechsolutions]$ cd redhat-notes
  [smahon@DellXPS13 redhat-notes]$ ls
  file2.txt
  [smahon@DellXPS13 redhat-notes]$ cd ..
  [smahon@DellXPS13 mtechsolutions]$
```

### Create

**touch** is the command to create an empty file or to change/modify the timestamp associated with a file.

**[file]** name of file.

``` bash
  [smahon@DellXPS13 mtechsolutions]$ touch sample1.txt
  [smahon@DellXPS13 mtechsolutions]$ ls
  sample1.txt
  [smahon@DellXPS13 mtechsolutions]$
```

Common arguments include:

|Key|Description|
|--|--|
|**-t [[CC]MMDDhhmm[.ss]]**|Sets to a specific date/time.|
|**-a**|This option changes the access time only.|
|**-c, --no-create** |Suppresses file creation if the file does not exist.|
|**-d, --date**|Sets the access and modification times using the specified STRING.|
|**-m**|This option changes the modification time only.|
|**-r, --reference [FILE]**|Uses the access and modification times from the reference file.|

``` bash
  [smahon@DellXPS13 mtechsolutions]$ touch -t 2312312359 sample2.txt
  [smahon@DellXPS13 mtechsolutions]$ ls -l  
  total 2    
  -rw-r--r--.  1 smahon smahon    0 Dec 31 23:59 sample2.txt
  -rw-r--r--.  1 smahon smahon    0 Feb  6 18:05 sample1.txt
  [smahon@DellXPS13 mtechsolutions]$
```

### Delete

**rm** is the command to remove or delete file(s)

**[file]** name of file.

``` bash
  [smahon@DellXPS13 mtechsolutions]$ rm sample2.txt
  [smahon@DellXPS13 mtechsolutions]$ ls
  sample1.txt
  [smahon@DellXPS13 mtechsolutions]$
```

Common arguments include:

|Key|Description|
|--|--|
|**-f, --force|Ignore non-existent files, never prompt.|
|**-i**|Prompt before every removal.|
|**-r, -R, --recursive**|Remove directories and their contents recursively.|

## Summary

Mastering file management from the command line is crucial for efficient system administration on RHEL. Understanding Bash shell fundamentals, such as command anatomy, options, redirection, and pipes, empowers us to navigate, copy, move, create, and delete files effectively. Whether listing files with ls, copying with cp, moving with mv, creating with touch, or deleting with rm, familiarity with these commands enhances productivity and facilitates seamless file operations in the Linux environment.
