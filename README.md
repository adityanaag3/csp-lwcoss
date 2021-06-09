# Fixing CSP errors in LWC OSS

This repo contains sample code that uses images and APIs from third party domains, and uses Helmet to safelist those domains using Content Security Policy. 

## How to fix CSP Errors?

Add a custom configuration `helmet` in the [`./scripts/server.js`](./scripts/server.js) file.

## Steps and Changes Explained

[Watch this Quick Take](https://www.youtube.com/watch?v=nf7eqg9WWPg) to learn about the tweaks you need to make to your code to safelist domains.
