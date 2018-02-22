# sd-material-ui

StratoDem Analytics Dash implementation of material-ui components.

Dash wrappers around the excellent [`material-ui`](https://github.com/mui-org/material-ui) package

## Material-UI components ported to Dash
- [x] [`BottomNavigation`](http://www.material-ui.com/#/components/bottom-navigation)
- [x] [`Checkbox`](http://www.material-ui.com/#/components/checkbox)
- [x] [`FlatButton`](http://www.material-ui.com/#/components/flat-button)
- [x] [`RaisedButton`](http://www.material-ui.com/#/components/raised-button)
- [x] [`Dialog`](http://www.material-ui.com/#/components/dialog)
- [x] [`DropDownMenu`](http://www.material-ui.com/#/components/dropdown-menu)
- [x] [`Drawer`](http://www.material-ui.com/#/components/drawer)
- [x] [`Snackbar`](http://www.material-ui.com/#/components/snackbar)
- [x] [`Toggle`](http://www.material-ui.com/#/components/toggle)

## Dash

Go to this link to learn about [Dash][].

## Dash help

See the [dash-components-archetype][] repo for more information.

## Contributing
To set up the development environment:

```shell
$ npm install
# Run webpack to create the Dash React bundle
$ npm run build-dist
# Set up a virtualenv
$ virtualenv venv -p python3
$ source venv/bin/activate
# Install the local Python Dash package
$ npm run install-local
```

### Running a local server
Run `usage.py` in the virtual environment
```
$ source venv/bin/activate
$ python usage.py
```

[Dash]: https://github.com/plotly/dash
[dash-components-archetype]: https://github.com/plotly/dash-components-archetype
