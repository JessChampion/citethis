<template>
  <div class="citeThis"
       :class="[{ open: isOpen }, transition]"
  >
    <CiteThisButton class="citeThis__button"
                    :active="isOpen"
                    :label="label"
                    :toggle="open"
    />
    <CiteThisFormatSelector class="citeThis__flyout formatSelector"
                            :formats="availableFormats"
                            :cite="cite"
    />
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

  const TRANSITION_DELAY = 1000;

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
        this.transition = 'closing';
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
        this.transition = 'opening';
        setTimeout(this.clearTransition, TRANSITION_DELAY);
      }
    }
  };
</script>

<style>
  .citeThis button {
    border-radius: 0.25rem;
    font-size: 0.9rem;
    padding: 0.2rem 0.25rem;
  }

  .citeThis {
    display: inline-block;
    font-size: 1rem;
    position: relative;
  }

  .citeThis__button {
    cursor: pointer;
    display: inline-block;
  }

  .open > .citeThis__button::before {
    background: #dfdfdf;
    border-radius: 0.25rem 0.25rem 0 0;
    box-shadow: 0.1rem 0.05rem 0.15rem 0 rgba(0, 0, 0, 0.5);
    content: '';
    height: calc(100% + 0.8rem);
    position: absolute;
    right: -0.45rem;
    top: -0.4rem;
    width: calc(100% + 0.9rem);
    z-index: -1;
  }

  .citeThis__flyout {
    max-height: 0;
    position: absolute;
    right: -0.7rem;
    top: calc(100% - 0.28rem);
    visibility: hidden;
  }

  .open > .citeThis__flyout {
    max-height: 4rem;
    visibility: visible;
  }

  .citeThis__download {
    display: none; /*hidden download link*/
  }
</style>
