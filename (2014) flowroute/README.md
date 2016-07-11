Flowroute Wholesale Pricing Mockup
Author: Bradley Stafford

Hello! Thank you for giving me the opportunity to code up this page. This is the first time I've actually had the opportunity to code from a genuine .psd file and not just a simple PNG. 

I've got to say that as a whole, the .psd stuff allows me to extrapolate a lot more information about possible UX/UI features and appearances. 

Anyways, I've spent a lot of this weekend coding this thing, and I hope you like it!
Let me talk a bit about it. 

## THE LIBRARIES
These are things I externally sourced in building

## MODERNIZR
I didn't directly use any feature detection from Modernizr, but at this point
I feel almost empty without it. So I included it. 

## JQUERY
JQuery is a given, just makes some DOM js a lot easier. 

## HTML5SHIV (https://code.google.com/p/html5shiv/)
This is a support for earlier versions of IE that may not support HTML5 elements. 

## FONTELLO (http://fontello.com/)
While not technically a javascript library, this is an SVG icon library that's packaged and advertised as a 'pick your own set of icons' font generator. I used to use fontawesome, but fontello includes that (and many more libraries) plus it's far more lightweight since I needed only a few icons. 

## SASS/SCSS
The fact that Flowroute develops in SASS/SCSS got me very curious about what it could do, So I decided to learn it
And honestly, I thought LESS was impressive, but I think SASS has an edge over it just by virtue of control structures. You can execute FOREACH LOOPS IN HERE. THAT'S NUTS. 

(I didn't use Grunt/Node or any other js server tech to compile it, I instead opted for Scout, which is just a GUI poller for changed SASS/SCSS files.) 

The best part about using SASS was it allowed the '320 and up' style of design where as you increase in resolution your stylesheets don't become hot and complicated messes.
If my coding conventions with SCSS were crude, I apologize, I'm still a student of web technologies first and foremost! :)

## THE DIRECTORIES
You may look at my SCSS/SASS folders and think "Holy cow, this kid split up EVERYTHING", but the truth is, I sourced
this file structure from an old wordpress theme I used to design my personal website, it's a boilerplate for responsive
design, so I took the structure, gutted it of its wordpress contents, and used it for this. 

The structure is adapted from Bones for Wordpress, Licensed under WTFPL. 
(http://en.wikipedia.org/wiki/WTFPL) 
(http://themble.com/bones/)

```
flowroute/
    /scss
        /breakpoints - Contains responsive breakpoint SCSS files
        /modules - Contains styles for Alerts, buttons, forms
        /partials - Contains functions, a reset, typography, variables, etc.
        config.scss
        ie.scss
        style.scss
    /js
       /libraries
            Libraries mentioned above
       driver.js
    /images

    /css
        /fontello

 ```   

Anyways, I hope that my code speaks for itself, and once again: thank you for this opportunity, I really appreciate it. :)

Regards,

Bradley




