# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./design/screenshot-desktop.png)

### Links

- Solution URL: [GitHub](https://github.com/mbdelarosa/intro-component-with-signup-form/)
- Live Site URL: [Intro Component with Sign Up Form](https://mbdelarosa.github.io/intro-component-with-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- BEM naming convention

### What I learned

- I was able to reuse some of the things I learned from the Base Apparel Coming Soon challenge for this solution, such as how the form elements should be structured with ARIA attributes. Something new I learned from this challenge though is that we should also use the `aria-describedby` attribute to link the Terms and Conditions text to the Submit button since it provides further information about the button
- I also learned the different available values for the `autocomplete` attribute which I was able to use here, such as `given-name` for the First Name field and `family-name` for the Last Name field

### Continued development

I'd like to learn more about standard form accessibility rules and design best practices when implementing forms and custom form validation

### Useful resources

- ["Sign-in form best practices"](https://web.dev/sign-in-form-best-practices/) by Sam Dutton on web.dev - This article gave good explanations and examples on how to properly implement an accessible sign-in/sign up form
- ["Password Forms — 3 Ways to Make Them More Accessible"](https://medium.com/kiipco/password-creation-3-ways-to-make-it-accessible-bc8f2b53b7ee) by Quymbee Chen on Medium - Further readings on making password forms accessible

## Author

- Frontend Mentor - [@mbdelarosa](https://www.frontendmentor.io/profile/mbdelarosa)