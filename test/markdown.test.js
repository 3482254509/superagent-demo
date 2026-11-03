import test from 'node:test';
import assert from 'node:assert/strict';
import { renderInline } from '../src/markdown.js';

test('double tilde renders strikethrough', () => {
  assert.equal(renderInline('~~old~~'), '<del>old</del>');
});

test('single tilde stays literal', () => {
  assert.equal(renderInline('save 10~20% of it'), 'save 10~20% of it');
});

test('multiple single tildes in a range stay literal', () => {
  assert.equal(
    renderInline('save 10~20% then 30~40%'),
    'save 10~20% then 30~40%',
  );
});
