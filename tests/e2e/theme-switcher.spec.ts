import { test, expect } from '@playwright/test';

test.describe('Theme Switcher', () => {
  test('default theme is "classic"', async ({ page }) => {
    await page.goto('/');
    const theme = await page.locator('html').getAttribute('data-theme');
    expect(theme).toBe('classic');
  });

  test('clicking Bold changes the theme', async ({ page }) => {
    await page.goto('/');

    // Click the Bold theme button
    await page.click('[data-set-theme="bold"]');

    const theme = await page.locator('html').getAttribute('data-theme');
    expect(theme).toBe('bold');
  });

  test('theme persists after page reload', async ({ page }) => {
    await page.goto('/');

    // Switch to Mono theme
    await page.click('[data-set-theme="mono"]');
    expect(await page.locator('html').getAttribute('data-theme')).toBe('mono');

    // Reload the page
    await page.reload();

    // Theme should still be Mono
    expect(await page.locator('html').getAttribute('data-theme')).toBe('mono');
  });

  test('query param overrides stored theme', async ({ page }) => {
    // First set a theme via the UI
    await page.goto('/');
    await page.click('[data-set-theme="mono"]');

    // Now navigate with a query param
    await page.goto('/?theme=bold');
    expect(await page.locator('html').getAttribute('data-theme')).toBe('bold');
  });

  test('switching themes does not break layout', async ({ page }) => {
    await page.goto('/');

    // Verify hero is visible with classic theme
    await expect(page.locator('h1')).toBeVisible();

    // Switch to bold
    await page.click('[data-set-theme="bold"]');
    await expect(page.locator('h1')).toBeVisible();

    // Switch to mono
    await page.click('[data-set-theme="mono"]');
    await expect(page.locator('h1')).toBeVisible();

    // All sections should still be visible
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#experience')).toBeVisible();
  });
});
