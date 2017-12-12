# CiteThis
A plugin widget to generate citation files (.ris, .bib, .enw).

Demo https://jesschampion.github.io/citethis/

## Scripts
__install dependencies__:
`yarn`

__development build__:
`yarn build`
or
`yarn watch`

__build for production with minification and view bundle analyzer report__:
`yarn package`


__push dist sub folder to github pages branch__:
`yarn deploy`

## Demo build
1. Build
  `yarn package`
2. Commit changes
  `git commit -am"DEMO X.Y.Z"`
3. Push to gh-pages branch
  `yarn demo`
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
- Make ui nicer
- Use BEM for scoping on ui and styles
- add easily overridable default styling

Build and deploy
- ~~Separate component from demo app~~
- **(Higher Priority -- in progress)** Build for use as a widget

Implementation:
- Add support for all required types and fields

Tidy up:
- Test coverage
- Hidden link for downloads (is there a nicer way to do this that won't require timeout)

