import sd_material_ui
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
    sd_material_ui.BottomNavigation(
        id='input',
        selectedIndex=0,
        selectedStyle={'color': 'blue'},
        navItems=[
            dict(label='test 1', value='val1', icon='1'),
            dict(label='test 2', value='val2', icon='2'),
        ]),
    html.Div(id='output'),

    sd_material_ui.SDDialog(
        html.Div(children=[
            html.P('pathname'),
            html.P(id='closer', children='Close window'),
        ]),
        id='dialog-id',
        modal=True,
        open=False),
    sd_material_ui.SDFlatButton(id='show-dialog', label='Share the page (modal)'),

    sd_material_ui.SDDialog(
        html.Div('pathname b'),
        id='dialog-id-b',
        modal=False,
        open=False),
    sd_material_ui.SDFlatButton(id='show-dialog-b', label='Share the page b',
                                backgroundColor='blue'),

    html.Div(children=[
        html.P(id='show-value', children=['n_clicks value: '])
    ]),
    sd_material_ui.SDRaisedButton(id='count-button', label='Click me'),
])


@app.callback(
    dash.dependencies.Output('output', 'children'),
    [dash.dependencies.Input('input', 'selectedIndex')])
def display_output(value):
    return 'You have entered {}'.format(value)


@app.callback(
    dash.dependencies.Output('dialog-id', 'open'),
    [dash.dependencies.Input('show-dialog', 'n_clicks'),
     dash.dependencies.Input('closer', 'n_clicks')],
    [dash.dependencies.State('dialog-id', 'open')])
def show_dialog(n_clicks: int, close_button: int, open_state: bool):
    if n_clicks and n_clicks > 0:
        if not open_state:
            return True
    elif close_button:
        if open_state:
            return False
    else:
        return False


@app.callback(
    dash.dependencies.Output('dialog-id-b', 'open'),
    [dash.dependencies.Input('show-dialog-b', 'n_clicks')])
def show_dialog(n_clicks: int):
    if n_clicks and n_clicks > 0:
        return True
    else:
        return False


@app.callback(
    dash.dependencies.Output('show-value', 'children'),
    [dash.dependencies.Input('count-button', 'n_clicks')])
def display_clicks(n_clicks: int):
    if n_clicks:
        return ['n_clicks value: {}'.format(n_clicks)]
    else:
        return ['n_clicks value: ']


if __name__ == '__main__':
    app.run_server(debug=True)
