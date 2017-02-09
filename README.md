# `react-scripts-sedona`

Create custom React apps with Typescript.

### features

react-scripts-sedona provide Typescript support thanks to wmonk/create-react-app-typescript
and customisation thanks to kitze/create-react-app.

See this projects' README for more informations.

### customisation

```create-react-app my-app --scripts-version react-scripts-sedona```

Modify the ```.env``` file in the root of the generated project, and add any of the configuration options below 👇 to enable that feature.

The generated project comes with SASS, LESS, and CSS modules support by default, but you can remove them at any time by removing the options from the ```.env``` file.

### 📝 Configuration options

#### Styling
- ```REACT_APP_SASS=true``` - enable SASS support
- ```REACT_APP_LESS=true``` - enable LESS support
- ```REACT_APP_STYLUS=true``` - enable Stylus support
- ```REACT_APP_CSS_MODULES``` - enable CSS modules

#### Babel

> ⚠️ For now, Babel options are disabled due to Typescript support. Use kitze/create-react-app if you need ES2015.

#### Others
- ```PORT=3015``` - change default port (supported in CRA by default)
- ```OPEN_BROWSER=false``` - don't open browser after running webpack server

## Credits

This project is maintained by [Sedona](http://www.sedona.fr).
