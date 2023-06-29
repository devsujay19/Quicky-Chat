/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
let firstname, middlename, lastname;
let isValid = false;

while (!isValid) {
  firstname = prompt("Please enter your first name to continue (please write your first name in correct syntax, for example - (e.g., Elon)) :");
  lastname = prompt("Please enter your last name to continue (please write your last name in correct syntax, for example - (e.g., Musk)) :");

  function isValidName(name) {
    const regex = /^[A-Z][a-z]*$/;

    const words = name.split(' ');

    for (const word of words) {
      if (!regex.test(word)) {
        return false;
      }
    }

    return true;
  }

  if (isValidName(firstname) && isValidName(lastname)) {
    isValid = true;
  } else {
    alert("Please enter valid names with the correct syntax (e.g., Elon Musk).");
  }
}

middlename = prompt("Please enter your middlename (please write your middle name in correct syntax, for example - (e.g., Reeve)), (or 'x' if you don't have any middlename):");

if (middlename === 'x') {
  middlename = '';
}

const age = parseInt(prompt("Please enter your current age to continue :"));

if (age < 18) {
  alert(firstname + " " + lastname + ", you are under 18, which means you are a minor.");
  document.body.style.display = 'none';
  alert("You can not access our services, minimum age requirement is 18 but you are currently " + age + " years old now.")
} else {
  alert(firstname + " " + lastname + ", you are not under 18, which means you are an adult.");
  alert("You can access our services, minimum age requirement is 18 but you are currently " + age + " years old now.");
}


function talk() {
  var know = {
    'What is my name': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',

    'What is my name?': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',
    
    'what is my name': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',
    
    'what is my name?': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',
    
    'What is my Name': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',
    
    'What is my Name?': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',
    
    'what is my Name': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',
    
    'what is my Name?': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',

    'WHAT IS MY NAME': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',

    'WHAT IS MY NAME?': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',

    'What Is My Name': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',

    'What Is My Name?': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',

    'Do you know my name': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',

    'Do you know my name?': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',

    'do you know my name': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',
    
    'do you know my name': 'Through that registration process, I came to know your name is ' + firstname + " " + middlename + " " + lastname + '.',

    'Who are you?': 'I am a Chat Bot, designed to assist you.',

    'What programming languages have you developed with?':
      'I am Developed with only HTML, CSS and JavaScript.',

    'what programming languages have you developed with':
      'I am Developed with only HTML, CSS and JavaScript.',

    'what programming languages have you developed with?':
      'I am Developed with only HTML, CSS and JavaScript.',

    'what Programming Languages have you Developed with?':
      'I am Developed with only HTML, CSS and JavaScript.',

    'what programming languages have you Developed with?':
      'I am Developed with only HTML, CSS and JavaScript.',

    'WHAT PROGRAMMING LANGUAGES HAVE YOU DEVELOPED WITH?':
      'I am Developed with only HTML, CSS and JavaScript.',

    'WHAT PROGRAMMING LANGUAGES HAVE YOU DEVELOPED WITH':
      'I am Developed with only HTML, CSS and JavaScript.',

    'WHAT PROGRAMMING LANGUAGES HAVE YOU CREATED WITH?':
      'I am Developed with only HTML, CSS and JavaScript.',

    'WHAT PROGRAMMING LANGUAGES HAVE YOU CREATED WITH':
      'I am Developed with only HTML, CSS and JavaScript.',

    'how i can contact your creator':
      'Yes, you can. By visit the Facebook Profile of Sujay Mukherjee, visit the Instagram Profile of Sujay Mukherjee and by visit the GitHub Profile of Sujay Mukherjee',

    'Ho I can contact your creator':
      'Yes, you can. By visit the Facebook Profile of Sujay Mukherjee, visit the Instagram Profile of Sujay Mukherjee and by visit the GitHub Profile of Sujay Mukherjee',

    'HOW I CAN CONTACT YOUR CREATOR':
      'Yes, you can. By visit the Facebook Profile of Sujay Mukherjee, visit the Instagram Profile of Sujay Mukherjee and by visit the GitHub Profile of Sujay Mukherjee',

    'HOW I CAN CONTACT YOUR CREATOR?':
      'Yes, you can. By visit the Facebook Profile of Sujay Mukherjee, visit the Instagram Profile of Sujay Mukherjee and by visit the GitHub Profile of Sujay Mukherjee',

    'What is Google?':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'What is Google':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'What Is Google?':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'what is Google?':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'what is google?':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'what is google':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'What is google':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'What is google?':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'WHAT IS GOOGLE':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'WHAT IS GOOGLE?':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'google':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'google':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'google':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'Google':
      'Google is a multinational technology company that specializes in internet-related products and services. It was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a research project to organize and make accessible the vast amount of information available on the internet.',

    'What Programming Languages have you created with?':
      'I am Developed with only HTML, CSS and JavaScript.',

    'What Programming Languages have you created with':
      'I am Developed with only HTML, CSS and JavaScript.',

    'What Programming Languages have you developed with?':
      'I am Developed with only HTML, CSS and JavaScript.',

    'What Programming Languages have you developed with':
      'I am Developed with only HTML, CSS and JavaScript.',

    'What programming languages have you created with?':
      'Iam Created with only HTML, CSS and JavaScript.',

    'Can I create a Chat Bot like you?':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'can i create a chat bot like you?':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'can i create a chat bot like you':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'Can I Create A Chat Bot Like You?':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'CAN I CREATE A CHAT BOT LIKE YOU?':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'CAN I CREATE A CHAT BOT LIKE YOU':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'Can I create a Chat Bot like you':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'can I create a chat bot like you':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'Can I develop a Chat Bot like you?':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'Can I contact your creator?':
      'Yes, you can. By visit the Facebook Profile of Sujay Mukherjee, visit the Instagram Profile of Sujay Mukherjee and by visit the GitHub Profile of Sujay Mukherjee',

    'CAN I DEVELOP A CHAT BOT LIKE YOU?':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'CA I DEVELOP A CHAT BOT LIKE YOU':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'Can I Develop A Chat Bot Like You':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'Can I develop a Chat Bot like you?':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'Can I Develop a Chat Bot Like you?':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'Can I Develop a Chat Bot like you?':
      'Yes! Of course, but make sure you are advance in JavaScript.',

    'who is your creator': 'My Creator is Sujay Mukherjee.',

    'Who is your creator': 'My Creator is Sujay Mukherjee.',

    'WHO IS YOUR CREATOR?': 'My Creator is Sujay Mukherjee.',

    'who is your Creator?': 'My Creator is Sujay Mukherjee.',

    'who is your creator?': 'My Creator is Sujay Mukherjee.',

    'Are you my bestfriend': 'Yes! I am your bestfriend.',

    'are you my best friend': 'Yes! I am your best friend.',

    'are you my best-friend': 'Yes! I am your best-friend.',

    'Are you my best-friend?': 'Yes! I am your best-friend.',

    'Are you my Best-Friend?': 'Yes! I am your Best-Friend.',

    'are you my Best Friend?': 'Yes! I am your Best Friend.',

    'are you my best-friend?': 'Yes! I am your best-friend.',

    'Are you my best-friend': 'Yes! I am your best-friend.',

    'who are you?': 'I am a Chat Bot, designed to assist you.',

    'Who are you': 'I am a Chat Bot, designed to assist you.',

    'who are you': 'I am a Chat Bot, designed to assist you.',

    'WHO ARE YOU': 'I am a Chat Bot, designed to assist you.',

    'WHO ARE YOU?': 'I am a Chat Bot, designed to assist you.',

    'How are you?': 'Good.',

    'how are you?': 'Good.',

    'How are you': 'Good.',

    'how are you': 'Good.',

    'What is your age?': "I don't know what is my age.",

    'what is your age?': "I don't know what is my age.",

    'what is your age': "I don't know what is my age.",

    'What is your age': "I don't know what is my age.",

    Thanks: 'You are Welcome!',

    HELLO: 'Hello.',

    'HELLO.': 'Hello.',

    HI: 'Hi.',

    'HI.': 'Hi.',

    'HI!': 'Hi!',

    'HI! ': 'Hi!',

    'hi! ': 'Hi!',

    'Hi! ': 'Hi!',

    'Hi. ': 'Hi!',

    'hi. ': 'Hi!',

    'Hi ': 'Hi!',

    'HI ': 'Hi!',

    'hI ': 'Hi!',

    'hI! ': 'Hi!',

    'hI. ': 'Hi!',

    'Hi!': 'Hi!',

    'hi!': 'Hi!',

    Hi: 'Hi.',

    'hi.': 'Hi.',

    'Hi.': 'Hi.',

    hi: 'Hi.',

    'Thanks.': 'You are Welcome!',

    'thanks.': 'You are Welcome!',

    'thank you': 'You are Welcome!',

    'Thank you': 'You are Welcome!',

    'thank you.': 'You are Welcome!',

    'Thank You': 'You are Welcome!',

    'Thank You.': 'You are Welcome!',

    Hello: 'Hello.',

    'Hello.': 'Hello.',

    'HELLO': 'Hello.',

    'hello.': 'Hello.',

    hello: 'Hello.',

    thanks: 'You are Welcome!',

    bye: 'Bye Bye!',

    Bye: 'Bye Bye!',

    ok: 'What ok?',

    OK: 'What OK?',

    Ok: 'What Ok?',

    Okay: 'What Okay?',

    okay: 'What okay?',

    'okay.': 'What okay?',

    'Linux': 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged as a Linux distribution, which includes the kernel and supporting system software and libraries, many of which are provided by the GNU Project. Many Linux distributions use the word "Linux" in their name, but the Free Software Foundation uses the name to emphasize the importance of GNU software, causing some controversy. Popular Linux distributions include Debian, Fedora Linux, and Ubuntu, the latter of which itself consists of many different distributions and modifications, including Lubuntu and Xubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose. Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system. Because of the dominance of the Linux-based Android on smartphones, Linux, including Android, has the largest installed base of all general-purpose operating systems, as of May 2022. Although Linux is, as of November 2022, used by only around 2.6 percent of desktop computers, the Chromebook, which runs the Linux kernel-based ChromeOS, dominates the US education market and represents nearly 20 percent of sub-$300 notebook sales in the US.',
    'linux': 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged as a Linux distribution, which includes the kernel and supporting system software and libraries, many of which are provided by the GNU Project. Many Linux distributions use the word "Linux" in their name, but the Free Software Foundation uses the name to emphasize the importance of GNU software, causing some controversy. Popular Linux distributions include Debian, Fedora Linux, and Ubuntu, the latter of which itself consists of many different distributions and modifications, including Lubuntu and Xubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose. Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system. Because of the dominance of the Linux-based Android on smartphones, Linux, including Android, has the largest installed base of all general-purpose operating systems, as of May 2022. Although Linux is, as of November 2022, used by only around 2.6 percent of desktop computers, the Chromebook, which runs the Linux kernel-based ChromeOS, dominates the US education market and represents nearly 20 percent of sub-$300 notebook sales in the US.',
    'Linux?': 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged as a Linux distribution, which includes the kernel and supporting system software and libraries, many of which are provided by the GNU Project. Many Linux distributions use the word "Linux" in their name, but the Free Software Foundation uses the name to emphasize the importance of GNU software, causing some controversy. Popular Linux distributions include Debian, Fedora Linux, and Ubuntu, the latter of which itself consists of many different distributions and modifications, including Lubuntu and Xubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose. Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system. Because of the dominance of the Linux-based Android on smartphones, Linux, including Android, has the largest installed base of all general-purpose operating systems, as of May 2022. Although Linux is, as of November 2022, used by only around 2.6 percent of desktop computers, the Chromebook, which runs the Linux kernel-based ChromeOS, dominates the US education market and represents nearly 20 percent of sub-$300 notebook sales in the US.',
    'linux?': 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged as a Linux distribution, which includes the kernel and supporting system software and libraries, many of which are provided by the GNU Project. Many Linux distributions use the word "Linux" in their name, but the Free Software Foundation uses the name to emphasize the importance of GNU software, causing some controversy. Popular Linux distributions include Debian, Fedora Linux, and Ubuntu, the latter of which itself consists of many different distributions and modifications, including Lubuntu and Xubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose. Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system. Because of the dominance of the Linux-based Android on smartphones, Linux, including Android, has the largest installed base of all general-purpose operating systems, as of May 2022. Although Linux is, as of November 2022, used by only around 2.6 percent of desktop computers, the Chromebook, which runs the Linux kernel-based ChromeOS, dominates the US education market and represents nearly 20 percent of sub-$300 notebook sales in the US.',
    'what is linux': 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged as a Linux distribution, which includes the kernel and supporting system software and libraries, many of which are provided by the GNU Project. Many Linux distributions use the word "Linux" in their name, but the Free Software Foundation uses the name to emphasize the importance of GNU software, causing some controversy. Popular Linux distributions include Debian, Fedora Linux, and Ubuntu, the latter of which itself consists of many different distributions and modifications, including Lubuntu and Xubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose. Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system. Because of the dominance of the Linux-based Android on smartphones, Linux, including Android, has the largest installed base of all general-purpose operating systems, as of May 2022. Although Linux is, as of November 2022, used by only around 2.6 percent of desktop computers, the Chromebook, which runs the Linux kernel-based ChromeOS, dominates the US education market and represents nearly 20 percent of sub-$300 notebook sales in the US.',
    'what is linux?': 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged as a Linux distribution, which includes the kernel and supporting system software and libraries, many of which are provided by the GNU Project. Many Linux distributions use the word "Linux" in their name, but the Free Software Foundation uses the name to emphasize the importance of GNU software, causing some controversy. Popular Linux distributions include Debian, Fedora Linux, and Ubuntu, the latter of which itself consists of many different distributions and modifications, including Lubuntu and Xubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose. Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system. Because of the dominance of the Linux-based Android on smartphones, Linux, including Android, has the largest installed base of all general-purpose operating systems, as of May 2022. Although Linux is, as of November 2022, used by only around 2.6 percent of desktop computers, the Chromebook, which runs the Linux kernel-based ChromeOS, dominates the US education market and represents nearly 20 percent of sub-$300 notebook sales in the US.',
    'What is linux': 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged as a Linux distribution, which includes the kernel and supporting system software and libraries, many of which are provided by the GNU Project. Many Linux distributions use the word "Linux" in their name, but the Free Software Foundation uses the name to emphasize the importance of GNU software, causing some controversy. Popular Linux distributions include Debian, Fedora Linux, and Ubuntu, the latter of which itself consists of many different distributions and modifications, including Lubuntu and Xubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose. Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system. Because of the dominance of the Linux-based Android on smartphones, Linux, including Android, has the largest installed base of all general-purpose operating systems, as of May 2022. Although Linux is, as of November 2022, used by only around 2.6 percent of desktop computers, the Chromebook, which runs the Linux kernel-based ChromeOS, dominates the US education market and represents nearly 20 percent of sub-$300 notebook sales in the US.',
    'What is linux?': 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged as a Linux distribution, which includes the kernel and supporting system software and libraries, many of which are provided by the GNU Project. Many Linux distributions use the word "Linux" in their name, but the Free Software Foundation uses the name to emphasize the importance of GNU software, causing some controversy. Popular Linux distributions include Debian, Fedora Linux, and Ubuntu, the latter of which itself consists of many different distributions and modifications, including Lubuntu and Xubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose. Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system. Because of the dominance of the Linux-based Android on smartphones, Linux, including Android, has the largest installed base of all general-purpose operating systems, as of May 2022. Although Linux is, as of November 2022, used by only around 2.6 percent of desktop computers, the Chromebook, which runs the Linux kernel-based ChromeOS, dominates the US education market and represents nearly 20 percent of sub-$300 notebook sales in the US.',
    'What is Linux': 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged as a Linux distribution, which includes the kernel and supporting system software and libraries, many of which are provided by the GNU Project. Many Linux distributions use the word "Linux" in their name, but the Free Software Foundation uses the name to emphasize the importance of GNU software, causing some controversy. Popular Linux distributions include Debian, Fedora Linux, and Ubuntu, the latter of which itself consists of many different distributions and modifications, including Lubuntu and Xubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose. Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system. Because of the dominance of the Linux-based Android on smartphones, Linux, including Android, has the largest installed base of all general-purpose operating systems, as of May 2022. Although Linux is, as of November 2022, used by only around 2.6 percent of desktop computers, the Chromebook, which runs the Linux kernel-based ChromeOS, dominates the US education market and represents nearly 20 percent of sub-$300 notebook sales in the US.',
    'What is Linux?': 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged as a Linux distribution, which includes the kernel and supporting system software and libraries, many of which are provided by the GNU Project. Many Linux distributions use the word "Linux" in their name, but the Free Software Foundation uses the name to emphasize the importance of GNU software, causing some controversy. Popular Linux distributions include Debian, Fedora Linux, and Ubuntu, the latter of which itself consists of many different distributions and modifications, including Lubuntu and Xubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose. Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system. Because of the dominance of the Linux-based Android on smartphones, Linux, including Android, has the largest installed base of all general-purpose operating systems, as of May 2022. Although Linux is, as of November 2022, used by only around 2.6 percent of desktop computers, the Chromebook, which runs the Linux kernel-based ChromeOS, dominates the US education market and represents nearly 20 percent of sub-$300 notebook sales in the US.',

    'OK.': 'What OK?',

    'OK.': 'What OK?',

    'ok.': 'What ok?',

    'OK.': 'What?',

    'Okay.': 'What Okay?',

    'what is my ip': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'what is my ip?': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'what is my IP?': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'what is my IP': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'What is my IP': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'What is my IP?': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'WHAT IS MY IP': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'WHAT IS MY IP?': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'what is my ip address': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'what is my ip address?': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'what is my IP address?': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'what is my Ip address?': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'what is my Ip': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'what is my Ip?': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'What is my IP Address?': "I am sorry, I have no access to your or anyone's privacy. But you can search your public IP Address in <a href='https://www.google.com'>Google</a>, may be it can help you.",

    'what time is it': 'You can see the current time in any Clock near to you.',

    'what time is it?': 'You can see the current time in any Clock near to you.',

    'What time is it': 'You can see the current time in any Clock near to you.',

    'What time is it?': 'You can see the current time in any Clock near to you.',

    'what Time is it?': 'You can see the current time in any Clock near to you.',

    'What Time is it?': 'You can see the current time in any Clock near to you.',

    'What Time is it': 'You can see the current time in any Clock near to you.',

    'What Time Is It': 'You can see the current time in any Clock near to you.',

    'What Time Is It?': 'You can see the current time in any Clock near to you.',

    'WHAT TIME IS IT?': 'You can see the current time in any Clock near to you.',

    'WHAT TIME IS IT': 'You can see the current time in any Clock near to you.',

    'How to tie a tie': '"<a href="https://www.youtube.com/results?search_query=How+to+tie+a+tie">How to tie a tie</a>", click in this link and find a Youtube video that teaching you "How to tie a tie".',

    'How to tie a tie?': '"<a href="https://www.youtube.com/results?search_query=How+to+tie+a+tie%3F">How to tie a tie?</a>", click in this link and find a Youtube video that teaching you "How to tie a tie?".',

    'how to Tie a Tie': '"<a href="https://www.youtube.com/results?search_query=how+to+Tie+a+Tie">how to Tie a Tie</a>", click in this link and find a Youtube video that teaching you "how to Tie a Tie".',

    'how to Tie a Tie?': '"<a href="https://www.youtube.com/results?search_query=how+to+Tie+a+Tie%3F">how to Tie a Tie?</a>", click in this link and find a Youtube video that teaching you "how to Tie a Tie?".',

    'how to Tie a tie': '"<a href="https://www.youtube.com/results?search_query=how+to+Tie+a+tie">how to Tie a tie</a>", click in this link and find a Youtube video that teaching you "how to Tie a tie".',

    'how to Tie a tie?': '"<a href="https://www.youtube.com/results?search_query=how+to+Tie+a+tie%3F">how to Tie a tie?</a>", click in this link and find a Youtube video that teaching you "how to Tie a tie?".',

    'how to tie a Tie': '"<a href="https://www.youtube.com/results?search_query=How+to+tie+a+Tie">how to tie a Tie</a>", click in this link and find a Youtube video that teaching you "how to tie a Tie".',

    'how to tie a Tie?': '"<a href="https://www.youtube.com/results?search_query=How+to+tie+a+Tie%3F">how to tie a Tie?</a>", click in this link and find a Youtube video that teaching you "how to tie a Tie?".',

    'CAN YOU RUN IT': "I can't understand what you are saying. Sorry!",

    'CAN YOU RUN IT?': "I can't understand what you are saying. Sorry!",

    'can you run It': "I can't understand what you are saying. Sorry!",

    'can you run It?': "I can't understand what you are saying. Sorry!",

    'can you Run it?': "I can't understand what you are saying. Sorry!",

    'can you Run it': "I can't understand what you are saying. Sorry!",

    'Can you run it': "I can't understand what you are saying. Sorry!",

    'can you run it?': "I can't understand what you are saying. Sorry!",

    'Can you run it?': "I can't understand what you are saying. Sorry!",

    'what song is this': "I don't know what song you are talking about.",

    'what song is this?': "I don't know what song you are talking about.",

    'What song is this': "I don't know what song you are talking about.",

    'What song is this?': "I don't know what song you are talking about.",

    'what Song is this': "I don't know what song you are talking about.",

    'what Song is this?': "I don't know what song you are talking about.",

    'What Song is this': "I don't know what song you are talking about.",

    'What Song is this?': "I don't know what song you are talking about.",

    'WHAT SONG IS THIS': "I don't know what song you are talking about.",

    'WHAT SONG IS THIS?': "I don't know what song you are talking about.",

    'how to lose weight': "The best way to lose your weight is Extreme Diet and Extreme Exercises. For more information about this topic, click or visit this URL and visit a Website you prefer and know more about this topic : <a href='https://www.google.com/search?q=how+to+lose+weight&oq=how+to+lose&aqs=chrome.1.69i57j0i433i512j46i512j0i433i512j0i512j0i433i512j0i512l4.5366j0j9&sourceid=chrome&ie=UTF-8'>how to lose weight</a>",

    'how to lose weight?': "The best way to lose your weight is Extreme Diet and Extreme Exercises. For more information about this topic, click or visit this URL and visit a Website you prefer and know more about this topic : <a href='https://www.google.com/search?q=how+to+lose+weight%3F&oq=how+to+lose&aqs=chrome.1.69i57j0i433i512j46i512j0i433i512j0i512j0i433i512j0i512l4.5366j0j9&sourceid=chrome&ie=UTF-8'>how to lose weight?</a>",

    'How to lose weight': "The best way to lose your weight is Extreme Diet and Extreme Exercises. For more information about this topic, click or visit this URL and visit a Website you prefer and know more about this topic : <a href='https://www.google.com/search?q=How+to+lose+weight&oq=how+to+lose&aqs=chrome.1.69i57j0i433i512j46i512j0i433i512j0i512j0i433i512j0i512l4.5366j0j9&sourceid=chrome&ie=UTF-8'>How to lose weight</a>",

    'How to lose weight?': "The best way to lose your weight is Extreme Diet and Extreme Exercises. For more information about this topic, click or visit this URL and visit a Website you prefer and know more about this topic : <a href='https://www.google.com/search?q=How+to+lose+weight%3F&oq=how+to+lose&aqs=chrome.1.69i57j0i433i512j46i512j0i433i512j0i512j0i433i512j0i512l4.5366j0j9&sourceid=chrome&ie=UTF-8'>How to lose weight?</a>",

    'how many ounces in a cup': 'There are 8 fluid ounces in a cup.',

    'how many ounces in a cup?': 'There are 8 fluid ounces in a cup.',

    'How many ounces in a cup': 'There are 8 fluid ounces in a cup.',

    'How many ounces in a cup?': 'There are 8 fluid ounces in a cup.',

    'how many Ounces in a cup': 'There are 8 fluid ounces in a cup.',

    'how many Ounces in a cup?': 'There are 8 fluid ounces in a cup.',

    'How many Ounces in a cup': 'There are 8 fluid ounces in a cup.',

    'How many Ounces in a cup?': 'There are 8 fluid ounces in a cup.',

    'how many ounces in a Cup': 'There are 8 fluid ounces in a cup.',

    'How many Ounces in a Cup?': 'There are 8 fluid ounces in a cup.',

    'How many Ounces in a Cup': 'There are 8 fluid ounces in a cup.',

    'How many Ounces in a Cup?': 'There are 8 fluid ounces in a cup.',

    'How many ounces in a Cup': 'There are 8 fluid ounces in a cup.',

    'How many ounces in a Cup?': 'There are 8 fluid ounces in a cup.',

    'How many Fluid Ounces in a Cup': 'There are 8 fluid ounces in a cup.',

    'How many Fluid Ounces in a Cup?': 'There are 8 fluid ounces in a cup.',

    'How many fluid Ounces in a Cup': 'There are 8 fluid ounces in a cup.',

    'How many fluid Ounces in a Cup?': 'There are 8 fluid ounces in a cup.',

    'How many fluid ounces in a Cup': 'There are 8 fluid ounces in a cup.',

    'How many fluid ounces in a Cup?': 'There are 8 fluid ounces in a cup.',

    'How many fluid ounces in a cup': 'There are 8 fluid ounces in a cup.',

    'How many fluid ounces in a cup?': 'There are 8 fluid ounces in a cup.',

    'HOW MANY FLUID OUNCES IN A CUP': 'There are 8 fluid ounces in a cup.',

    'HOW MANY FLUID OUNCES IN A CUP?': 'There are 8 fluid ounces in a cup.',

    'when is mothers day': "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    'when is mothers day?': "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "when is mother's day": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "when is mother's day?": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    'when is Mothers day': "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    'when is Mothers day?': "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "when is Mother's day": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "when is Mother's day?": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    'When is mothers day': "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    'When is mothers day?': "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "When is mother's day": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "When is mother's day?": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    'When is Mothers day': "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    'When is Mothers day?': "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "When is Mother's day": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "When is Mother's day?": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    'WHEN IS MOTHERS DAY': "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    'WHEN IS MOTHERS DAY?': "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "WHEN IS MOTHER'S DAY": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "WHEN IS MOTHER'S DAY?": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "WHEN IS MOTHERS DAY": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "WHEN IS MOTHERS DAY?": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "when is mothers' day": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    "when is mother's day?": "Currently, the mother's day of 2023 is passed, the second mother's day event will come in Sun, May 12, 2024.",

    'when is FATHERS day': "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    'when is FATHERS day?': "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "when is Father's day": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "when is Father's day?": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    'when is FATHERS day': "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    'when is FATHERS day?': "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "when is Father's day": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "when is Father's day?": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    'When is FATHERS day': "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    'When is FATHERS day?': "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "When is Father's day": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "When is Father's day?": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    'When is FATHERS day': "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    'When is FATHERS day?': "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "When is Father's day": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "When is Father's day?": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    'WHEN IS FATHERS DAY': "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    'WHEN IS FATHERS DAY?': "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "WHEN IS Father's DAY": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "WHEN IS Father's DAY?": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "WHEN IS FATHERS DAY": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "WHEN IS FATHERS DAY?": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "when is FATHERS' day": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",

    "when is Father's day?": "Currently, the Father's day of 2023 is passed, the second Father's day event will come in Sun, June 18, 2024.",
  };


  var user = document.getElementById('inputBox').value;
  document.getElementById('answerFromQC').innerHTML = user + '<br>';
  if (user in know) {
    document.getElementById('answerFromQC').innerHTML = know[user] + '<br>';
  } else {
    document.getElementById('answerFromQC').innerHTML =
      "OOPS! Sorry, I need to Update/Upgrade. Or maybe you typed wrong that I can't understand, or maybe you typed a sentence or a word that I did'nt see in my predefined dictionary... <br>";
  }
}


document.addEventListener('keydown', function (event) {
  if (
    event.key === 'Insert' || 'Insert' &&
    (event.ctrlKey || event.shiftKey || event.altKey)
  ) {
    var myInput = document.getElementById('inputBox');
    var activeElement = document.activeElement;
    if (activeElement !== myInput) {
      event.preventDefault();
      myInput.focus();
    }
  }
});


window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = "";
  alert("Are you sure you want to leave this page?");
});