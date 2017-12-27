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
    html.Div(id='show-dialog', children=[
        html.P('Share the page (modal)')
    ]),
    sd_material_ui.SDDialog(
        html.Div('pathname b'),
        id='dialog-id-b',
        modal=False,
        open=False),
    sd_material_ui.SDFlatButton(id='show-dialog-b', label='Share the page b',
                                backgroundColor='blue'),
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
def show_dialog(open_button: int, close_button: int, open_state: bool):
    if open_button:
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


if __name__ == '__main__':
    app.run_server(debug=True)
