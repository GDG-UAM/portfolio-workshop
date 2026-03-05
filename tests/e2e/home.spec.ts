import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads successfully and shows the hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Elena Navarro/);

    // Hero section is visible
    const name = page.locator('h1');
    await expect(name).toContainText('Elena Navarro');
  });

  test('shows all main sections', async ({ page }) => {
    await page.goto('/');

    // Verify key sections exist
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#experience')).toBeVisible();
    await expect(page.locator('#education')).toBeVisible();
    await expect(page.locator('#volunteering')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#posts')).toBeVisible();
  });

  test('navigation links work', async ({ page }) => {
    await page.goto('/');

    // Click "Posts" in navbar
    await page.click('nav a[href="/posts"]');
    await expect(page).toHaveURL(/\/posts/);
  });
});
