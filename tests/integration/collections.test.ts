import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { parse } from 'yaml';
import { resolve } from 'path';

/**
 * Integration tests — Verify that our YAML data files parse correctly
 * and contain the required fields defined in the schema.
 */

const DATA_DIR = resolve(__dirname, '../../src/data');

function loadYaml<T>(filename: string): T {
  const content = readFileSync(resolve(DATA_DIR, filename), 'utf-8');
  return parse(content) as T;
}

describe('Content Collections — Data Validation', () => {
  describe('profile.yaml', () => {
    it('has required fields', () => {
      const data = loadYaml<Record<string, unknown>[]>('profile.yaml');
      expect(data).toBeInstanceOf(Array);
      expect(data.length).toBeGreaterThan(0);

      const profile = data[0];
      expect(profile).toHaveProperty('name');
      expect(profile).toHaveProperty('role');
      expect(profile).toHaveProperty('tagline');
      expect(profile).toHaveProperty('email');
      expect(profile).toHaveProperty('github');
      expect(profile).toHaveProperty('linkedin');
      expect(profile).toHaveProperty('bio');
      expect(profile).toHaveProperty('skills');
    });
  });

  describe('experience.yaml', () => {
    it('has entries with required fields', () => {
      const data = loadYaml<Record<string, unknown>[]>('experience.yaml');
      expect(data.length).toBeGreaterThan(0);

      for (const entry of data) {
        expect(entry).toHaveProperty('id');
        expect(entry).toHaveProperty('role');
        expect(entry).toHaveProperty('company');
        expect(entry).toHaveProperty('startDate');
        expect(entry).toHaveProperty('description');
        expect(entry).toHaveProperty('highlights');
        expect(Array.isArray(entry.highlights)).toBe(true);
      }
    });
  });

  describe('education.yaml', () => {
    it('has entries with required fields', () => {
      const data = loadYaml<Record<string, unknown>[]>('education.yaml');
      expect(data.length).toBeGreaterThan(0);

      for (const entry of data) {
        expect(entry).toHaveProperty('id');
        expect(entry).toHaveProperty('institution');
        expect(entry).toHaveProperty('degree');
        expect(entry).toHaveProperty('field');
        expect(entry).toHaveProperty('startDate');
      }
    });
  });

  describe('volunteering.yaml', () => {
    it('has entries with required fields', () => {
      const data = loadYaml<Record<string, unknown>[]>('volunteering.yaml');
      expect(data.length).toBeGreaterThan(0);

      for (const entry of data) {
        expect(entry).toHaveProperty('id');
        expect(entry).toHaveProperty('organization');
        expect(entry).toHaveProperty('role');
        expect(entry).toHaveProperty('startDate');
        expect(entry).toHaveProperty('description');
        expect(entry).toHaveProperty('contributions');
      }
    });
  });

  describe('projects.yaml', () => {
    it('has entries with required fields', () => {
      const data = loadYaml<Record<string, unknown>[]>('projects.yaml');
      expect(data.length).toBeGreaterThan(0);

      for (const entry of data) {
        expect(entry).toHaveProperty('id');
        expect(entry).toHaveProperty('title');
        expect(entry).toHaveProperty('description');
        expect(entry).toHaveProperty('tags');
        expect(Array.isArray(entry.tags)).toBe(true);
      }
    });

    it('has at least one featured project', () => {
      const data = loadYaml<Record<string, unknown>[]>('projects.yaml');
      const featured = data.filter((p) => p.featured === true);
      expect(featured.length).toBeGreaterThan(0);
    });
  });
});
