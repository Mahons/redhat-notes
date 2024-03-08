---
layout: single
title:  "File System Permissions"
date:   2024-03-08 13:00:00:00 +0000
categories:
    - RH124
author: Stephen Mahon
tags:
  - rhel
  - file system permissions
---

After a famiy holiday to Lapland and some crazy busy weeks in work, it's time for me to get back to studying for my upcoming [Red Hat Administration 1 (RH124)](https://www.redhat.com/en/services/training/rh124-red-hat-system-administration-i) exam.

This post, i.e., study notes will delve into File System Permissions, specifically around controlling access to directories and files within a Linux system.

# File System Permissions

In Linux, file system permissions are fundamental to ensuring security and control over files and directories. These permissions dictate who can read, write, or execute a file or directory.

The following table outlines what effect each permission has on a file or directory:

| Permission | Effect on Files             | Effect on Directories        |
|------------|-----------------------------|------------------------------|
| Read (r)   | Allows reading/viewing the contents of the file.| Allows listing the contents (filenames) of the directory. |
|------------|-----------------------------|------------------------------|
| Write (w)  | Allows modifying the contents of the file.| Allows adding, deleting, and renaming files within the directory.|
|------------|-----------------------------|------------------------------|
| Execute (x)| Allows executing the file if it's a program  or script.| Allows accessing (entering) the directory, i.e., cd command.|

There are three main types of permissions:

- The **Owner** permissions apply to the user who owns the file or directory. This user typically has the most control and can decide who else can access it. The owner's permissions can include read, write, and execute privileges.

- The **Group** permissions apply to a specific group of users. Files and directories can belong to one or more groups, and the group permissions determine members' actions. Group permissions can include read, write, and execute privileges like owner permissions.

- Finally, there are permissions for **Others**, which apply to all other users who are not the owner and not members of the group associated with the file or directory. These permissions specify actions anyone else can take, such as reading, writing, or executing the file or directory.

By carefully managing these permissions, Linux system administrators can control access to sensitive files and directories, ensuring that only authorised users can view, modify, or execute them, thus enhancing the system's overall security.

## View File and Directory Permissions

As discussed in an earlier blog, the *ls* command with the *-l* option shows detailled information about the contents of a directory, incuding permissions and ownership.

``` bash
  [smahon@localhost temp]$ ls -l
  total 2
  drwxr-xr-x.  3 smahon smahon    20 Jan 27 19:49 subfolder
  -rw-r--r--.  1 smahon smahon    21 Jan 31 13:25 test1.txt

```

On the left hand side, there are ten characters, of which the first character indicates the file type, which is interpreted as follows:

- \- is a regular file.
- d is a directory.
- l is a symbolic link.
- c is a character device file.
- b is a block device file.
- p is a named pipe file.
- s is a local socket file.

For example, *subfolder* is a directory, whilst *test1.txt* is a regular file.

The remaining nine characters, e.g., *rwxr-xr-x* can be broken into three sets of three characters, indicating the system permission for the aforementioned, Owner, Group, and Others. 

For example, the user *smahon* has read and write (rw-) permission on test1.txt, the group *smahon* has only read permission (r--), as does all other users (r--).

The most specific set of permissions applies. So if the smahon user has permissions different from the smahon group, and the smahon user is also a member of that group, then only the user owner's permissions apply. This permission allows setting a more restrictive set of permissions on a user than their group membership provides when removing the user from the group might not be practical.

No doubt, there's a lot more that I can add to this, but that's enough for my lunch break!
