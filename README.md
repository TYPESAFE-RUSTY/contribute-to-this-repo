# [Contribute to this repo](https://typesafe-rusty.github.io/contribute-to-this-repo/)
A repository designed to introduce beginners to open source contributions, inspired by [Skynapse/Contribute-To-This-Project](https://github.com/Syknapse/Contribute-To-This-Project).
At the end your card will be visible at this [https://typesafe-rusty.github.io/contribute-to-this-repo/](https://typesafe-rusty.github.io/contribute-to-this-repo/)

> **Note:** The [Skynapse/Contribute-To-This-Project](https://github.com/Syknapse/Contribute-To-This-Project) repository provides documentation for both GUI and terminal users. This repository focuses exclusively on terminal usage and does not cover GUI (GitHub Desktop) methods.

### Quick access index

- [Introduction](#introduction)
- [Objectives](#objectives)
- [Who is this for?](#who-is-this-for)
- [Why do I need to do this?](#why-do-i-need-to-do-this)
- [What am I going to contribute?](#what-am-i-going-to-contribute)
- [Setup! :)](#setup-)
- [Contribute](#contribute)
  - [Step 1: Fork this repository](#step-1-fork-this-repository)
  - [Step 2: Clone the repository](#step-2-clone-the-repository)
  - [Step 3: Create a new branch](#step-3-create-a-new-branch)
  - [Step 4: Installing dependencies](#step-4-install-dependencies)
  - [Step 5: Open the template.txt file](#step-5-open-the-templatetxt-file)
  - [Step 6: Copy the card template](#step-6-copy-the-card-template)
  - [Step 7: Commit your changes](#step-7-commit-your-changes)
  - [Step 8: Push your changes to GitHub](#step-8-push-your-changes-to-github)
  - [Step 9: Submit a PR(Pull Request)](#step-9-submit-a-prpull-request)
  - [Step 10: Celebrate](#step-10-celebrate)
- [Acknowledgements](#acknowledgements)
- [License](#license)


---

## Introduction

This is a tutorial to help first-time contributors to participate in a simple and easy project.

### Objectives

- Make a contribution to an open source project.
- Get more comfortable in using GitHub.

### Who is this for?

- This is for absolute beginners. If you know how to write and edit a file then you should be able to do it.
- It is also for those with a little more experience but who want to make their first open source contribution, or get more contributions for more experience and confidence.

### Why do I need to do this?

Any web developer, aspiring or experienced needs to use Git version control, and GitHub is the most popular Git hosting service used by everyone. It is also the heart of the Open Source community. Getting comfortable using GitHub is an essential skill. Making a contribution to a project boosts your confidence and gives you something to show on your GitHub profile.

If you are a new developer and you are wondering if you need to learn Git and GitHub then here is the answer: [You Should've Learned Git Yesterday](https://codeburst.io/number-one-piece-of-advice-for-new-developers-ddd08abc8bfa 'New Developer? You should’ve learned Git yesterday. by Brandon Morelli, creator of CodeBurst.io').

### What am I going to contribute?

![Contributor Card](./docs/card.png 'Contributor Card')

You are going to contribute a card just like this one to this [project's web page](https://typesafe-rusty.github.io/contribute-to-this-repo/). It will include your name, your Social handle, a short description, and 3 links to useful resources that you recommend.

You will make a copy of the template inside the src/template file and customize it with your own information and add it to DataStore.ts .

---

### Setup! :)

First let's get setup to do the work

1. Login to your GitHub account. If you don't yet have an account then [join GitHub](https://github.com/join). I recommend that you do the [GitHub Hello World tutorial](https://guides.github.com/activities/hello-world/) before you continue.
2. Download [Git](https://git-scm.com/).
3. Download [Node js](https://nodejs.org/en).

> Now that you are all setup let's get on with the business of contributing to the project.

[↑ Go to top ↑](#quick-access-index)

---

### Contribute

Become an open source contributor in 10 easy steps.

_Estimated time: Less than 30 minutes_.

#### Step 1: Fork this repository

- The objective here is to make a copy of this project and place it in your account.
- A repository (repo) is how a project is called on GitHub and a fork is a copy of it.
- Make sure you are on the [main page](https://github.com/TYPESAFE-RUSTY/contribute-to-this-repo 'https://github.com/TYPESAFE-RUSTY/contribute-to-this-repo') of this repo.

| ![Fork](/docs/01.png "click on 'Fork'") |
| :---------------------------------------------: |
|         **Click on the _Fork_ button**          |

| ![Fork](/docs/02.png "click on 'Fork'") |
| :---------------------------------------------: |
|         **Click on the _Create Fork_ button**          |

- You now have a complete copy of the project in your own account.

[↑ Go to top ↑](#quick-access-index)

---

#### Step 2: Clone the repository

- Now we want to make a local copy of the project. That is a copy saved on your own machine.
- Open the terminal in a folder where you will like to save this project:

| ![Clone](/docs/03.png 'click clone repository') |
| :------------------------------------------------------: |
|       **Click on _copy_button_**        |

| ![Clone](/docs/04.png 'click clone repository') |
| :------------------------------------------------------: |
|       **type command ``git clone {your repository url}``**        |

| ![Clone](/docs/05.png 'click clone repository') |
| :------------------------------------------------------: |
|       **type command ``cd contribute-to-this-repo``**        |

- This will take a moment as the project is copied to your hard disk.
- Now you have a local copy of the project.

[↑ Go to top ↑](#quick-access-index)

---

#### Step 3: Create a new branch

- Once the repo has been cloned and you have it open in a terminal it is time to create a new branch.
- A branch is a way to keep your changes separate from the main part of the project called `Master` or `Main`. For example if things go wrong and you are not happy with your changes you can simply delete the branch and the main project won't be affected.

| ![Clone](/docs/06.png 'create new branch') |
| :------------------------------------------------------: |
|       **type command ``git branch {your-name}``**        |
- You can name it whatever you want, but since this is a branch to add a card with your name to the project, calling it `your-name` is good practice because it keeps the intention of this branch clear.
- Now you have created a new branch separate from the master.
- For the next steps make sure you are working in this branch. you can check the branch you are working in by typing ``git branch``

**Do NOT work on the `master` branch**

[↑ Go to top ↑](#quick-access-index)

---

#### Step 4: install dependencies

- Once you have changed the branch you can go ahead and install the dependencies.
- Dependencies are source files that a project needs to work properly it is generally installed using a package manager.(npm for node ; pip for python ; cargo for rust)

| ![Clone](/docs/07.png 'create new branch') |
| :------------------------------------------------------: |
|       **type command ``npm install``**        |
- once all the dependencies are installed you can start the local development server by running the command ``npm run dev``. 
- Generally JavaScript developers keep the same command to start the development server.
- you can type ``code .`` to start visual studio code in the current folder.
 
[↑ Go to top ↑](#quick-access-index)

---


#### Step 5: Open the template.txt file

- Now we need to open the file we are going to edit with your favourite code editor.
- Find the project folder on your computer.
- The `template.txt` file is directly in the `contribute-to-this-repo/src` folder.
- Open your code editor (Sublime, VS Code, Atom..etc) and use the `Open file` command and locate the template.txt file in the main directory of the project

|                  ![Open template file](/docs/08.png 'Open template.txt in your text editor')                   |
| :---------------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **Alternatively you can locate the file on your hard drive, right click, and open with your editor** |

- Now you have the file you are going to edit open in your editor and you are ready to start making changes to it.

[↑ Go to top ↑](#quick-access-index)

---

#### Step 6: Copy the card template

- We will make a copy of the card template to start working on it

> **NOTE : DO NOT EDIT THE `template.txt` file** as others will need this file to create their card.

| ![Find card template](/docs/09.png 'Find the card template') |
| :-----------------------------------------------------------------------: |

- Inside this section, you will find the json object with an ending comma.
- Copy everything form this file.


| ![Edit card template](/docs/10.png 'Edit the card template') |
| :-----------------------------------------------------------------------: |

- Paste the whole thing directly below the line indicated. right on top of the most recent contributor's card.
- Edit the newly pasted content to add your details.
- Make sure there is a single line of space between your card end and the last card's start. Also add a line of space between your card's start. It's good practice to keep our code as clear as possible
- Never use a linters or style formatters. The project has Prettier setup

| ![Paste card template](/docs/11.png 'Paste below the indicated line') |
| :---------------------------------------------------------------------------------: |

- This now is **your** card for you to customize and edit.

[↑ Go to top ↑](#quick-access-index)

---

#### Step 7: Commit your changes

- Go back to the terminal.
- Now you must add your changes to the staging area. This is roughly saying that git is looking at changes you just did.
- And then commit those changes.
- you can stop the already running development server by clicking ctrl+c and then typing Y.

| ![Add and Commit](/docs/13.png 'Add and Commit changes') |
| :-----------------------------------------------------------------------: |

[↑ Go to top ↑](#quick-access-index)

---

#### Step 8: Push your changes to GitHub

- Your changes are now saved or committed. But they are saved only locally, that is on your computer.
- Synchronizing local changes with your repository on GitHub is called a _Push_. You are "pushing" the changes from your local repository to the remote repository on GitHub.
- You can do so by typing ``git push -u origin {your-name}``. here origin has the link to the repository and {your-name} is the branch.

| ![Find card template](/docs/14.png 'Find the card template') |
| :-----------------------------------------------------------------------: |

- After a few seconds the operation is complete and now you have exactly the same copy of this branch on your machine as well as on GitHub.

[↑ Go to top ↑](#quick-access-index)

---

#### Step 9: Submit a PR(Pull Request)

- This is the moment you have been waiting for; submitting a _Pull Request_ (PR).
- So far all the work you have done has been on the fork of the project, which as you remember resides on your own account of GitHub.
- Now it's time to send your changes to the main project to be merged with it.
- This is called a [_Pull Request_](https://help.github.com/articles/about-pull-requests/ 'About Pull Requests - GitHub Help') because you are asking the original project maintainer to "pull" your changes into their project.
- Go to the main page of **your fork** on GitHub (it will have the fork icon and your own user name at the top).
- Towards the top of the repo you will see a highlighted pull request message with a green button.

|  ![Submit a Pull Request](/docs/15.png 'This is usually towards the top of the page, under the description and above the project files and folders')  |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                    :arrow_right_hook: **Click on the `Compare and pull request`**                                                     |
| ![Open a Pull Request](/docs/16.png 'You are requesting to merge your branch from your fork into the master branch of the original project') |
|                                              :arrow_right_hook: This is what the `Open a pull request` page looks like.                                               |

- REMEMBER _you are trying to merge your branch with the original project not with the `Master` branch on your fork_.
- The image below gives you an idea of how the header of your pull request should look like.
- On the left is the original project, followed by the master branch. On the right is your fork and the branch you created.

|![Submit a Pull Request](/docs/17.png "Click the green button. Don't be scared!")                    |
| :-----------------------------------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **Create a pull request: Write a title, Add optional information in the description and Click on `Create pull request`** |

- Don't be fazed by all the options. You only need to do these three steps for now.
- Leave the option `Allow edits from maintainers` ticked.
- Now, a _Pull Request_ will be sent to the project maintainer. As soon as it is reviewed and accepted your changes will appear on the [project web page](https://syknapse.github.io/Contribute-To-This-Project 'Contribute To This Project web page').

[↑ Go to top ↑](#quick-access-index)
---

#### Step 10: Celebrate

That's it. You have done it! You have now contributed to open source on GitHub.

You have added code to a live web page: [https://typesafe-rusty.github.io/contribute-to-this-repo/](https://typesafe-rusty.github.io/contribute-to-this-repo/)

Your changes **won't be visible immediately**; first they have to be reviewed, accepted, and merged by the project maintainer. Once they are merged your card should be visible and live on the page.

It is very normal for a reviewer to ask for changes on a PR. Think of it as good practice if it happens to you. Keep an eye for comments and requested changes. Once you make the requested changes (back in your branch) all you have to do is to commit and push your changes. The PR will automatically update with the new changes.

[↑ Go to top ↑](#quick-access-index)

---
### Acknowledgements

This project is heavily inspired by [Skynapse/Contribute-To-This-Project](https://github.com/Syknapse/Contribute-To-This-Project). I created this separate repository to avoid overwhelming the maintainers of the original project with numerous pull requests (which never came 😅).

### License

This project is licensed under the [MIT License](./LICENSE).
