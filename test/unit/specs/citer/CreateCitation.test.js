/* global describe, expect, jest, it */
import { merge } from 'ramda';
import createCitation from '../../../../src/citer/CreateCitation';
import { FORMATS, TYPES } from '../../../../src/citer/config';

const testData = {
  label: '\'CITE THIS\'',
  address: '123 Test Road',
  author: 'Test Author',
  editor: 'Test Editor',
  institution: 'Department of Test',
  journal: 'Test Journal Monthly',
  month: 'March',
  number: '1234',
  pages: '83, 84',
  publisher: 'Test Publisher',
  series: 'Now that\'s what I call testing',
  title: 'Test Title',
  type: TYPES.BOOK,
  url: 'http://test.com/test',
  volume: '2000',
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

    expect(citation).toEqual('@book{\r\n' +
      `address = "${testData.address}"\r\n` +
      `author = "${testData.author}"\r\n` +
      `editor = "${testData.editor}"\r\n` +
      `institution = "${testData.institution}"\r\n` +
      `journal = "${testData.journal}"\r\n` +
      `month = "${testData.month}"\r\n` +
      `number = "${testData.number}"\r\n` +
      `pages = "${testData.pages}"\r\n` +
      `publisher = "${testData.publisher}"\r\n` +
      `series = "${testData.series}"\r\n` +
      `title = "${testData.title}"\r\n` +
      `note = "${testData.url}"\r\n` +
      `volume = "${testData.volume}"\r\n` +
      `year = "${testData.year}"\r\n` +
      '}');
  });

  it('generates a citation in ENW formats', () => {
    const citation = createCitation(FORMATS.ENW, testData);

    expect(citation).toEqual('%0 Book\r\n' +
      `%+ ${testData.address}\r\n` +
      `%A ${testData.author}\r\n` +
      `%E ${testData.editor}\r\n` +
      `%Y ${testData.institution}\r\n` +
      `%J ${testData.journal}\r\n` +
      `%8 ${testData.month}\r\n` +
      `%N ${testData.number}\r\n` +
      `%P ${testData.pages}\r\n` +
      `%I ${testData.publisher}\r\n` +
      `%B ${testData.series}\r\n` +
      `%T ${testData.title}\r\n` +
      `%U ${testData.url}\r\n` +
      `%V ${testData.volume}\r\n` +
      `%D ${testData.year}`);
  });

  it('generates a citation in RIS formats', () => {
    const citation = createCitation(FORMATS.RIS, testData);

    expect(citation).toEqual('TY  - BOOK\r\n' +
      `AD  - ${testData.address}\r\n` +
      `AU  - ${testData.author}\r\n` +
      `ED  - ${testData.editor}\r\n` +
      `A3  - ${testData.institution}\r\n` +
      `JF  - ${testData.journal}\r\n` +
      `DA  - ${testData.month}\r\n` +
      `IS  - ${testData.number}\r\n` +
      `SP  - ${testData.pages}\r\n` +
      `PB  - ${testData.publisher}\r\n` +
      `T2  - ${testData.series}\r\n` +
      `TI  - ${testData.title}\r\n` +
      `UR  - ${testData.url}\r\n` +
      `VL  - ${testData.volume}\r\n` +
      `PY  - ${testData.year}\r\n` +
      'ER  - ');
  });

  it('removes fields with null values from the data', () => {
    const partialTestData = merge(testData, {
      address: null,
      institution: null,
      journal: null,
      month: null,
      number: null,
      pages: null,
      publisher: null,
      series: null,
      url: null,
      volume: null
    });
    const citation = createCitation(FORMATS.BIB, partialTestData);

    expect(citation).toEqual('@book{\r\n' +
      `author = "${testData.author}"\r\n` +
      `editor = "${testData.editor}"\r\n` +
      `title = "${testData.title}"\r\n` +
      `year = "${testData.year}"\r\n` +
      '}');
  });
});
