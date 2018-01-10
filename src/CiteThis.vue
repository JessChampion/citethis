<template>
  <div class="citeThis"
       :class="{ open: isOpen}"
  >
    <CiteThisButton class="citeThis__button"
                    :toggle="open"
                    :active="isOpen"
    />
    <CiteThisFormatSelector class="citeThis__flyout"
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
        isOpen: false
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
      close() {
        this.isOpen = false;
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
      },
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
    display: inline-block;
  }

  .open > .citeThis__button::before {
    /*/h-offset v-offset blur spread color*/
    box-shadow: 0.1rem 0.05rem 0.15rem 0 rgba(0, 0, 0, 0.5);
    content: '';
    width: calc(100% + 0.9rem);
    height: calc(100% + 0.8rem);
    background: #dfdfdf;
    border-radius: 0.25rem 0.25rem 0 0;
    display: block;
    position: absolute;
    z-index: -1;
    right: -0.45rem;
    top: -0.4rem;
    transition: all 1s ease;
  }

  .citeThis__flyout {
    box-shadow: 0.1rem 0.15rem 0.15rem 0 rgba(0, 0, 0, 0.5);
    display: none;
    min-width: 9.25rem;
    position: absolute;
    right: -0.575rem;
    top: 100%;
    transition: all 1s ease;
  }

  .open > .citeThis__flyout {
    display: inline-block;
  }

  .citeThis__download {
    display: none; /*hidden download link*/
  }
</style>
