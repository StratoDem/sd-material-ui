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
        html.Div('pathname b'),
        id='output3',
        modal=False,
        open=False),
    html.Div(id='input3', children=[html.P('Share the page (non-modal)')]),

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
def show_dialog(n_clicks: int, close_button: int, open_state: bool):
    if n_clicks and n_clicks > 0:
        if not open_state:
            return True
    elif close_button:
        if open_state:
            return False
    else:
        return False


# Callback for SDDialog (non-modal)
@app.callback(
    dash.dependencies.Output('output3', 'open'),
    [dash.dependencies.Input('input3', 'n_clicks')])
def show_dialog(n_clicks: int):
    if n_clicks and n_clicks > 0:
        return True
    else:
        return False


# Callback for SDRaisedButton
@app.callback(
    dash.dependencies.Output('output4', 'children'),
    [dash.dependencies.Input('input4', 'n_clicks')])
def display_clicks(n_clicks: int):
    if n_clicks:
        return ['n_clicks value: {}'.format(n_clicks)]
    else:
        return ['n_clicks value: ']


# Callback for SDFlatButton
@app.callback(
    dash.dependencies.Output('output5', 'children'),
    [dash.dependencies.Input('input5', 'n_clicks')])
def display_clicks(n_clicks: int):
    if n_clicks:
        return ['n_clicks value: {}'.format(n_clicks)]
    else:
        return ['n_clicks value: ']


if __name__ == '__main__':
    app.run_server(debug=True)
