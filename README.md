# Meme API

## Your Mission

Build a Meme Factory! You can use the imgflip API to get some meme images to work on (https://api.imgflip.com/).

There’s an option to provide quote text directly with the API; but we want to build our own UI around the concept, so we’re not going to use that 🙂

Of course, you’re free to use another API if you find this one to be too limiting to your taste!

Other meme APIs: https://www.programmableweb.com/category/meme/api

## How do I do that?


Level 1:

* Get some meme pictures from imgflip. Select the first one to be the current meme picture
* Allow the user to write some meme text at the top and bottom of that picture, in a meme style 
* Position that text over the current picture. Hint: use the Impact font or something similar to make your text look meme-like 🙂 (hint)
* Allow the user to change the current picture (randomly or with back/next buttons)

Level 2:

* Allow the user to upload their own picture to create a meme (hint, hint)
* Make sure the text does not overflow from the picture

Level 3:

* Find a way to export that meme as a real picture (hint), the useRef hook might come in handy here (hint) 
* Implement a reset button to remove the generated picture from the DOM (if you injected it in the DOM) and/or clean the user input