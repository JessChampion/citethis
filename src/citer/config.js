// FORMATS
const BIB = 'BIB';
const ENW = 'ENW';
const RIS = 'RIS';

export const FORMATS = { BIB, ENW, RIS };

// TYPES
const ARTICLE = 'ARTICLE';
const BOOK = 'BOOK';
const MISC = 'MISC';

export const TYPES = { ARTICLE, BOOK, MISC };

export const TYPE_CODES = {
  ARTICLE: {
    BIB: 'article',
    ENW: 'Journal Article',
    RIS: 'JOUR'
  },
  BOOK: {
    BIB: 'book',
    ENW: 'Book',
    RIS: 'BOOK'
  },
  MISC: {
    BIB: 'misc',
    ENW: 'Generic',
    RIS: 'GEN'
  }
};


// FIELDS
export const VALID_TAGS = ['author', 'title', 'year', 'type'];
export const TAGS = {
  author: {
    BIB: 'author',
    ENW: '%A',
    RIS: 'AU'
  },
  title: {
    BIB: 'title',
    ENW: '%T',
    RIS: 'TI'
  },
  year: {
    BIB: 'year',
    ENW: '%D',
    RIS: 'PY'
  }
};

// TEMPLATES
export const TEMPLATE = {
  BIB: (type, body) => `@${type}{\r\n${body}"\r\n}`,
  ENW: (type, body) => `%0 ${type}\r\n${body}`,
  RIS: (type, body) => `TY  - ${type}\r\n${body}\r\nER  - `
};

export const SEPARATOR = {
  INNER: {
    BIB: ' = "',
    ENW: ' ',
    RIS: '  - '
  },
  OUTER: {
    BIB: '"\r\n',
    ENW: '\r\n',
    RIS: '\r\n'
  }
};
