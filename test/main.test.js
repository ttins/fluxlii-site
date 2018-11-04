/**
 * This is a basic test/setup to test whether a certain element exists
 * in an html file. More advanced test will be written by Chris.
 */

const cheerio = require('cheerio');
const { readFileSync } = require('fs');
const { FluxliiMember } = require('../js/index');

const FILE_PATH = `${process.cwd()}/index.html`;

describe('html', () => {
  const $ = cheerio.load(readFileSync(FILE_PATH));
  it('should have a head', () => {
    expect($('html').find('head').length).toBe(1);
  });

  it('should have a body', () => {
    expect($('html').find('body').length).toBe(1);
  });
});


describe('FluxliiMember', () => {
  const member = new FluxliiMember('tak', 'bio');

  it('should have a name', () => expect(member.getName()).toEqual('tak'));
  it('should have a bio', () => expect(member.getBio()).toEqual('bio'));
});
