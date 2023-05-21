# [Resource gallery🛸](https://resourcegallery.live/)
Resource Gallery provides the tools and resources you need to evolve into a skilled developer. 

You can grab a cool Astro badge after successful merged PR from [here](https://astro.badg.es/contributors/)

## Deployed on Cloudflare pages
<a href="https://pages.cloudflare.com/" target="blank"><img src="https://img.icons8.com/color/cloudflare"/></a>

![image](https://github.com/Astrodevil/resource-gallery/blob/main/public/screely.png)

### Pagespeed Score

[![pagespeed](https://user-images.githubusercontent.com/1884712/210250214-7aa98167-7993-4b90-8138-326b8fa0c223.png)](https://pagespeed.web.dev/report?url=https%3A%2F%2Fastroship.web3templates.com%2F)


## Installation

You can clone the project directly from this repo to your local system.

### 1. Clone the repo

```bash
git clone https://github.com/Astrodevil/resource-gallery.git .
```

The `.` will clone it to the current directory so make sure you are inside your project folder first.

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or (recommended)
pnpm install
```

### 3. Start development Server

```bash
npm run dev
# or
yarn dev
# or (recommended)
pnpm dev
```

### Preview & Build

```bash
npm run preview
npm run build
# or
yarn preview
yarn build
# or (recommended)
pnpm preview
pnpm build
```

We recommend using [pnpm](https://pnpm.io/) to save disk space on your computer.

### Other Commands

```bash
pnpm astro ...
pnpm astro add
pnpm astro --help
```
### 5 Create a new branch:

```bash
git checkout -b YourBranchName
```

### 6. Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

### 7. Make your changes to the source code.

### 8. Stage your changes:

⚠️ **Make sure** not to commit `package.json` or `package-lock.json` file

⚠️ **Make sure** not to run the commands `git add .` or `git add *`

> Instead, stage your changes for each file/folder
>
> By using public path it means it will add all files and folders under that folder, it is better to be specific

```bash
git add public
```

_or_

```bash
git add "<files_you_have_changed>"
```

### 9. Commit your changes:

```bash
git commit -m "<your_commit_message>"
```

### 10. Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**11.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## TailwindCSS

TailwindCSS is already configured in this repo, so you can start using it without any installation.

## Credits

[Astroship](https://astroship.web3templates.com/) by [Web3Templates](https://web3templates.com)



## 👀 Want to learn more?

Feel free to check out [Astro Docs](https://docs.astro.build)

[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)
