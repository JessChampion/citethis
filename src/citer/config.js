// Static configuration details for the various file types

// FORMATS
const BIB = 'BIB';
const ENW = 'ENW';
const RIS = 'RIS';

export const FORMATS = {
  BIB,
  ENW,
  RIS
};

// TYPES
const ARTICLE = 'ARTICLE';
const BOOK = 'BOOK';
const MISC = 'MISC';
const REPORT = 'REPORT';

export const TYPES = {
  ARTICLE,
  BOOK,
  MISC,
  REPORT
};

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
  },
  REPORT: {
    BIB: 'techreport',
    ENW: 'Report',
    RIS: 'RPRT'
  }
};


// FIELDS
export const VALID_TAGS = ['address', 'author', 'editor',
  'institution', 'journal', 'month', 'number', 'pages', 'publisher', 'series', 'title', 'url', 'volume', 'year'];
export const TAGS = {
  address: {
    BIB: 'address',
    ENW: '%+',
    RIS: 'AD'
  },
  author: {
    BIB: 'author',
    ENW: '%A',
    RIS: 'AU'
  },
  editor: {
    BIB: 'editor',
    ENW: '%E',
    RIS: 'ED'
  },
  institution: {
    BIB: 'institution',
    ENW: '%Y',
    RIS: 'A3'
  },
  journal: {
    BIB: 'journal',
    ENW: '%J',
    RIS: 'JF'
  },
  month: {
    BIB: 'month',
    ENW: '%8',
    RIS: 'DA'
  },
  number: {
    BIB: 'number',
    ENW: '%N',
    RIS: 'IS'
  },
  pages: {
    BIB: 'pages',
    ENW: '%P',
    RIS: 'SP'
  },
  publisher: {
    BIB: 'publisher',
    ENW: '%I',
    RIS: 'PB'
  },
  series: {
    BIB: 'series',
    ENW: '%B',
    RIS: 'T2'
  },
  title: {
    BIB: 'title',
    ENW: '%T',
    RIS: 'TI'
  },
  url: {
    BIB: 'note',
    ENW: '%U',
    RIS: 'UR'
  },
  volume: {
    BIB: 'volume',
    ENW: '%V',
    RIS: 'VL'
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
