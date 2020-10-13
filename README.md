# sd-material-ui

StratoDem Analytics Dash implementation of material-ui components.

Dash wrappers around the excellent [`material-ui`](https://github.com/mui-org/material-ui) package

## Installation and usage
```bash
$ pip install sd-material-ui
```

```python
import dash
import dash_html_components as html

import sd_material_ui

my_app = dash.Dash()

# A Button on Paper
my_app.layout = sd_material_ui.Paper([
    html.Div(children=[
        html.P(id='output', children=['n_clicks value: . n_clicks_previous value: '])
    ]),

    sd_material_ui.Button(id='input', children='Click me'),
])

# Callback for Button
@app.callback(
    dash.dependencies.Output('output', 'children'),
    [dash.dependencies.Input('input', 'n_clicks')],
    [dash.dependencies.State('input', 'n_clicks_previous')])
def display_clicks_flat(n_clicks_flat: int, n_clicks_flat_prev: int):
    if n_clicks_flat:
        return [f'n_clicks value: {n_clicks_flat}. n_clicks_prev value: {n_clicks_flat_prev}']
    else:
        return ['n_clicks value: ']

if __name__ == '__main__':
    my_app.run_server()
```

## Material-UI components ported to Dash
- [x] [`AutoComplete`](http://www.material-ui.com/components/autocomplete)
- [x] [`BottomNavigation`](http://www.material-ui.com/components/bottom-navigation)
- [x] [`Checkbox`](http://www.material-ui.com/components/checkboxes)
- [x] [`CircularProgress`](http://www.material-ui.com/components/progress)
- [x] [`Dialog`](http://www.material-ui.com/components/dialogs)
- [x] [`Divider`](http://www.material-ui.com/components/dividers)
- [x] [`Drawer`](http://www.material-ui.com/components/drawers)
- [x] [`DropDownMenu`](http://www.material-ui.com/components/menus)
- [x] [`FlatButton`](http://www.material-ui.com/components/buttons)
- [x] [`FontIcon`](https://material-ui.com/components/icons/#icon-font-icons)
- [x] [`IconButton`](http://www.material-ui.com/components/buttons)
- [x] [`Paper`](http://www.material-ui.com/components/paper)
- [x] [`RaisedButton`](http://material-ui.com/components/buttons/#contained-buttons)
- [x] [`Snackbar`](http://www.material-ui.com/components/snackbars)
- [x] [`Subheader`](http://material-ui.com/components/lists/#pinned-subheader-list)
- [x] [`Toggle`](https://material-ui.com/components/switches/)

## Examples - Outdated, need to update with v4.0.0 examples
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
[@dwkaminsky](https://github.com/dwkaminsky)

[Dash]: https://github.com/plotly/dash
[dash-components-archetype]: https://github.com/plotly/dash-components-archetype
