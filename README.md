# CiteThis
A plugin widget to generate citation files (.ris, .bib, .enw).

Demo https://jesschampion.github.io/citethis/

## Installation & Usage
### Installation
CiteThis can be installed from NPM `yarn add cite-this`

### Usage
#### Vue Component Plugin
To use the citation plugin in your vue apps, import the plugin and install it with Vue.use

```
import CiteThisVueComponent from '../src/CiteThisVueComponent';
...
Vue.use(CiteThisVueComponent);
```

#### Static Citation Widget
include 'cite-this.js' in your html document
`<script type=text/javascript src=../cite-this.js></script>`
or import into your package javascript 
`import 'cite-this';` 

Add citation widgets to your html by creating elements with the class `cite-this` e.g:
```
<div class="cite-this"
    label="CITE THIS"
    author="Example Author"
    title="Example Document"
    type="MISC"
    year="2017"/>
```

**MULTIPLE ELEMENT SUPPORT**
Multiple widgets can be added to the same page, by creating multiple html fragments as above.
However in this case, the anchor element must each have a unique ID in addition to the `cite-this` class.

#### Options

##### Resource types
The type of resource being referenced must be specified in the type attribute.
The

e.g. 
```
<div class="cite-this"
    ...
    type="BOOK"/>
```

The currently supported types are:

| Type    | Description |
| ------- | ----------- |
| ARTICLE | An article from a journal or magazine.
| BOOK    | A book with an explicit publisher.
| MISC    | For use when nothing else fits.
| REPORT  | A report published by a school or other institution, usually numbered within a series.

##### Field types

Fields can be added to a citation by adding attribute/value pairs to the markup.
e.g. 
```
<div class="cite-this"
    type="MISC"
    ...
    author="Example Author"
    title="Example Document
    year="2017"/>
```

The following attribute types are currently supported:

| Type          | Description |
| ------------- | ----------- |
| address       | Publisher's address
| author        | The name(s) of the author(s) 
| editor        | The name(s) of the editor(s)
| institution   | The institution that was involved in the publishing, but not necessarily the publisher
| journal       | The journal or magazine the work was published in
| month         | The month of publication (or, if unpublished, the month of creation)
| number        | The "(issue) number" of a journal, magazine, or report, if applicable.
| pages         | Page numbers
| publisher     | The publisher's name
| series        | The series of books the book was published in
| title         | The title of the work
| url           | The URL of the resource
| volume        | The volume of a journal or multi-volume book
| year          | The year of publication (or, if unpublished, the year of creation)

_**Note:** Some resource types specify required fields for particular file types.
Validating that required fields are specified is currently not supported by the plugin.
See 'Reference documentation' for details._

##### Customising button text
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
### Reference documentation
- [BibTeX .BIB format](https://en.wikipedia.org/wiki/BibTeX#Bibliographic_information_file)
- [EndNote .ENW format](https://en.wikipedia.org/wiki/EndNote#Tags_and_fields)
- [Research Information Systems, .RIS format](https://en.wikipedia.org/wiki/RIS_(file_format)#Type_of_reference)

### Scripts
- __install dependencies__:
`yarn`

- __development build__:
`yarn build`
or
`yarn watch`

- __run linters__:
`yarn lint`

- __build for production with minification and view bundle analyzer report__:
`yarn package`

- __push dist/demo sub folder to github pages branch__:
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
  `git commit -am"V X.Y.Z"`
3. Push to gh-pages branch
  `yarn deploy:demo`
4. Update version number in `package.json` and push to master

#### Production build
1. Build
  `yarn package`
2. Update version number in `package.json`
3. Commit changes
  `git commit -am"V X.Y.Z"` 
5. Deploy to npm
   `npm publish`
4. Update version number in `package.json` and push to master

### Code Style
There are linters set up to enforce code style, run with `yarn lint`.

### Tests
JavaScript unit tests are implemented with Jest and [vue-test-utils](https://vue-test-utils.vuejs.org/)
The specs are located in `test/unit/specs` and can be run with `yarn test`
Test coverage can be reported by running `yarn test:coverage`

### Enhancement Backlog
VUE best practice
- ~~Refactor CiteThis to separate ui into a presentational component~~
- Run through all best practices and tidy up.

UI:
- ~~Add easily overridable default styling~~
- ~~Customisable button label~~
- tweak animation
- check accessibility

- ~~Build and deploy~~

Implementation:
- ~~Add support for all required types and fields~~
- ~~Support multiple elements per page~~
- ~~Build for Vue component use~~
- ~~Build and deploy~~

Tidy up:
- ~~Test coverage~~
- Hidden link for downloads (is there a nicer way to do this that won't require timeout)
- Compile styles with sass or postcss then tidy - **IN PROGRESS**
- Standardise console.error/Error 

Possible future enhancements:
- Validate required fields for type.
- Handle multiple authors and editors