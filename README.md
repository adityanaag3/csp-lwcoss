# Fixing CSP errors in LWC OSS

This repo contains sample code that uses images and APIs from third party domains, and uses Helmet to safelist those domains using Content Security Policy. 

## How to fix CSP Errors?

Add a custom configuration `helmet` in the [`./scripts/server.js`](./scripts/server.js) file.
