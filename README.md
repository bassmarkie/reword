# Reword
## An experiment with React, Redux, and more

Demo: http://reword.divshot.io

This project is an effort to learn React and some emerging JS libraries. These include:
* [Redux](https://github.com/rackt/redux)
* [React Router](https://github.com/rackt/react-router)
* [React DnD](https://github.com/gaearon/react-dnd) for drag and drop
* [CSS Modules](https://github.com/css-modules/css-modules)

In addition, the app uses  
* [Firebase](https://www.firebase.com/) as a backend, including auth
* [Divshot](https://divshot.com/) to host
* [Material Design Spec](https://www.google.com/design/spec/material-design/introduction.html).  [Material UI](http://www.material-ui.com/#/home) components were used where applicable for convenience
* [gulp](https://github.com/gulpjs/gulp) and [Browserify](https://github.com/substack/node-browserify) to assemble to project
* [ESLint](http://eslint.org/)
* ES2015

With the exception of Browserify, gulp, ESLint, and ES2015, all of these technologies are new to me. I'm probably doing lots of stuff wrong, so feedback is welcomed!

## What is it?
It's a web app that mimics a classic refrigerator magnets game. If you log in, you can create phrases by dragging words around. Phrases are displayed along with their author on the main page. Eventually, I want to animate the word transitions so that they words fly around each time you see a new phrase.

Check out the latest version at http://reword.divshot.io.

## Infrequently Asked Questions
### Where are the tests!?
I do believe in testing. :) I don't usually write tests when I am doing exploratory coding though. Now that basic functionality is working, tests are the next thing on the list.

### Where are the action creators and action constants?
I started building this project using the action creator and action constant conventions advocated in the Redux docs. I evenually found that the additional indirection wasn't helpful to me, so I removed them in favor of passing object literals. [Apparently](http://rackt.org/redux/docs/basics/Actions.html#note-on-boilerplate), this is an ok thing to do.

## Build instructions

To build:  
`gulp`

Dev server:
`gulp serve`

To deploy:  
`divshot push`
