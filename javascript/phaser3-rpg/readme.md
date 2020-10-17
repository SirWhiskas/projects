# Phaser3 Classic RPG Game
> This utilizes the Phaser3 + Parcel template found [here](https://github.com/ourcade/phaser3-parcel-template)

This is based off the making a Phaser 3 game with modern JS [here](https://blog.ourcade.co/posts/2020/make-first-phaser-3-game-modern-javascript-part1/)

However, this project is extending that tutorial with the use of state machines, inheritance, inventory systems, and dialogue systems.

## Prerequisites
You'll need [Node+Npm](https://nodejs.org/en/) and installed.

You'll also need to install parcel globally
```
npm install -g parcel-bundler
```

## Installation
All you need to do is run this:
```
npm install
```

## Development
To run the game, run this command:
```
npm run start
```

## Assets
Within the project root, add a `public/assets` folder to store all of the game art and images. To prevent the possibility of redistributing game art without the proper license to a public repository, the assets folder will be included within the `.gitignore` file.

## Publishing Build
Parcel will bundle everything up in an optimized build that's suitable for a production environment. Just run this:
```
npm run build
```

This will create files within the `dist` folder that can be copied onto a web server for end-users.