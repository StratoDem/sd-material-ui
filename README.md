# sd-material-ui

StratoDem Analytics Dash implementation of material-ui components.

Dash wrappers around the excellent [`material-ui`](https://github.com/mui-org/material-ui) package

## Material-UI components ported to Dash
- [x] [`AutoComplete`](http://www.material-ui.com/#/components/auto-complete)
- [x] [`BottomNavigation`](http://www.material-ui.com/#/components/bottom-navigation)
- [x] [`Checkbox`](http://www.material-ui.com/#/components/checkbox)
- [x] [`CircularProgress`](http://www.material-ui.com/#/components/circular-progress)
- [x] [`Dialog`](http://www.material-ui.com/#/components/dialog)
- [x] [`Divider`](http://www.material-ui.com/#/components/divider)
- [x] [`Drawer`](http://www.material-ui.com/#/components/drawer)
- [x] [`DropDownMenu`](http://www.material-ui.com/#/components/dropdown-menu)
- [x] [`FlatButton`](http://www.material-ui.com/#/components/flat-button)
- [x] [`FontIcon`](http://www.material-ui.com/#/components/font-icon)
- [x] [`IconButton`](http://www.material-ui.com/#/components/icon-button)
- [x] [`Paper`](http://www.material-ui.com/#/components/paper)
- [x] [`RaisedButton`](http://www.material-ui.com/#/components/raised-button)
- [x] [`Snackbar`](http://www.material-ui.com/#/components/snackbar)
- [x] [`Subheader`](http://www.material-ui.com/#/components/subheader)
- [x] [`Toggle`](http://www.material-ui.com/#/components/toggle)

## Examples
![sd-material-ui examples](https://github.com/StratoDem/sd-material-ui/blob/8b1bf6587f7977c41be414e92ef594ec55768657/Peek%202018-02-22%2010-49.gif)

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

### Contributors
[@mjclawar](https://github.com/mjclawar)
[@coralvanda](https://github.com/coralvanda)
[@SreejaKeesara](https://github.com/SreejaKeesara)

[Dash]: https://github.com/plotly/dash
[dash-components-archetype]: https://github.com/plotly/dash-components-archetype
