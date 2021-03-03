const initialDate = Date.now()
export const notes = [
  {
    title: '🌴 Do before the trip',
    body: `- [x] Buy diving suit
- [ ] Pay for insurance
- [ ] Drive the dog to friends
- [x] Clean apartment
- [ ] Visit the doctor
- [x] Ask Joe if he wants to go with me
- [ ] Book a hotel`,
    folders: 'all, Tasks',
    created: initialDate - 35,
    modified: initialDate - 5,
    isPinned: true,
    isArchived: false,
    isUsed: true,
    id: 'task-1',
  },
  {
    title: '🏋️ Create a new workout plan',
    body: `I feel like my current training became boring. I need to start doing different exercises.`,
    folders: 'all, Tasks',
    created: initialDate - 177,
    modified: initialDate,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'task-2',
  },
  {
    title: '🛒 Weekly shopping',
    body: `## Groceries

* Chicken
* Beef
* Some fish
* Pasta
* Tomatoes
* Strawberries
* Apples
* Orange juice
* Eggs
* White chocolate
* Milk chocolate
* Bread
* Olive Oil
* Potatoes

## Gym
* Protein shake
* High-protein snacks`,
    folders: 'all, Reference',
    created: initialDate - 24,
    modified: initialDate - 10,
    isPinned: true,
    isArchived: false,
    isUsed: true,
    id: 'groceries',
  },
  {
    title: '💰 Calculate the cost of home gym',
    body: ``,
    folders: 'all, Tasks',
    created: initialDate - 66,
    modified: initialDate - 15,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'task-4',
  },
  {
    title: '🔥 Test out React Native',
    body: ``,
    folders: 'all, Tasks',
    created: initialDate - 19,
    modified: initialDate - 12,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'task-5',
  },
  {
    title: '📜 JS snippet',
    body: `Some JS code. [Source](https://stackoverflow.com/a/15376715)
\`\`\`
document.getElementById('dvClickMe').onclick = debounce(function () {
      alert('clicked - native debounce');
    }, 250);


    function debounce(fun, mil){
      var timer;
      return function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          fun();
        }, mil);
      };
    }
      \`\`\``,
    folders: 'all, Reference',
    created: initialDate - 34,
    modified: initialDate - 32,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'js-snippet',
  },
  {
    title: '📜 CSS snippet',
    body: `Some CSS code. [Source](https://codepen.io/donovanh/pen/NPZqej)
\`\`\`
      /* Animation property */
      .box {
    animation: change - background 4s linear infinite alternate;
  }

/* Keyframes */
@keyframes change - background {
  0 % {
    background: blue;
  }
  50 % {
    background: orange;
  }
  100 % {
    background: green;
  }
}

pre {
  line - height: 2;
}

.box {
  background: blue;
  position: absolute;
  left: 20em;
  top: 6em;
  height: 6em;
  width: 6em;
}

.highlight {
  animation: move - highlight 4s linear infinite alternate;
  height: 1.75em;
  width: 12em;
  background: rgba(100, 100, 100, 0.2);
  position: absolute;
  top: 4em;
  left: 2em;
}

@keyframes move - highlight {
  100 % {
    top: 17em;
  }
}
\`\`\``,
    folders: 'all, Reference',
    created: initialDate - 71,
    modified: initialDate - 38,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'css-snippet',
  },
  {
    title: '🦵 Learn how to walk',
    body: `Nowadays it is important to have this skill to get a good job.`,
    folders: 'all, Tasks',
    created: initialDate - 80,
    modified: initialDate - 11,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'hints',
  },
  {
    title: '🍗 Grilled Chicken Fajita Salad',
    body: `![Grilled Chicken Fajita Salad Photo](https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4450582.jpg)

## Ingredients
* 1 pound skinless, boneless chicken breasts, cut into strips
* 1 (12 ounce) bottle liquid fajita marinade
* 2 tablespoons vegetable oil
* 1 clove garlic, minced
* ½ teaspoon kosher salt
* ¼ teaspoon ground black pepper
* 2 heads romaine lettuce
* 2 eaches red bell peppers, cut into 1/4-inch strips
* ½ onion, cut into 1/4-inch strips

## Directions
### Step 1
Combine chicken strips and fajita marinade in a large bowl. Let marinate in the refrigerator, 1 hour to overnight.

### Step 2
Preheat an outdoor grill for medium-high heat and lightly oil the grate.

### Step 3
Combine oil, minced garlic, salt, and pepper together in a bowl. Clean heads of romaine lettuce; cut in half from end to end. Brush halved romaine lettuce with oil-garlic mixture.

### Step 4
Add sliced peppers and onions to the oil-garlic mixture. Toss to combine.

### Step 5
Arrange the romaine cut-side down on the oiled grill. Cook just until grill marks appear, about 2 minutes. Remove and set aside to cool.

### Step 6
If you have a grill basket, spread marinated chicken evenly in the basket; otherwise, thread chicken and vegetables on skewers. Grill chicken for 5 minutes. Turn the chicken in the basket, add the vegetables, and grill until an instant-read thermometer inserted in the chicken reaches 165 degrees F (74 degrees C), about 10 minutes more.

### Step 7
Slice grilled lettuce and place on serving plates. Divide chicken and vegetables evenly over the grilled romaine lettuce.

## Nutrition Facts
282.9 calories; 26.6 g protein; 19.6 g carbohydrates; 64.6 mg cholesterol; 1738.4 mg sodium.

## Source
[Allrecipes](https://www.allrecipes.com/recipe/256627/grilled-chicken-fajita-salad/)`,
    folders: 'all, Recipes',
    created: initialDate - 109,
    modified: initialDate - 69,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'chicken',
  },
  {
    title: '🍪 Extreme Chocolate Cake',
    body: `![Extreme Chocolate Cake Photo](https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5388295.jpg&w=596&h=596&c=sc&poi=face&q=85)

## Ingredients
* 2 cups white sugar
* 1 ¾ cups all-purpose flour
* ¾ cup unsweetened cocoa powder
* 1 ½ teaspoons baking soda
* 1 ½ teaspoons baking powder
* 1 teaspoon salt
* 2 eggs
* 1 cup milk
* ½ cup vegetable oil
* 2 teaspoons vanilla extract
* 1 cup boiling water
* ¾ cup butter
* 1 ½ cups unsweetened cocoa powder
* 5 ⅓ cups confectioners' sugar
* ⅔ cup milk
* 1 teaspoon vanilla extract

## Directions
### Step 1
Preheat oven to 350 degrees F (175 degrees C). Grease and flour two 9 inch cake pans.

### Step 2
Use the first set of ingredients to make the cake. In a medium bowl, stir together the sugar, flour, cocoa, baking soda, baking powder and salt. Add the eggs, milk, oil and vanilla, mix for 3 minutes with an electric mixer. Stir in the boiling water by hand. Pour evenly into the two prepared pans.

### Step 3
Bake for 30 to 35 minutes in the preheated oven, until a toothpick inserted comes out clean. Cool for 10 minutes before removing from pans to cool completely.

### Step 4
To make the frosting, use the second set of ingredients. Cream butter until light and fluffy. Stir in the cocoa and confectioners' sugar alternately with the milk and vanilla. Beat to a spreading consistency.

### Step 5
Split the layers of cooled cake horizontally, cover the top of each layer with frosting, then stack them onto a serving plate. Frost the outside of the cake.


## Nutrition Facts
655 calories; 24.6 g total fat; 64 mg cholesterol; 524 mg sodium. 111.1 g carbohydrates; 7.3 g protein;


## Source
[Allrecipes](https://www.allrecipes.com/recipe/17528/extreme-chocolate-cake/)`,
    folders: 'all, Recipes',
    created: initialDate - 65,
    modified: initialDate - 25,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'cake',
  },
  {
    title: '🍲 Vegetarian Kale Soup',
    body: `![Vegetarian Kale Soup Photo](https://images.media-allrecipes.com/userphotos/720x405/1124623.jpg)

## Ingredients
* 2 tablespoons olive oil
* 1 yellow onion, chopped
* 2 tablespoons chopped garlic
* 1 bunch kale, stems removed and leaves chopped
* 8 cups water
* 6 cubes vegetable bouillon (such as Knorr)
* 1 (15 ounce) can diced tomatoes
* 6 white potatoes, peeled and cubed
* 2 (15 ounce) cans cannellini beans (drained if desired)
* 1 tablespoon Italian seasoning
* 2 tablespoons dried parsley
* salt and pepper to taste


## Directions
Heat the olive oil in a large soup pot; cook the onion and garlic until soft. Stir in the kale and cook until wilted, about 2 minutes. Stir in the water, vegetable bouillon, tomatoes, potatoes, beans, Italian seasoning, and parsley. Simmer soup on medium heat for 25 minutes, or until potatoes are cooked through. Season with salt and pepper to taste.

There is a [video](https://www.allrecipes.com/video/4871/vegetarian-kale-soup/?videoTimestamp=16000) available.

## Nutrition Facts
277 calories; 4.5 g fat; 50.9 g carbohydrates; 9.6 g protein; 0 mg cholesterol; 372 mg sodium.

## Source
[Allrecipes](https://www.allrecipes.com/recipe/132785/vegetarian-kale-soup/)`,
    folders: 'all, Recipes',
    created: initialDate - 46,
    modified: initialDate - 39,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'soup',
  },
  {
    title: '🙊 I love chocolate ice cream',
    body: `And can't do anything about it`,
    folders: 'all, Secrets',
    created: initialDate - 21,
    modified: initialDate - 33,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'secret',
  },
  {
    title: '⛏️ How to find diamonds in Minecraft',
    body: `![Lava 1](https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/9/99/Cavediamonds.jpg?width=814)


Diamonds are the most sought-after commodity in Minecraft. Why? Because not only are the incredibly rare, but they have so many practical uses! One of the most rewarding and enjoyable experiences in the game is the search for these shiny blue gems.

Before you start on your adventure, know that you need the right tools to get the job done. To mine a Diamond you’ll need an Iron Pickaxe or a Diamond Pickaxe. A Wood, Stone, or Gold Pickaxe won’t do the trick. You’ll simply mine through the Diamond Ore and no Diamonds will be produced. What a waste!

## How to Find Diamonds
With the correct Pickaxe in hand (and a plethora of Torches), it’s time to search for some Diamonds. There are many ways to successfully locate Diamond Ore.

### Know Where to Mine
![Diamonds](https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/f/f2/Diamonds.jpg?width=640)
Diamond Ore only appears between layers 1-16, but it is most abundant on layer 12. To check what layer you're on, check the Y value on your map (F3 on PC) (FN + F3 on Mac). It can be found in veins as large as 8 blocks of Ore. Lava frequently appears between layers 4-10. To stay safe, be sure to stay above these layers. This way you’ll find Diamonds and be less likely to get burned to a crisp.

### Explore caves
![Lava 2](https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/9/99/Cavediamonds.jpg?width=640)
An effective (and fun) method of finding Diamonds is to explore Cave systems. Sometimes Caves can be absolutely massive, and it’s easy to spot Diamond Ore with so much visibility. If there is a lot of lava in your way, a water bucket may be handy to create easy paths.

### The Staircase Method
![Stairs](https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/7/72/Staircase.jpg?width=640)
Since you should never mine straight down in Minecraft, the staircase method is a great way to get to the depths of the world safely and efficiently. It’s exactly what it sounds like: dig yourself down at a 45 degree angle leaving a staircase pattern behind you. With each step dig one block deeper than the last. You’ll be able to return to the surface by merely jumping your way back up. The staircase covers a lot of ground and is a widely used method to successfully find Diamonds and other minerals.

### The Branch Mining Method
![Branch](https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/e/ef/Branchmining.jpg?width=640)
A very effective way to find Diamonds is to branch mine. This involves covering a lot of surface area by making a 2x2 tunnel and digging individual “branches” out from it every third block. By doing this you’re covering a lot of ground quickly without breaking any unnecessary blocks.

### The Strip Mining Method
![Strip](https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/5/57/Stripmining.jpg?width=640)
Strip mining is a lot less fun than it sounds. It involves mining literally everything in search of rare Ore. To strip mine, get to the required layer (1-16 if you're looking for diamonds) and dig an outline of a box around yourself. This will leave you with a cube of blocks in the middle. Simply mine it away to create a large open area. You're bound to find what you're looking for this way, but it's very time consuming. You'll also gain a lot of materials (especially Cobblestone) and create a large area to build in!

### Chests
![Chests](https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/d/db/Chest.jpg?width=640)
If you’re really lucky, Diamonds can be found in Chests within Abandoned Mine Shafts or Villages. Due to the rarity of this occurrence, don’t rely on chests on your hunt for diamonds.

### Other Tips
- Don’t get too excited and quickly mine Diamond Ore. Make sure you check the surrounding blocks, first. If you don’t, you might find yourself surprised by a Lava flow and lose your treasure, or worse, your life.
- Always bring lots of Torches. Mining is a dark job. If you want to ensure you can see bring the necessary tools.
- Lava does not guarantee Diamonds. Many players associate Lava with finding rare Ore, but that's not the truth. Because Lava is most common in the same place that Diamonds are found there is often a crossover.
- While these are some great tips, Minecraft is vast and limitless. Try discovering your own Diamond mining techniques!

![Ender](https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/d/db/Endportal.jpg?width=814)

## Source
[IGN](https://www.ign.com/wikis/minecraft/How_to_Find_Diamonds)`,
    folders: 'all, Business',
    created: initialDate - 52,
    modified: initialDate - 2,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'diamonds',
  },
  {
    title: '📖 Bold Text in HTML4',
    body: `To make text bold, wrap it in <b> tag. For example,

    <b>This text is bold</b>
    `,
    folders: 'all, Reference',
    created: initialDate - 73,
    modified: initialDate - 13,
    isPinned: false,
    isArchived: true,
    isUsed: true,
    id: 'html4',
  },
  {
    title: '📄 README example',
    body: `

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

\`\`\`
Give examples
\`\`\`

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

\`\`\`
Give the example
\`\`\`

And repeat until finished


End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

\`\`\`
Give an example
\`\`\`

### And coding style tests

Explain what these tests test and why

\`\`\`
Give an example
\`\`\`

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

## Template author

[PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2/)

      `,
    folders: 'all, Reference',
    created: initialDate - 58,
    modified: initialDate - 17,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'readme',
  },
  {
    title: '📑 Markdown cheatsheet',
    body: `This is intended as a quick reference and showcase. For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/) and the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/).

Note that there is also a [Cheatsheet specific to Markdown Here](./Markdown-Here-Cheatsheet) if that's what you're looking for. You can also check out [more Markdown tools](./Other-Markdown-Tools).

##### Table of Contents
[Headers](#headers)
[Emphasis](#emphasis)
[Lists](#lists)
[Links](#links)
[Images](#images)
[Code and Syntax Highlighting](#code)
[Tables](#tables)
[Blockquotes](#blockquotes)
[Inline HTML](#html)
[Horizontal Rule](#hr)
[Line Breaks](#lines)
[YouTube Videos](#videos)

<a name="headers"/>

## Headers

\`\`\`no- highlight
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline - ish style:

Alt - H1
  ======

  Alt - H2
------
  \`\`\`

# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

<a name="emphasis"/>

## Emphasis

\`\`\`no - highlight
Emphasis, aka italics, with * asterisks * or _underscores_.

Strong emphasis, aka bold, with ** asterisks ** or __underscores__.

Combined emphasis with ** asterisks and _underscores_ **.

Strikethrough uses two tildes. ~~Scratch this.~~
  \`\`\`

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~


<a name="lists"/>

## Lists

(In this example, leading and trailing spaces are shown with with dots: ⋅)

\`\`\`no - highlight
1. First ordered list item
2. Another item
⋅⋅* Unordered sub - list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub - list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items.Notice the blank line above, and the leading spaces(at least one, but we'll use three here to also align the raw Markdown).

  ⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
  - Or minuses
    + Or pluses
      \`\`\`

1. First ordered list item
2. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.
   Note that this line is separate, but within the same paragraph.
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

<a name="links"/>

## Links

There are two ways to create links.

\`\`\`no - highlight
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference - style link definitions][1]

Or leave it empty and use the[link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
  http://www.example.com or <http://www.example.com> and sometimes
example.com(but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case -insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
\`\`\`

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

<a name="images"/>

## Images

\`\`\`no - highlight
Here's our logo (hover to see the title text):

Inline - style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

  Reference - style:
  ![alt text][logo]

  [logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
  \`\`\`

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

<a name="code"/>

## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and *Markdown Here* -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. *Markdown Here* supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).

\`\`\`no - highlight
Inline\`code\` has\`back-ticks around\` it.
\`\`\`

Inline \`code\` has \`back - ticks around\` it.

Blocks of code are either fenced by lines with three back-ticks <code>\`\`\`</code >, or are indented with four spaces.I recommend only using the fenced code blocks-- they're easier and only they support syntax highlighting.

  < pre lang = "no-highlight" > <code>\`\`\`javascript
  var s = "JavaScript syntax highlighting";
  alert(s);
  \`\`\`

  \`\`\`python
  s = "Python syntax highlighting"
  print s
  \`\`\`

  \`\`\`
  No language indicated, so no syntax highlighting.
  But let's throw in a &lt;b&gt;tag&lt;/b&gt;.
  \`\`\`
</code></ >



  \`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

    \`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`

    \`\`\`
No language indicated, so no syntax highlighting in Markdown Here (varies on Github).
But let's throw in a <b>tag</b>.
\`\`\`


  < a name = "tables" />

## Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and *Markdown Here* supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

  \`\`\`no-highlight
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3
\`\`\`

Colons can be used to align columns.

| Tables | Are | Cool |
| ------------- |: -------------:| -----:|
| col 3 is | right - aligned | $1600 |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |

  There must be at least 3 dashes separating each header cell.The outer pipes(|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
* Still * | \`renders\` | ** nicely **
  1 | 2 | 3

  < a name = "blockquotes" />

## Blockquotes

  \`\`\`no-highlight
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
\`\`\`

  > Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps.Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

  < a name = "html" />

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

  \`\`\`no-highlight
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
\`\`\`

  < dl >
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</ >

  <a name="hr" />

## Horizontal Rule

  \`\`\`
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
\`\`\`

Three or more...

---

  Hyphens

  ***

  Asterisks

___

Underscores

  < a name = "lines" />

## Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover-- hit & lt; Enter & gt; once(i.e., insert one newline), then hit it twice(i.e., insert two newlines), see what happens.You'll soon learn to get what you want. "Markdown Toggle" is your friend.

Here are some things to try out:

\`\`\`
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
\`\`\`

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a * separate paragraph *.

This line is also begins a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

  (Technical note: * Markdown Here * uses GFM line breaks, so there's no need to use MD's two - space line breaks.)

  < a name = "videos" />

## YouTube Videos

They can't be added directly but you can add an image with a link to the video like this:

  \`\`\`no-highlight
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
\`\`\`

Or, in pure Markdown, but losing the image sizing and border:

\`\`\`no-highlight
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
\`\`\`

Referencing a bug by #bugID in your git commit links it to the slip.For example #1.

---

  License: [CC - BY](https://creativecommons.org/licenses/by/3.0/)

  ## Cheatsheet Source
  [Source](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)`,
    folders: 'all, Reference',
    created: initialDate - 38,
    modified: initialDate - 3,
    isPinned: false,
    isArchived: false,
    isUsed: true,
    id: 'markdown',
  },
]

export const folders = ['Reference', 'Recipes', 'Secrets', 'Business', 'Tasks']

export const initialSelectedNoteId = 'readme'

export const emoji = [
  '😀',
  '😁',
  '😂',
  '🤣',
  '😃',
  '😄',
  '😅',
  '😆',
  '😉',
  '😊',
  '😋',
  '😎',
  '😍',
  '😘',
  '😗',
  '😙',
  '😚',
  '☺️',
  '🙂',
  '🤗',
  '🤩',
  '🤔',
  '🤨',
  '😐',
  '😑',
  '😶',
  '🙄',
  '😏',
  '😣',
  '😥',
  '😮',
  '🤐',
  '😯',
  '😪',
  '😫',
  '😴',
  '😌',
  '😛',
  '😜',
  '😝',
  '🤤',
  '😒',
  '😓',
  '😔',
  '😕',
  '🙃',
  '🤑',
  '😲',
  '☹️',
  '🙁',
  '😖',
  '😞',
  '😟',
  '😤',
  '😢',
  '😭',
  '😦',
  '😧',
  '😨',
  '😩',
  '🤯',
  '😬',
  '😰',
  '😱',
  '😳',
  '🤪',
  '😵',
  '😡',
  '😠',
  '🤬',
  '😷',
  '🤒',
  '🤕',
  '🤢',
  '🤮',
  '🤧',
  '😇',
  '🤠',
  '🤡',
  '🤥',
  '🤫',
  '🤭',
  '🧐',
  '🤓',
  '😈',
  '👿',
  '👹',
  '👺',
  '💀',
  '👻',
  '👽',
  '🤖',
  '💩',
  '😺',
  '😸',
  '😹',
  '😻',
  '😼',
  '😽',
  '🙀',
  '😿',
  '😾',
  '🤲',
  '👐',
  '🙌',
  '👏',
  '🤝',
  '👍',
  '👎',
  '👊',
  '✊',
  '🤛',
  '🤜',
  '🤞',
  '🤟',
  '🤘',
  '👌',
  '👈',
  '👉',
  '👆',
  '👇',
  '✋',
  '🤚',
  '🖖',
  '👋',
  '🤙',
  '💪',
  '🖕',
  '🙏',
  '💍',
  '💄',
  '💋',
  '👄',
  '👅',
  '👂',
  '👃',
  '👣',
  '👀',
  '🧠',
  '👤',
  '👥',
  '🧥',
  '👚',
  '👕',
  '👖',
  '👔',
  '👗',
  '👙',
  '👘',
  '👠',
  '👡',
  '👢',
  '👞',
  '👟',
  '🧦',
  '🧤',
  '🧣',
  '🎩',
  '🧢',
  '👒',
  '🎓',
  '👑',
  '👝',
  '👛',
  '👜',
  '💼',
  '🎒',
  '👓',
  '🌂',
  '🐶',
  '🐱',
  '🐭',
  '🐹',
  '🐰',
  '🦊',
  '🐻',
  '🐼',
  '🐨',
  '🐯',
  '🦁',
  '🐮',
  '🐷',
  '🐽',
  '🐸',
  '🐵',
  '🙈',
  '🙉',
  '🙊',
  '🐒',
  '🐔',
  '🐧',
  '🐦',
  '🐤',
  '🐣',
  '🐥',
  '🦆',
  '🦅',
  '🦉',
  '🦇',
  '🐺',
  '🐗',
  '🐴',
  '🦄',
  '🐝',
  '🐛',
  '🦋',
  '🐌',
  '🐚',
  '🐞',
  '🐜',
  '🦗',
  '🦂',
  '🐢',
  '🐍',
  '🦎',
  '🦖',
  '🦕',
  '🐙',
  '🦑',
  '🦐',
  '🦀',
  '🐡',
  '🐠',
  '🐟',
  '🐬',
  '🐳',
  '🐋',
  '🦈',
  '🐊',
  '🐅',
  '🐆',
  '🦓',
  '🦍',
  '🐘',
  '🦏',
  '🐪',
  '🐫',
  '🦒',
  '🐃',
  '🐂',
  '🐄',
  '🐎',
  '🐖',
  '🐏',
  '🐑',
  '🐐',
  '🦌',
  '🐕',
  '🐩',
  '🐈',
  '🐓',
  '🦃',
  '🐇',
  '🐁',
  '🐀',
  '🦔',
  '🐾',
  '🐉',
  '🐲',
  '🌵',
  '🎄',
  '🌲',
  '🌳',
  '🌴',
  '🌱',
  '🌿',
  '☘️',
  '🍀',
  '🎍',
  '🎋',
  '🍃',
  '🍂',
  '🍁',
  '🍄',
  '🌾',
  '💐',
  '🌷',
  '🌹',
  '🥀',
  '🌺',
  '🌸',
  '🌼',
  '🌻',
  '🌞',
  '🌝',
  '🌛',
  '🌜',
  '🌚',
  '🌕',
  '🌖',
  '🌗',
  '🌘',
  '🌑',
  '🌒',
  '🌓',
  '🌔',
  '🌙',
  '🌎',
  '🌍',
  '🌏',
  '💫',
  '⭐️',
  '🌟',
  '✨',
  '⚡️',
  '☄️',
  '💥',
  '🔥',
  '🌈',
  '☀️',
  '⛅️',
  '☁️',
  '❄️',
  '☃️',
  '⛄️',
  '💨',
  '💧',
  '💦',
  '☔️',
  '☂️',
  '🌊',
  '🍏',
  '🍎',
  '🍐',
  '🍊',
  '🍋',
  '🍌',
  '🍉',
  '🍇',
  '🍓',
  '🍈',
  '🍒',
  '🍑',
  '🍍',
  '🥥',
  '🥝',
  '🍅',
  '🍆',
  '🥑',
  '🥦',
  '🥒',
  '🌽',
  '🥕',
  '🥔',
  '🍠',
  '🥐',
  '🍞',
  '🥖',
  '🥨',
  '🧀',
  '🥚',
  '🍳',
  '🥞',
  '🥓',
  '🥩',
  '🍗',
  '🍖',
  '🌭',
  '🍔',
  '🍟',
  '🍕',
  '🥪',
  '🥙',
  '🌮',
  '🌯',
  '🥗',
  '🥘',
  '🥫',
  '🍝',
  '🍜',
  '🍲',
  '🍛',
  '🍣',
  '🍱',
  '🥟',
  '🍤',
  '🍙',
  '🍚',
  '🍘',
  '🍥',
  '🥠',
  '🍢',
  '🍡',
  '🍧',
  '🍨',
  '🍦',
  '🥧',
  '🍰',
  '🎂',
  '🍮',
  '🍭',
  '🍬',
  '🍫',
  '🍿',
  '🍩',
  '🍪',
  '🌰',
  '🥜',
  '🍯',
  '🥛',
  '🍼',
  '☕️',
  '🍵',
  '🥤',
  '🍶',
  '🍺',
  '🍻',
  '🥂',
  '🍷',
  '🥃',
  '🍸',
  '🍹',
  '🍾',
  '🥄',
  '🍴',
  '🥣',
  '🥡',
  '🥢',
  '⚽️',
  '🏀',
  '🏈',
  '⚾️',
  '🏐',
  '🏉',
  '🎾',
  '🎱',
  '🏓',
  '🏸',
  '🥅',
  '🏒',
  '🏑',
  '🏏',
  '⛳️',
  '🏹',
  '🎣',
  '🥊',
  '🥋',
  '🎽',
  '🥌',
  '🛷',
  '🎿',
  '🏆',
  '🥇',
  '🥈',
  '🥉',
  '🏅',
  '🎫',
  '🎪',
  '🎭',
  '🎨',
  '🎬',
  '🎤',
  '🎧',
  '🎼',
  '🎹',
  '🥁',
  '🎷',
  '🎺',
  '🎸',
  '🎻',
  '🎲',
  '♟',
  '🎯',
  '🎳',
  '🎮',
  '🎰',
  '🚗',
  '🚕',
  '🚙',
  '🚌',
  '🚎',
  '🚓',
  '🚑',
  '🚒',
  '🚐',
  '🚚',
  '🚛',
  '🚜',
  '🛴',
  '🚲',
  '🛵',
  '🚨',
  '🚔',
  '🚍',
  '🚘',
  '🚖',
  '🚡',
  '🚠',
  '🚟',
  '🚃',
  '🚋',
  '🚞',
  '🚝',
  '🚄',
  '🚅',
  '🚈',
  '🚂',
  '🚆',
  '🚇',
  '🚊',
  '🚉',
  '✈️',
  '🛫',
  '🛬',
  '💺',
  '🚀',
  '🛸',
  '🚁',
  '🛶',
  '⛵️',
  '🚤',
  '🚢',
  '⚓️',
  '⛽️',
  '🚧',
  '🚦',
  '🚥',
  '🚏',
  '🗿',
  '🗽',
  '🗼',
  '🏰',
  '🏯',
  '🎡',
  '🎢',
  '🎠',
  '⛲️',
  '🌋',
  '🗻',
  '⛺️',
  '🏠',
  '🏡',
  '🏭',
  '🏢',
  '🏬',
  '🏣',
  '🏤',
  '🏥',
  '🏦',
  '🏨',
  '🏪',
  '🏫',
  '🏩',
  '💒',
  '⛪️',
  '🕌',
  '🕍',
  '🕋',
  '🗾',
  '🎑',
  '🌅',
  '🌄',
  '🌠',
  '🎇',
  '🎆',
  '🌇',
  '🌆',
  '🌃',
  '🌌',
  '🌉',
  '🌁',
  '⌚️',
  '📱',
  '📲',
  '💻',
  '⌨️',
  '💽',
  '💾',
  '💿',
  '📀',
  '📼',
  '📷',
  '📸',
  '📹',
  '🎥',
  '📞',
  '☎️',
  '📟',
  '📠',
  '📺',
  '📻',
  '⏰',
  '⌛️',
  '⏳',
  '📡',
  '🔋',
  '🔌',
  '💡',
  '🔦',
  '💸',
  '💵',
  '💴',
  '💶',
  '💷',
  '💰',
  '💳',
  '💎',
  '⚖️',
  '🔧',
  '🔨',
  '⚒',
  '🔩',
  '⚙️',
  '🔫',
  '💣',
  '🔪',
  '⚔️',
  '🚬',
  '⚰️',
  '⚱️',
  '🏺',
  '🔮',
  '📿',
  '💈',
  '⚗️',
  '🔭',
  '🔬',
  '💊',
  '💉',
  '🚽',
  '🚰',
  '🚿',
  '🛁',
  '🔑',
  '🚪',
  '🛌',
  '🛒',
  '🎁',
  '🎈',
  '🎏',
  '🎀',
  '🎊',
  '🎉',
  '🎎',
  '🏮',
  '🎐',
  '✉️',
  '📩',
  '📨',
  '📧',
  '💌',
  '📥',
  '📤',
  '📦',
  '📪',
  '📫',
  '📬',
  '📭',
  '📮',
  '📯',
  '📜',
  '📃',
  '📄',
  '📑',
  '📊',
  '📈',
  '📉',
  '📆',
  '📅',
  '📇',
  '📋',
  '📁',
  '📂',
  '📰',
  '📓',
  '📔',
  '📒',
  '📕',
  '📗',
  '📘',
  '📙',
  '📚',
  '📖',
  '🔖',
  '🔗',
  '📎',
  '🖇',
  '📐',
  '📏',
  '📌',
  '📍',
  '✂️',
  '🖊',
  '🖋',
  '✒️',
  '🖌',
  '🖍',
  '📝',
  '✏️',
  '🔍',
  '🔎',
  '🔏',
  '🔐',
  '🔒',
  '🔓',
  '❤️',
  '🧡',
  '💛',
  '💚',
  '💙',
  '💜',
  '🖤',
  '💔',
  '❣️',
  '💕',
  '💞',
  '💓',
  '💗',
  '💖',
  '💘',
  '💝',
  '💟',
  '☮️',
  '✝️',
  '☪️',
  '🕉',
  '☸️',
  '✡️',
  '🔯',
  '🕎',
  '☯️',
  '☦️',
  '🛐',
  '⛎',
  '♈️',
  '♉️',
  '♊️',
  '♋️',
  '♌️',
  '♍️',
  '♎️',
  '♏️',
  '♐️',
  '♑️',
  '♒️',
  '♓️',
  '🆔',
  '⚛️',
  '🉑',
  '☢️',
  '☣️',
  '📴',
  '📳',
  '🈶',
  '🈚️',
  '🈸',
  '🈺',
  '🈷️',
  '✴️',
  '🆚',
  '💮',
  '🉐',
  '秘️',
  '祝️',
  '🈴',
  '🈵',
  '🈹',
  '🈲',
  '🅰️',
  '🅱️',
  '🆎',
  '🆑',
  '🅾️',
  '🆘',
  '❌',
  '⭕️',
  '🛑',
  '⛔️',
  '📛',
  '🚫',
  '💯',
  '💢',
  '♨️',
  '🚷',
  '🚯',
  '🚳',
  '🚱',
  '🔞',
  '📵',
  '🚭',
  '❗️',
  '❕',
  '❓',
  '❔',
  '‼️',
  '⁉️',
  '🔅',
  '🔆',
  '〽️',
  '⚠️',
  '🚸',
  '🔱',
  '⚜️',
  '🔰',
  '♻️',
  '✅',
  '🈯️',
  '💹',
  '❇️',
  '✳️',
  '❎',
  '🌐',
  '💠',
  'Ⓜ️',
  '🌀',
  '💤',
  '🏧',
  '🚾',
  '♿️',
  '🅿️',
  '🈳',
  '🈂️',
  '🛂',
  '🛃',
  '🛄',
  '🛅',
  '🚹',
  '🚺',
  '🚼',
  '🚻',
  '🚮',
  '🎦',
  '📶',
  '🈁',
  '🔣',
  'ℹ️',
  '🔤',
  '🔡',
  '🔠',
  '🆖',
  '🆗',
  '🆙',
  '🆒',
  '🆕',
  '🆓',
  '0️⃣',
  '1️⃣',
  '2️⃣',
  '3️⃣',
  '4️⃣',
  '5️⃣',
  '6️⃣',
  '7️⃣',
  '8️⃣',
  '9️⃣',
  '🔟',
  '🔢',
  '#️⃣',
  '*️⃣',
  '⏏️',
  '▶️',
  '⏩',
  '⏪',
  '⏫',
  '⏬',
  '◀️',
  '🔼',
  '🔽',
  '➡️',
  '⬅️',
  '⬆️',
  '⬇️',
  '↗️',
  '↘️',
  '↙️',
  '↖️',
  '↕️',
  '↔️',
  '↪️',
  '↩️',
  '⤴️',
  '⤵️',
  '🔀',
  '🔁',
  '🔂',
  '🔄',
  '🔃',
  '🎵',
  '🎶',
  '➕',
  '➖',
  '➗',
  '✖️',
  '♾',
  '💲',
  '💱',
  '™️',
  '©️',
  '®️',
  '﹋️',
  '➰',
  '➿',
  '🔚',
  '🔙',
  '🔛',
  '🔝',
  '🔜',
  '✔️',
  '☑️',
  '🔘',
  '⚪️',
  '⚫️',
  '🔴',
  '🔵',
  '🔺',
  '🔻',
  '🔸',
  '🔹',
  '🔶',
  '🔷',
  '🔳',
  '🔲',
  '▪️',
  '▫️',
  '◾️',
  '◽️',
  '◼️',
  '◻️',
  '⬛️',
  '⬜️',
  '🔈',
  '🔇',
  '🔉',
  '🔊',
  '🔔',
  '🔕',
  '📣',
  '📢',
  '💬',
  '💭',
  '♠️',
  '♣️',
  '♥️',
  '♦️',
  '🃏',
  '🎴',
  '🀄️',
  '🕐',
  '🕑',
  '🕒',
  '🕓',
  '🕔',
  '🕕',
  '🕖',
  '🕗',
  '🕘',
  '🕙',
  '🕚',
  '🕛',
  '🕜',
  '🕝',
  '🕞',
  '🕟',
  '🕠',
  '🕡',
  '🕢',
  '🕣',
  '🕤',
  '🕥',
  '🕦',
  '🕧',
  '🏳️',
  '🏴',
  '🏁',
  '🚩',
  '🏳️',
  '🌈',
  '🏴',
  '☠️',
]
