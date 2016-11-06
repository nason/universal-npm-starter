// Leverage node's resolution to get the dist package
import * as starterModule from '../..';

describe('dist/env-universal', () => {
  describe('module', () => {
    it('export is a module (object)', () => {
      expect(starterModule).to.be.an('object');
    });
  })

  describe('add', () => {
    it('is a function', () => {
      expect(starterModule.add).to.be.a('function');
    });

    it('adds two numbers', () => {
      expect(starterModule.add(1,2)).to.eql(3);
    });

    it('has no default args', () => {
      expect(() => starterModule.add()).to.throw;
    });
  });

  describe('Colors', () => {
    it('is an object', () => {
      expect(starterModule.Colors).to.be.an('object');
    });

    it('has symbol values', () => {
      expect(starterModule.Colors.Green).to.be.a('symbol');
    });
  });
});
