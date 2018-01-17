# CiteThis
A plugin widget to generate citation files (.ris, .bib, .enw).

Demo https://jesschampion.github.io/citethis/

## Installation & Usage
### Installation

### Usage

#### Vue Component Plugin
To use the citation plugin in your vue apps, import the plugin and install it with Vue.use.

```
import CiteThisVueComponent from '../src/CiteThisVueComponent';

...

Vue.use(CiteThisVueComponent);
```

#### Static Citation Widget
include 'cite-this.js' in your html document to add citation widgets with the following markup:

```
<div class="cite-this"
    label="CITE THIS"
    author="Example Author"
    title="Example Document"
    type="MISC"
    year="2017"/>
...

<script type=text/javascript src=../cite-this.js></script>
```

The class `cite-this` must be present as it is used by the plugin to find where to mount the widgets.

**MULTIPLE ELEMENT SUPPORT**
Multiple widgets can be added to the same page, by creating multiple html fragements as above.
However in this case, the anchor element must each have a unique ID in addition to the `cite-this` class.

#### Customising button text
Custom button text can be added by including
```
label="CITE THIS"
```
as an attribute on the static widget
or binding
```
:label="'CITE THIS'"
```
on the Vue component 

## Development
### Scripts
__install dependencies__:
`yarn`

__development build__:
`yarn build`
or
`yarn watch`

__run linters__:
`yarn lint`

__build for production with minification and view bundle analyzer report__:
`yarn package`

__push dist/demo sub folder to github pages branch__:
`yarn deploy:demo`

### Build
#### Running locally
1. Build by running
  `yarn build` or`yarn watch`
2. Open `cite-this/dist/demo/index.html` in a browser

#### Demo build
1. Build
  `yarn package`
2. Commit changes
  `git commit -am"DEMO X.Y.Z"`
3. Push to gh-pages branch
  `yarn deploy:demo`
4. Update version number in `package.json` and push to master

### Code Style
There are linters set up to enforce code style, run with `yarn lint`.

### Tests
TODO


### TODOs
VUE best practice
- ~~Refactor CiteThis to separate ui into a presentational component~~
- Use private properties
  https://vuejs.org/v2/style-guide/#Private-property-names-essential
- Update eslint vue plugin when 4.1 available. Set script indent to remove lint errors.

Error handling:
- ~~Add prop types validations to enforce public api~~

UI:
- ~~Use BEM for scoping on ui and styles~~
- ~~accessibility~~
- ~~Flyout style picker~~
- ~~Flyout animation~~
- ~~Add easily overridable default styling~~
- ~~Customisable button label~~

Build and deploy
- ~~Separate component from demo app~~
- ~~Build for use as a widget~~
- **(Higher Priority)** Npm module

Implementation:
- **(Higher Priority - at work)** Add support for all required types and fields
- ~~Support multiple elements per page~~
- ~~Build for Vue component use~~

Tidy up:
- **(Higher Priority)** Test coverage - **ON HOLD  - in branch**
- Hidden link for downloads (is there a nicer way to do this that won't require timeout)
- Compile styles with sass or postcss then tidy
