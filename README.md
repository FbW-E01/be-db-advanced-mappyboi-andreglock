# Mappy boi project

This project is a pre-alpha prototype of an app with which regular citizens could report abandoned bicycles (and maybe more?) to their municipality. It is far from complete!

> Before starting with the task, have a look around the code!
> **NOTE:** There is 217 lines of relevant code/markup in all these files - it's less than you would think and it's not a bad idea to spend time going through all the files here!

## BACKEND

- `$ npm i`
- `$ npm run dev`

## FRONTED

- `$ npm i`
- `$ npm start`

# TASK

- Add your answers here and code your solutions normally.

1. Make it so that our frontend is able to actually send reports to the backend
2. Make it so that our backend is able to save the reports to a database
3. Make use of Schemas and Models in the backend!
4. What are the commit messages of the three previous commits to this repo? And who made them?
- In this repo there are three commit messages by the github-classroom:
    - Setting up GitHub Classroom Feedback
    - GitHub Classroom Feedback
    - Initial commit
- If I look in the original repo there are three messages by Req:
    - Improve note
    - Add note
    - Add tasks - forgot last time :facepalm:
5. What is a captcha?
-  A CAPTCHA (short for Completely Automated Public Turing Test To Tell Computers and Humans Apart) is a program designed to secure web sites from automated bot attacks and spammers by generating a test that humans can pass but computers cannot [[ref](https://web.archive.org/web/20171027203659/https://www.cylab.cmu.edu/partners/success-stories/recaptcha.html)].
6. Spend a maximum of 10 minutes on this question: how would you design a captcha for this form?
- I would use google reCaptcha, because it seems very easy to use. Adding a script tag in the head and a div with the captcha in the place it should be.
- The server side to validate the captcha seems more complicated, but [in this video there are instructions](https://www.youtube.com/watch?v=UzCkSzmEq8E).
- I am not going to do here because of the convoluted billing system from google.
7. **BONUS** Get all notifications from the backend and somehow show them in the fronted
8. **SUPER BONUS** Implement a captcha for this form without using any extra npm dependencies
9. **XTRA BONUS** Make the frontend look 𝓖𝓸𝓸𝓭
