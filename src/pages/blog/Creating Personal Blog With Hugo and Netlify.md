---
title: "Creating Personal Blog With Hugo and Netlify"
description: "Blog website using a static site generator Hugo and deploying it to Netlify"
excerpt: "Blog website using a static site generator Hugo and deploying it to Netlify"
publishDate: "2022-11-08T11:39:36.050Z"
canonicalURL: 'https://mranand.com/blogs/creating-personal-blog-with-hugo-and-netlify/'
image: "https://astrodevil.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1667839642415%2Fgsj4oCKRj.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75"
category: "Tutorials"
author: "Mr. Ånand"
layout: "@layouts/BlogLayout.astro"
tags: ["hugo", "netlify", "blog", "website"]
---


In this Article! I am going to share the step-by-step method I followed while building a blog website using a static site generator **[Hugo](https://gohugo.io/)** and deploying it to **Netlify**. I encountered some small errors during the process, I am gonna entertain those as well. Let's get started.

As I am using windows, commands may be different, follow [official docs](https://gohugo.io/documentation/) while building your own website using Hugo. Also, I am running all commands on git bash.

## Step 1

Create any folder on Desktop and open `git bash`. Now time to install hugo.

```
choco install hugo -confirm
```
Or if you need the “extended” Sass/SCSS version: for some supported theme. Better install it from `cmd` by running it as administrator.

```
choco install hugo-extended -confirm
```
## Step 2
Now it's time to create a new website and add a cool theme to it. You can choose any theme from the Hugo theme library. Run below commands.

```
// Choose your site name in place of blognerd

hugo new site blognerd
```
The above will create a new Hugo site in a folder named `blognerd`.

It's time to add theme to the site. See [theme library](https://themes.gohugo.io/) for a list of themes to consider. I am using `Beautiful Hugo` theme. 

```
cd blognerd
git init
```


![screely-1667833660447.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667833676076/PKpoGXV0I.png)
You can access GitHub repo of themes by just clicking download button on theme page as you can see in above picture.
Now, download the theme from GitHub and add it to site's theme directory.

```
git submodule add https://github.com/halogenica/beautifulhugo.git  themes/beautifulhugo
```
Now, add the theme to the site configuration:
```
echo theme = \"beautifulhugo\" >> config.toml
```
## Step 3
It's time to add some contents to the newly created site. You can also add them manually but I am creating this using commands.
```
hugo new posts/my-first-post.md
```
Now open the whole folder in any code editor, I am using VS Code and edit your post as you wish. You can see the screenshot of mine editor below for reference of posts files.

![screely-1667833744897.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667833762276/DsRn2AOzq.png)

Above contents may be different for the theme you are using. I am going to add one of my article contents to this post for example, see below screenshot. You can edit metadata between `---` accordingly.

![screely-1667833945407.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667833967425/FSSqga1wz.png)

## Step 4
Now, is the time to test the site we created by running Hugo server.
```
hugo server -D  //run only this command 

Start building sites …
hugo v0.105.0-0e3b42b4a9bdeb4d866210819fc6ddcf51582ffa+extended windows/amd64 BuildDate=2022-10-28T12:29:05Z VendorInfo=gohugoio

                   | EN
-------------------+------
  Pages            |  10
  Paginator pages  |   0
  Non-page files   |   0
  Static files     | 184
  Processed images |   0
  Aliases          |   2
  Sitemaps         |   1
  Cleaned          |   0

Built in 4884 ms

```
You can check live view on `http://localhost:1313/`

here's mine live view...
![screely-1667834152910.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667834183565/PRMRHTJtn.png)

## Step 5
It's time to give final touch to the newly created site. You can customize theme or configure site by opening up `config.toml` in a text editor and edit accordingly. In this theme I took help from their GitHub [readme](https://github.com/halogenica/beautifulhugo#readme). 

Now, time to build static site. Run below command after closing hugo server by pressing `Ctrl+c`

```
hugo -D  //run only this command

Start building sites …
hugo v0.105.0-0e3b42b4a9bdeb4d866210819fc6ddcf51582ffa+extended windows/amd64 BuildDate=2022-10-28T12:29:05Z VendorInfo=gohugoio

                   | EN
-------------------+------
  Pages            |  16
  Paginator pages  |   0
  Non-page files   |   0
  Static files     | 184
  Processed images |   0
  Aliases          |   5
  Sitemaps         |   1
  Cleaned          |   0

Total in 763 ms
```
## Step 6
Everything is now set. You can add more blog contents or customize the site according to your requirement. Now the final work is to deploy it to **Netlify**.

I have Netlify CLI installed so I am going to the final step, You can install it by going to Netlify official docs and login to your account. 

After installing, run following commands:
```
netlify dev
```
It will open Netlify live server on `http://localhost:8888`. After checking everything on your site, close netlify server by pressing `Ctrl+c`. Time to deploy..
```
netlify deploy  //run only this command 

This folder isn't linked to a site yet
? What would you like to do? (Use arrow keys)
> Link this directory to an existing site
  +  Create & configure a new site

```
Follow the instruction and select `(.)` directory. Now deploy production.

```
netlify deploy --prod

// select public directory 
```
Hurray! Now you can access your live website with Netlify domain from Netlify dashboard. I have created one other site and it's deployed, check my live website [here...](https://bloggeek.netlify.app/)

