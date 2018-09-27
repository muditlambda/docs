---
id: tutorial
title: How to Use Docs? Step By Step Tutorial.
sidebar_label: Tutorial
---

## How To add New Doc

Step 1: Navigate to Docs Folder.

Step 2: Create a New Markdown File.
(A Markdown File ends with extension .md)

Step 3: Add Data in the Following Format.

```md
---
id: tutorial
title: How to Use Docs? Step By Step Tutorial.
sidebar_label: Tutorial
---
```

Here,
id - is the unique link to the file.
title - is the title of Browser page.
sidebar_label: is the title on Sidebar.

Step 4: Save The File.

## How to Add Images/other Assets?

Step 1: Create A Folder named as assets under docs. Place your images and other assets here.

Step 2: In your Markdown document. You can Add an Image or any other asset by the following code example.

```md
![alt-text](assets/image.png)
```

Step 3: Save The File.

## How to Add Code Samples Inside the Markdown?

Step 1: Create a code block inside the markdown with placing code between a pair of ```.

## Add Doc To Sidebar?

Step 1: Open sidebar.json inside website/ directory.

Step 2: You'll See code similar to following.

```json
{
  "docs": {
    "Getting Started": ["real_time_browser_testing"],
    "Automated Screenshot Testing": ["doc2"],
    "Responsive Testing": ["doc3"]
  },
  "docs-other": {
    "First Category": ["doc4", "doc5"]
  }
}
```

Place your doc and its label name in similar fashion following a ',' (comma).

Step 3: Save the File.

## Build Table of Contents

Step 1: To dynamically build Table of Contents place the Title with "##".

```md
Example :

## My Topic
```

## Change Branding/Header

Step 1: Navigate to website/ and open siteConfig.js.

Step 2: Change Values in accordance to the Keys for example :

```
title: "My Title",
copyright: `My Copyright`,
tagline: "My Tagline"
headerIcon: "img/header.png",
footerIcon: "img/logo.png",
favicon: "img/favicon.png",

colors: {
primaryColor: "#105d82",
secondaryColor: "#005ec7"
},
```

Note : The directory in which the images are located by default is : website/static/img/
