# CiteThis
A plugin widget to generate citation files (.ris, .bib, .enw).

Demo https://jesschampion.github.io/citethis/

## Installation

## Usage

### Vue Component Plugin
To use the citation plugin in your vue apps, import the plugin and install it with Vue.use.

```
import CiteThisVueComponent from '../src/CiteThisVueComponent';

...

Vue.use(CiteThisVueComponent);
```

### Static Citation Widget
include 'cite-this.js' in your html document and instantiate up to 1 citation widget
per page with the following markup.
At this stage the element must have an id of 'citation', the type of element is not limited to divs.

```
<div id="citation"
    author="Example Author"
    title="Example Document"
    type="MISC"
    year="2017"/>
...

<script type=text/javascript src=../cite-this.js></script>
```

## Scripts
__install dependencies__:
`yarn`

__development build__:
`yarn build`
or
`yarn watch`

__build for production with minification and view bundle analyzer report__:
`yarn package`

__push dist/demo sub folder to github pages branch__:
`yarn deploy:demo`

## Demo build
1. Build
  `yarn package`
2. Commit changes
  `git commit -am"DEMO X.Y.Z"`
3. Push to gh-pages branch
  `yarn deploy:demo`
4. Update version number in `package.json` and push to master

## TODOs

VUE best practice
- ~~Refactor CiteThis to separate ui into a presentational component~~
- Use private properties
  https://vuejs.org/v2/style-guide/#Private-property-names-essential
- Update eslint vue plugin when 4.1 available. Set script indent to remove lint errors.

Error handling:
- ~~Add prop types validations to enforce public api~~

UI:
- ~~Make ui nicer~~
- ~~Use BEM for scoping on ui and styles~~
- ~~accessibility~~
- Flyout style picker - **IN PROGRESS**
    - animate
- add easily overridable default styling
- Customisable button label

Build and deploy
- ~~Separate component from demo app~~
- ~~Build for use as a widget~~
- **(Higher Priority)** Npm module

Implementation:
- **(Higher Priority - at work)** Add support for all required types and fields
- Support multiple elements per page
- ~~Build for Vue component use~~
- ~~Change mounting loop to check on addEvent~~

Tidy up:
- **(Higher Priority)** Test coverage
- Hidden link for downloads (is there a nicer way to do this that won't require timeout)

