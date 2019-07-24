import NotesLayout from "../../components/NotesLayout.jsx"
import RainbowText from "../../components/RainbowText.jsx"

export default NotesLayout

# Summer Site Notes

Notes on how to maintain, update, and write to this site.

## Basics

The site you are viewing right now is created with [Next.js](https://nextjs.org/) - 
which is a [React](https://reactjs.org/) framework in JavaScript.

### Next.js basics
At a high level, Next.js is just a website generator. You'll have a project with a `/pages` directory,
and every React/MDX file (more on MDX below) in that directory creates a webpage.
For example: if your directory looked like:

```
not_included.jsx
/pages
  /about
    index.jsx
  /authors
    alex.js
    brad.mdx
    chris.md
  index.mdx
  example.jsx
```

Next would generate a site with URL's looking like:

```
example.com/
example.com/about
example.com/authors/alex
example.com/authors/brad
example.com/authors/chris
example.com/example
```

**Note**: only files with `.js`, `.jsx`, `.md` or `.mdx` files will generate a new page.
`.js` and `.jsx` files are usually React files, `.md` and `.mdx` are MDX files - see below.


Never written in javascript or react before? That's fine, you may not have to!

This site uses a Next.js plugin called [@next/mdx](https://mdxjs.com/getting-started/next/) - 
which brings [MDX](https://mdxjs.com/) to a Next site.

Okay... so what's MDX??

### MDX Basics

MDX is very similar to Markdown (hence **MD**X). If you have ever written
a README.md file on Github, you've written in markdown! This is some example Markdown:


```
#### Woah a subheader

This is regular text, but you **Can make things bold** or *italicized*, or
just ~~cross some stuff out~~~ - with [links](https://github.com), of course.

```

Rendered, the above example looks like:


#### Woah a subheader

This is regular text, but you **Can make things bold** or *italicized*, or
just ~~cross some stuff out~~~ - with [links](https://github.com), of course.

But MDX gives us really cool opportunity to add React components inside our markdown!

Let's say I had a React component called `RainbowText` that renders some text with a cool rainbow style.

In MDX, I could do something like:

```
This would be normal boring markdown - and <RainbowText>this is rainbow text!!</RainbowText>
```

This would be normal boring markdown - and <RainbowText>this is rainbow text!!</RainbowText>


## Why Next and MDX?

- JavaScript bc it works nicely with [Glitch](https://glitch.com)
- Next.js is pretty simple to set up, and the `/pages` directory rendering is easy to understand for beginniners (I hope)
- React bc it's super extensible and customizable
- MDX so non-javascript contributors could still contribute greatly without knowing crazy React syntax.


## Setting up dev environment

<div id="dev"></div>


### Setting up locally

Let's not go there

### Setting up on glitch

There are two instances of `site` on Glitch: 
[`https://os-ucsd-summer-dev.glitch.me`](https://os-ucsd-summer-dev.glitch.me) and
[`https://os-ucsd-summer.glitch.me`](https://os-ucsd-summer.glitch.me).

The `os-ucsd-summer-dev` is the development app, that's the one that we write content to live, and verify that it won't break the site. The `os-ucsd-summer` one is the "official", front-facing site. It should always be up, and it's not up to date.

The official codebase is found at [os-ucsd/os-summer](https://github.com/os-ucsd/os-summer) on Github. Both Glitch projects have this repo as the `origin` remote. So, on `os-ucsd-summer-dev`, we `Export to Github` to this repositry, then on `os-ucsd-summer`, we `Import from Github`. 


Any maintainer who needs access to `os-ucsd-summer-dev` should message Alex for the invite link. Access to `os-ucsd-summer` could also be given, but you probably won't need access unless you're updating it.


The workflow for editing this site should go like:

1. Open the Glitch editor for the `os-ucsd-summer-dev` project, [here](https://glitch.com/edit/#!/os-ucsd-summer-dev), make your edits.
2. Once done, Go to `Tools` -> `Export to Github`. 
3. Once merged to master, open the Glitch editor for the `os-ucsd-summer` project, [here](https://glitch.com/edit/#!/os-ucsd-summer)
4. `Tools` -> `Import from Github`
5. Make sure os-ucsd-summer.glitch.me looks good!



## Adding Pages


### As React file (`.js` or `.jsx`)

TODO

### As MDX file (`.md` or `.mdx`)

TODO