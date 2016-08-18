# Typescript and React project template

This repository contains a basic Typescript and React project template. For more information, see http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/

If using a newer Typescript version that Visual Studio Code doesn't (yet) understand, a setting is required.
i.e. enter the content below into *File/Preferences/Workspace Settings* settings.json file. This will instruct Visual Studio Code to use proper TypeScript version that project uses.

`{
    "typescript.tsdk": "node_modules/typescript/lib"
}`