# Frontendmaster-Dog-Project

We're going to build a dog picture viewer using the dog.ceo API. This project is going to allow users to select a breed from a drop down list and then display a random picture of that breed.

Requirements:

Here are the API docs.
The list of breeds can be obtained by List all breeds API (see the docs linked above.) Request the list of breeds and then use those to create all the options for the select.
When the page first loads, show a loading spinner until the image has loaded. I used an emoji with CSS animations to do so. Feel free to look at what other people have done, write your own (short tutorial will be below), or use an animated GIF. When the image loads, hide the spinner and show the image.
You already know how to change the src of an img, but if you immediately hide the loading spinner and show the img, you'll have a flash of time where nothing on the page since the image hasn't loaded yet. You can side step this by using addEventListener on the img tag and listen for the "load" event. Once the "load" event happens, it means the image is loaded and ready to be shown.
You can do AJAX request using fetch and promises like I showed you in the previous chapter. I'm now going to show you a brand new feature called async / await and it makes this a lot easier.
