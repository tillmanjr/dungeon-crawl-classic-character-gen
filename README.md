# dungeon-crawl-classic-character-gen  
Generates characters and character sheets for Dungeon Crawl Classic  - pure vanilla HTML, JS, and CSS
    
## Dungeon Crawl Classic - character and character sheet generator  
  
Creates random characters for Dungeon Crawl Classic.   
Will create a printable character sheet with up to four characters (very close to the standard)   
Characters can be generated randomly or from the `characterData` of a previously created characters.  
  
To randomly generate a character, simply call the factory function `GenerateCharacter()`  
The `asJsonStr()` method of a `Character` instance will return a string representation which can later be used to reinstantiate the character.  
  
To reinstantiate a previously generated character call the factory function `LoadCharacter(fromJsonString)` with the value you earlier saved from calling the `asJsonStr()` method.  
  
There is a simple html page and a css file which allows one to generate up to four random characters.  
The resulting layout mimics the original character sheets, but not exactly.  
Each time a character is generated the result of the instance's `asJsonStr()` method is written to the console.  
Saving allows for the reinstantiation of the character - although no UI is currently provided  
  
## Warning  
The code is somewhat cobbled together. The html formatter is a textbook of how not to gen HTML from data  
  
## To Use:  
  
Open `src/character-generator.html` in any modern browser.  
You'll see four _New Character_ buttons, one for each of the four characters which can be generated - yeah, not elegant, but the final results are darn good.  
  
### Printing  
Generate your four characters then Ctrl-P (Cmd-P if using Fisher-Price OS) to invoke print, ensure Landscape layour is selected, then print.  
NOTE: the resulting to be printed character sheet will not contain the _New Character_ buttons   
  
## Hacky convention  
I use the following convention in Javascript files.
It fakes -sorta- the appearance of modules for script files loaded using simple `src` tags in HTML and in a manner that indicate the intended exports:  
__declaration__   
```
// my-file.js

function _fnOne ...

function _fnTwo ...

...

const my_file = {
    fnOne: _fnOne,
    fnTwo: _fnTwo
}
```
__usage__  
```
// calculate.js

const {
    fnOne,
    fnTwo
} = my_file

// use fnOne or fnTwo as needed

```

