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
        html.Div('pathname'),
        id='dialog-id',
        modal=False,
        open=False),
    html.Div(id='show-dialog')
])


@app.callback(
    dash.dependencies.Output('output', 'children'),
    [dash.dependencies.Input('input', 'selectedIndex')])
def display_output(value):
    return 'You have entered {}'.format(value)


@app.callback(
    dash.dependencies.Output('dialog-id', 'open'),
    [dash.dependencies.Input('show-dialog', 'n-clicks')])
def show_dialog(n_clicks: int):
    return True


if __name__ == '__main__':
    app.run_server(debug=True)
