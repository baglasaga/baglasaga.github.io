Welcome to using Github.com, the framework Svelte for easier usage of HTML/CSS/JS, repl.it to develop things, and github pages to host your website! 

##Start-up guide: 

1) Grab this template repository from https://github.com/joeljih/sTemplate

2) Create a new repository(repo) in your github account using this template. Make sure to name your new repo you_user_name.github.io -> this is important because github pages will use this domain to launch your github pages website!

3) Go to repl.com and create a new repl. When choosing what to make, chose "import from github."

4) Use the repo you just created. you_user_name.github.io
5) Your repl should now contain all the files found in the template repo.

## Setting up and using node. 

1) The moment you import the file from github you will notice a popup asking you what the "run" button will do in repl and something called node.js
2) You can leave it as the default and press start. It should refresh the page. If you ever want to change what the "run" button does, you can change it in the .replit file
3) Next you want to install the dependencies (things you need) in the SHELL section in repl.it. Write the words between the code block. ``` npm install ```
4) There will be an installation process. Once it is finished, you are ready to use git!
5) See the word doc for more instructions with pictures. 


Below me is the default messaging from the svelte app github. You can ignore everything below me if you are not interested in setting up Svelte on your home computer.
---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
