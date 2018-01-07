<template>
  <div class="citeThis">
    <CiteThisFormatSelector class="citeThis__selector"
       :formats="availableFormats"
       v-model="currentFormat"
    />
    <CiteThisButton class="citeThis__button"
       :cite="cite"/>
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
        href: ''
      };
    },
    methods: {
      cite() {
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
        }, 100);
      },
      getFileName() {
        return getDownloadFileName(this.currentFormat, this.author, this.year);
      }
    }
  };
</script>

<style>
  .citeThis__selector {
    display: inline-block;
    font-size: 1rem;
  }

  .citeThis__button {
    display: inline-block;
  }

  .citeThis__download {
    display: none; /*hidden download link*/
  }
</style>
