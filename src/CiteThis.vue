<template>
  <div class="citeThis"
       :class="[{ flyoutOpen: isOpen }, transition]"
  >
    <CiteThisButton class="citeThis__button"
                    :active="isOpen"
                    :label="label"
                    :toggle="open"
    />
    <div class="citeThis__flyout flyout">
      <CiteThisFormatSelector class="formatSelector"
                              :formats="availableFormats"
                              :cite="cite"/>
    </div>
    <a class="citeThis__download"
       target="_blank"
       ref="downloadLink"
       :download="getFileName()"
       :href="href">
      click to download
    </a>
  </div>
</template>

<script>
  import { compose, has, join, keys, replace } from 'ramda';

  import { FORMATS, TYPES } from './citer/config';
  import CiteThisButton from './components/CiteThisButton';
  import CiteThisFormatSelector from './components/CiteThisFormatSelector';
  import createCitation from './citer/CreateCitation';

  const TRANSITION_DELAY = 600;

  const listKeys = compose(join(', '), keys);
  const validateType = (value) => {
    const valid = has(value, TYPES);
    if (!valid) {
      const message = `Invalid value '${value}' provided for type. Defaulting to type '${TYPES.MISC}'. Valid types are: ${listKeys(TYPES)}.`;
      // eslint-disable-next-line no-console
      console.error(message);
    }
    return valid;
  };

  const validateYear = (year) => {
    const y = parseInt(`${year}`, 10);
    const valid = (!Number.isNaN(y) && y > 0);
    if (!valid) {
      const message = `Invalid value '${year}' provided for year. The value must be a positive integer.`;
      // eslint-disable-next-line no-console
      console.error(message);
    }
    return valid;
  };

  const getExtension = format => `.${format.toLowerCase()}`;
  const concatWithoutSpace = replace(/\s/g, '');
  const getDownloadFileName = (format, author = 'ref', year = '') =>
    `${concatWithoutSpace(author)}${year}${getExtension(format)}`;

  const getDownloadHref = content => `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`;
  const createDownloadHref = compose(getDownloadHref, createCitation);

  export default {
    name: 'CiteThis',

    components: {
      CiteThisButton,
      CiteThisFormatSelector
    },

    props: {
      label: {
        type: String,
        default: 'CITE'
      },
      author: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      type: {
        type: String,
        default: TYPES.MISC,
        validator: validateType
      },
      year: {
        type: String,
        default: null,
        validator: validateYear
      }
    },

    data() {
      return {
        availableFormats: FORMATS,
        currentFormat: FORMATS.BIB,
        href: '',
        isOpen: false,
        transition: ''
      };
    },

    methods: {
      cite(format) {
        this.currentFormat = format;
        const providedData = {
          author: this.author,
          title: this.title,
          type: this.type,
          year: this.year
        };
        this.href = createDownloadHref(this.currentFormat, providedData);
        setTimeout(() => { // wait for link to set // TODO: is this the best way to do this in vue?
          const { downloadLink } = this.$refs;
          if (downloadLink) {
            downloadLink.click();
          }
          this.close();
        }, 100);
      },

      clearTransition() {
        this.transition = '';
      },

      close() {
        this.isOpen = false;
        this.transition = 'flyoutClosing';
        setTimeout(this.clearTransition, TRANSITION_DELAY);
      },

      getFileName() {
        return getDownloadFileName(this.currentFormat, this.author, this.year);
      },

      open() {
        if (this.isOpen) {
          this.close();
          return;
        }
        this.isOpen = true;
        this.transition = 'flyoutOpening';
        setTimeout(this.clearTransition, TRANSITION_DELAY);
      }
    }
  };
</script>

<style>
  .citeThis button {
    border-radius: 0.25em;
    font-size: 0.9em;
    outline-offset: -0.1em;
    padding: 0.2em 0.25em;
  }

  .citeThis {
    display: inline-block;
    position: relative;
  }

  .citeThis__button {
    cursor: pointer;
    display: inline-block;
  }

  .citeThis__button::before {
    opacity: 0;
  }

  .flyoutOpen .citeThis__button::before,
  .flyoutOpening .citeThis__button::before,
  .flyoutClosing .citeThis__button::before {
    background: #dfdfdf;
    border-radius: 0.25em 0.25em 0 0;
    box-shadow: 0.1em 0.05em 0.15em 0 rgba(0, 0, 0, 0.30);
    content: '';
    height: calc(100% + 0.8em);
    opacity: 1;
    position: absolute;
    right: -0.45em;
    transition: opacity 75ms ease-in;
    top: -0.4em;
    width: calc(100% + 0.9em);
    z-index: -1;
  }

  .flyoutClosing .citeThis__button::before {
    border-radius: 0.25em;
    opacity: 0;
    transition: opacity 75ms ease-out 325ms,
    border-radius 25ms ease-out 325ms;
  }

  .flyout {
    background: #dfdfdf;
    border-radius: 0.25em 0 0.25em 0.25em;
    box-shadow: 0.1em 0.15em 0.15em 0 rgba(0, 0, 0, 0.30);
    max-height: 0;
    max-width: calc(100% + 0.9em);
    opacity: 0;
    overflow: hidden;
    position: absolute;
    right: -0.43em;
    top: calc(100% + 0.25em);
    visibility: hidden;
  }

  .flyoutOpen .flyout,
  .flyoutOpening .flyout {
    visibility: visible;
    opacity: 1;
    max-height: 250%; /*2.5 x the button*/
    max-width: 11em;
  }

  .flyoutOpening .flyout {
    transition: opacity 50ms ease-in 75ms,
    max-height 100ms ease 50ms,
    max-width 225ms ease 150ms;
  }

  .flyoutClosing .flyout {
    visibility: visible;
    max-height: 0;
    max-width: calc(100% + 0.9em);
    transition: max-width 255ms ease,
    max-height 100ms ease 200ms,
    opacity 50ms ease-out 275ms;
  }

  .citeThis__download {
    display: none; /*hidden download link*/
  }
</style>
