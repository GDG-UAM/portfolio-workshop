import { test, expect } from '@playwright/test';

test.describe('Posts', () => {
  test('lists all posts', async ({ page }) => {
    await page.goto('/posts');
    await expect(page).toHaveTitle(/Posts/);

    // At least one post card should be visible
    const postCards = page.locator('.post-card__title, [class*="post-card"] h3');
    await expect(postCards.first()).toBeVisible();
  });

  test('can navigate to a single post', async ({ page }) => {
    await page.goto('/posts');

    // Click the first post link
    const firstPost = page.locator('a[href^="/posts/"]').first();
    await firstPost.click();

    // Should be on a post detail page with an article
    await expect(page.locator('article')).toBeVisible();
    await expect(page.locator('.prose')).toBeVisible();
  });

  test('post detail has breadcrumb navigation', async ({ page }) => {
    await page.goto('/posts');

    const firstPost = page.locator('a[href^="/posts/"]').first();
    await firstPost.click();

    // Breadcrumb should have a link back to Posts
    const breadcrumb = page.locator('nav[aria-label="Breadcrumb"]');
    await expect(breadcrumb).toBeVisible();
    await expect(breadcrumb.locator('a[href="/posts"]')).toBeVisible();
  });
});
