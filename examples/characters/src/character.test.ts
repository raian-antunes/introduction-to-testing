import { describe, it, expect } from 'vitest';
import { Character } from './character.js';

describe('Character', () => {
  const firstName = 'John';
  const lastName = 'Doe';
  const role = 'Warrior';

  it('should create a character with a first name, last name, and role', () => {
    const character = new Character(firstName, lastName, role);

    expect(character.firstName).toBe(firstName);
    expect(character.lastName).toBe(lastName);
    expect(character.role).toBe(role);
  });

  it('should allow you to increase the level', () => {
    const character = new Character(firstName, lastName, role);
    const initialLevel = character.level;

    character.levelUp();

    expect(character.level).toBe(initialLevel + 1);
  });

  it('should update the last modified date when leveling up', () => {
    const character = new Character(firstName, lastName, role);
    const initialDate = character.lastModified;

    character.levelUp();

    expect(character.lastModified).not.toBe(initialDate);
  });
});
