/* global describe, expect, jest, it */

import createCitation from '../../../../src/citer/CreateCitation';
import { FORMATS, TYPES } from '../../../../src/citer/config';

const testData = {
  author: 'Test Author',
  title: 'Test Title',
  type: TYPES.BOOK,
  year: '2017'
};

describe('createCitation', () => {
  it('throws an error if called with invalid params', () => {
    let error = null;
    try {
      createCitation();
    } catch (e) {
      error = e;
    }

    expect(error).not.toBeNull();
    expect(error.message).toEqual('Invalid params');
  });

  it('throws an error if called with an invalid format', () => {
    let error = null;
    try {
      createCitation('BAD', {});
    } catch (e) {
      error = e;
    }

    expect(error).not.toBeNull();
    expect(error.message).toEqual('Invalid params');
  });

  it('generates a citation in BIB formats', () => {
    const citation = createCitation(FORMATS.BIB, testData);

    expect(citation).toEqual(
      '@book{\r\n' +
      `author = "${testData.author}"\r\n` +
      `title = "${testData.title}"\r\n` +
      `year = "${testData.year}"\r\n` +
      '}'
    );
  });

  it('generates a citation in ENW formats', () => {
    const citation = createCitation(FORMATS.ENW, testData);

    expect(citation).toEqual(
      '%0 Book\r\n' +
      `%A ${testData.author}\r\n` +
      `%T ${testData.title}\r\n` +
      `%D ${testData.year}`
    );
  });

  it('generates a citation in RIS formats', () => {
    const citation = createCitation(FORMATS.RIS, testData);

    expect(citation).toEqual(
      'TY  - BOOK\r\n' +
      `AU  - ${testData.author}\r\n` +
      `TI  - ${testData.title}\r\n` +
      `PY  - ${testData.year}\r\n` +
      'ER  - '
    );
  });
});
