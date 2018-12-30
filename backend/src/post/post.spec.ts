import { Posts } from './posts';

describe('Post', () => {
  it('should be defined', () => {
    expect(new Posts()).toBeTruthy();
  });
});
