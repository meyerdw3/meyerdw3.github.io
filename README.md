# Dylan's Automattic Cover Letter

Last Modified: May 31st, 2021

## 1. Introduction

"[**_Hey Automattic!_**](http://www.themeyergroup.org/about-dylan/)" is a website I developed to supplment my standard application to Automattic in early June 2021. I used it to express my desire and committment to becoming a Technical Account Manager at WordPress VIP. I referred those reading my application to the site in my standard cover letter, but also provided them access to the repository here on GitHub, in case they wanted to dig into the code.

After many hours learning HTML, CSS, and JavaScript (alongside WordPress Core development), I was excited to apply my skills to a tangible project. Although I could have used WordPress to create this site, I decided that making it from scratch would be more fun. This repository contains the final version of all the files that make up the website.

## 2. File Structure

### ./

In the top folder, I have the homepage HTML file (index.html) and two CSS files. "bootstrap_style.css" controls the default look and function of the accordian panels. This is been heavily modifed by the main "styles.css" file that I wrote personally.

### ./js

The "js" subfolder contains three JavaScript files: bootstrap.j, expand_collapse.js, and jquery.js. "bootstrap" and "jquery" control the functionality of the accordian panels and were taken from an external source. Meanwhile, I wrote "expand_collapse" to control the "Expand/Collapse All" button on the homepage to provide additional functionality for the user.

### ./resume

The "resume" and "resume/images" subfolders contain the primary HTML document and stylesheet for my online resume and the images inserted into its volunteering section, respectively.

## 3. Usage

If you would like to see these files as displayed on the web, you can find them posted online [here](http://www.themeyergroup.org/about-dylan/). Alternatively, you can download them or clone the repository, load them into your local environment, and then edit them as you please.

On a minor licensing note, anyone is welcome to use any portion of this code to build their own site. That being said, the actual content (written words and images) are personal to my experience and I would ask you to refrain from using them for any commercial purpose.

## 4. Source Notes

### Bootstrap

The accordian panels on the homepage of this site are powered by Bootstrap V3.4.1 and JQuery V3.5.1:

- [bootstrap.js](https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js)
- [bootstrap_style.css](https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css)
- [jquery.js](https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js)

In each case, I copied the minified version of the code, available at the links above, pasted them into VS Code with Prettify activated, and then saved the file to "de-minify" them. I made a few minor changes to this source code to fix a small error with the +/- symbol after each panel title, but otherwise it remained the same as the original.

### Resume Template

I created the original template for my resume as I was doing the exercise for the "[CSS Essential Training](https://www.linkedin.com/learning/css-essential-training-3/)" course on LinkedIn Learning, by Christina Truong. Since then, I heavily modified the structure, content and styling to match my own experience and needs.

### Creative Influences

I got the idea to create my own website for this application from two sources. I originally heard about on the [_Distributed_](https://distributed.blog/podcast/) with Automattic's CEO, Matt Mullenweg. I then later ran across [Spen Taylor](https://github.com/spen/hello-automattic)'s GitHub-hosted Automattic cover letter, which inspired me to do something similar. So, thank you Matt and Spen!
