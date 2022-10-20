# Effectly - The Ultimate Productivity Board

<br>

## Run and test app locally
- To run the app locally on your local host
```
npm run dev
```
- To test the app's files and create coverage folder (running on Vitest + Istanbul)
```
npm test
```
<br>

## Contribute to the app (PR workflow)
- Checkout your branch from the `main` branch (there is no naming convention set yet)
- Commit and push the changes to your branch
- Create a Pull Request and compare it to `main`
- Once the PR is ready to be merged, click **`Squash and merge`** and in your squashed message declare what kind of version bump you want:
    - `{{commit message}} [pre-alpha]` will bump the current version to {{version}}-alpha.^ (e.g. 0.0.3 -> 0.0.3-alpha.0 -> 0.0.3-alpha.1)
    - `{{commit message}} [minor]` will bump the current version by minor (e.g. 0.0.3 -> 0.1.0 -> 0.2.0)
    - `{{commit message}} [major]` will bump the current version by major (e.g. 0.0.3 -> 1.0.0 -> 2.0.0)
    - No `[declaration]` will mean the current version is bumped by patch (e.g. 0.0.3 -> 0.0.4)
