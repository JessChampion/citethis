import { compose, contains, flip, join, map, omit, pair, pathOr, toPairs, values, T } from 'ramda';

import { FORMATS, SEPARATOR, TAGS, TEMPLATE, TYPE_CODES } from './config';

const isInFormatList = flip(contains)(values(FORMATS));
const validateFormat = format => isInFormatList(format);
const validateData = T; // always return true for now // TODO: check requirements for format

const getTypeCode = (format, type) => pathOr('MISC', [type, format])(TYPE_CODES);
const getEntries = compose(toPairs, omit(['type', 'label']));
const translateTag = format => (key, value) => pair(TAGS[key][format], value);
const concatenateEntries = format => compose(
  join(SEPARATOR.OUTER[format]),
  map(join(SEPARATOR.INNER[format]))
);

const generateContent = (format, data) => {
  const type = getTypeCode(format, data.type);
  const entries = getEntries(data);
  const contents = map(p => translateTag(format)(...p))(entries);
  const body = concatenateEntries(format)(contents);
  return TEMPLATE[format](type, body);
};

const createCitation = (format, data) => {
  // param validation
  if (!validateFormat(format) || !validateData(data)) {
    // TODO clean up - better error messages
    // eslint-disable-next-line no-console
    throw new Error('Invalid params');
  }
  return generateContent(format, data);
};

export default createCitation;
