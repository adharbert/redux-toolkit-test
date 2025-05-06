# Test app for redux toolkit
Creating this application to review and test the new redux toolkit and to use for colaboration on file structure.

# Settings
To run this, adding the following to vscode

### vscode settings
- Must install Live Sass compiler.  I have a copy of the vscode settings in the vscode.settings.txt file.  Look at all items for live sass compiler.


### Node version
Be sure to keep an eye on the package.json for "engines", this will have the version of Node this is running.  Be sure to have nvm to update node versions as well.

### API data
This is using mock-api and it uses the db.json as the data source.  


## Things to look for:
- See how redux createSplice works.
- Products has a reference to categories, see how the display & reducer handles grabbing data from the store.
- For anything that needs to load globally, like lookup values.  Load them from App.jsx.  That way they will be available regardless of component. 



