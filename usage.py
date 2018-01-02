import sd_material_ui
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([

    # Test BottomNavigation
    sd_material_ui.BottomNavigation(
        id='input',
        selectedIndex=0,
        selectedStyle={'color': 'blue'},
        navItems=[
            dict(label='test 1', value='val1', icon='1'),
            dict(label='test 2', value='val2', icon='2'),
        ]),
    html.Div(id='output'),

    # Test SDDialog (modal)
    sd_material_ui.SDDialog(
        html.Div(children=[
            html.P('pathname'),
            html.P(id='closer', children='Close window'),
        ]),
        id='output2',
        modal=True,
        open=False),
    html.Div(id='input2', children=[html.P('Share the page (modal)')]),

    # Test SDDialog (non-modal)
    sd_material_ui.SDDialog(
        html.Div(children=[
            html.P('Non-modal dialog'),
        ]),
        id='non-modal-output',
        modal=False,
        open=False),
    html.Div(id='non-modal-input', children=[html.P('Share the page (non-modal)')]),

    # Test SDRaisedButton
    html.Div(children=[
        html.P(id='output4', children=['n_clicks value: '])
    ]),
    sd_material_ui.SDRaisedButton(id='input4', label='Click me'),

    # Test SDFlatButton
    html.Div(children=[
        html.P(id='output5', children=['n_clicks value: '])
    ]),
    sd_material_ui.SDFlatButton(id='input5', label='Click me', backgroundColor='orange'),

    # Test for SDDrawer
    sd_material_ui.SDDrawer(id='output5', docked=False, children=[html.P('Drawer item')]),
    html.Div(id='input5', children=[
        html.P('Open or close the drawer')
    ]),
])


# Callback for BottomNavigation
@app.callback(
    dash.dependencies.Output('output', 'children'),
    [dash.dependencies.Input('input', 'selectedIndex')])
def display_output(value):
    return 'You have entered {}'.format(value)


# Callback for SDDialog (modal)
@app.callback(
    dash.dependencies.Output('output2', 'open'),
    [dash.dependencies.Input('input2', 'n_clicks'),
     dash.dependencies.Input('closer', 'n_clicks')],
    [dash.dependencies.State('output2', 'open')])
def show_modal_dialog(modal_click: int, close_button: int, open_state: bool):
    if modal_click and modal_click > 0:
        if not open_state:
            return True
    elif close_button:
        if open_state:
            return False
    else:
        return False


# Callback for SDDialog (non-modal)
@app.callback(
    dash.dependencies.Output('non-modal-output', 'open'),
    [dash.dependencies.Input('non-modal-input', 'n_clicks')],
    [dash.dependencies.State('non-modal-output', 'open')])
def show_non_modal_dialog(non_modal_click: int, open_state: bool):
    if non_modal_click and non_modal_click > 0:
        if not open_state:
            return True
    else:
        return False


# Callback for SDRaisedButton
@app.callback(
    dash.dependencies.Output('output4', 'children'),
    [dash.dependencies.Input('input4', 'n_clicks')])
def display_clicks_raised(n_clicks_raised: int):
    if n_clicks_raised:
        return ['n_clicks value: {}'.format(n_clicks_raised)]
    else:
        return ['n_clicks value: ']


# Callback for SDFlatButton
@app.callback(
    dash.dependencies.Output('output5', 'children'),
    [dash.dependencies.Input('input5', 'n_clicks')])
def display_clicks_flat(n_clicks_flat: int):
    if n_clicks_flat:
        return ['n_clicks value: {}'.format(n_clicks_flat)]
    else:
        return ['n_clicks value: ']


# TODO figure out what value to use for opening and closing the drawer; hidden doesn't work
# Here is a list of the available properties in "output5":
# ['children', 'id', 'n_clicks', 'key', 'accessKey', 'className', 'contentEditable',
# 'contextMenu', 'dir', 'draggable', 'hidden', 'lang', 'spellCheck', 'style', 'tabIndex', 'title']

# Callback for SDDrawer
@app.callback(
    dash.dependencies.Output('output5', 'hidden'),
    [dash.dependencies.Input('input5', 'n_clicks')],
    [dash.dependencies.State('output5', 'hidden')])
def operate_drawer(button_click, drawer_state):
    if button_click:
        return not drawer_state


if __name__ == '__main__':
    app.run_server(debug=True)
