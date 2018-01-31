import sd_material_ui
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

spacer = html.Div(children=[], style=dict(height=20))
final_spacer = html.Div(children=[], style=dict(height=400))

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

    spacer,

    # Test Dialog (modal)
    sd_material_ui.Dialog(
        html.Div(children=[
            html.P('pathname'),
            html.P(id='closer', children='Close window'),
        ]),
        id='output2',
        modal=True,
        open=False),
    html.Div(id='input2', children=[html.P('Share the page (modal)')]),

    spacer,

    # Test Dialog (non-modal)
    sd_material_ui.Dialog(
        html.Div(children=[
            html.P('Non-modal dialog'),
        ]),
        id='non-modal-output',
        modal=False,
        open=False),
    html.Div(id='non-modal-input', children=[html.P('Share the page (non-modal)')]),

    spacer,

    # Test RaisedButton
    html.Div(children=[
        html.P(id='output4', children=['n_clicks value: '])
    ]),
    html.Div(children=[
        sd_material_ui.RaisedButton(id='input4',
                                      label='Use',
                                      primary=True,
                                      buttonStyle=dict(width=50)),
    ], style=dict(backgroundColor='#1D3153')),

    spacer,

    # Test FlatButton
    html.Div(children=[
        html.P(id='output5', children=['n_clicks value: '])
    ]),
    sd_material_ui.FlatButton(id='input5', label='Click me', backgroundColor='orange'),

    spacer,

    # Test for Drawer (docked, secondary)
    sd_material_ui.Drawer(id='output6',
                            docked=True,
                            openSecondary=True,
                            style={'backgroundColor': '#444'},
                            children=[html.P(children='Drawer item')]),
    html.Div(id='input6', children=[
        html.P(children='Open or close the drawer (docked)')
    ]),

    spacer,

    # Test for Drawer (not docked)
    sd_material_ui.Drawer(id='output7', docked=False, open=False, children=[
        html.P(id='close-input7', children='Drawer item')]),
    html.Div(id='input7', children=[
        html.P(children='Open or close the drawer (not docked)')
    ]),

    spacer,

    # Test for Checkbox
    html.Div(id='output8', children=[
        html.P('Box is not checked')
    ]),
    sd_material_ui.Checkbox(id='input8', label='Check to change the text above.'),

    spacer,

    # Test for Toggle
    html.Div(children=[
        sd_material_ui.Toggle(id='input9', label='Johnny?'),
        html.Div(id='output9', children=[
            html.P('Flame off')
        ]),
     ], style=dict(width=150)),

    spacer,

    sd_material_ui.RaisedButton(id='input10', label='Marco'),
    html.Div(id='output10', children=['Looking...']),
    sd_material_ui.Snackbar(id='snackbar', open=False, message='Polo', action='Reveal'),

    spacer,

    # Test for DropDownMenu and MenuItem (single selection)
    html.Div(children=[
        sd_material_ui.DropDownMenu(id='input11',
                                    value=1,
                                    options=[
                                        dict(value=1, primaryText='Item 1',
                                             label='First choice!', customData='Anything!'),
                                        dict(value=2, primaryText='Item 2',
                                             customData={'foo': 'bar'}),
                                        dict(value=3, primaryText='Item 3', disabled=True,
                                             secondaryText='Disabled for now'),
                                    ],
                                    menuStyle=dict(width=300),  # controls style of the open menu
                                    labelStyle=dict(color='white', height=35),
                                    underlineStyle=dict(display='none'),
                                    autoWidth=False,
                                    style=dict(height=40, marginTop=-10),
                                    listStyle=dict(height=35),
                                    selectedMenuItemStyle=dict(height=30),
                                    anchorOrigin=dict(vertical='bottom', horizontal='right')),
    ], style=dict(backgroundColor='#1D3153')),
    html.Div(id='output11', children=['Selected item appears here.']),

    spacer,

    # Test for List and ListItem
    sd_material_ui.List(id='input12', children=[
        sd_material_ui.ListItem(id='input12-1', primaryText='First item',
                                nestedItems=[
                                    dict(componentType='RaisedButton',
                                         buttonProps=dict(
                                             id='testme1',
                                             label='please'
                                         ))]),
        sd_material_ui.ListItem(id='input12-2', primaryText='Second item'),
        sd_material_ui.ListItem(id='input12-3', primaryText='Third item')
    ]),
    html.Div(id='output12', children=['Selected list item is: ']),

    final_spacer,
])


# Callback for BottomNavigation
@app.callback(
    dash.dependencies.Output('output', 'children'),
    [dash.dependencies.Input('input', 'selectedIndex')])
def display_output(value):
    return 'You have entered {}'.format(value)


# Callback for Dialog (modal)
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


# Callback for Dialog (non-modal)
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


# Callback for RaisedButton
@app.callback(
    dash.dependencies.Output('output4', 'children'),
    [dash.dependencies.Input('input4', 'n_clicks')])
def display_clicks_raised(n_clicks_raised: int):
    if n_clicks_raised:
        return ['n_clicks value: {}'.format(n_clicks_raised)]
    else:
        return ['n_clicks value: ']


# Callback for FlatButton
@app.callback(
    dash.dependencies.Output('output5', 'children'),
    [dash.dependencies.Input('input5', 'n_clicks')])
def display_clicks_flat(n_clicks_flat: int):
    if n_clicks_flat:
        return ['n_clicks value: {}'.format(n_clicks_flat)]
    else:
        return ['n_clicks value: ']


# Callback for Drawer (docked, secondary)
@app.callback(
    dash.dependencies.Output('output6', 'open'),
    [dash.dependencies.Input('input6', 'n_clicks')],
    [dash.dependencies.State('output6', 'open')])
def operate_drawer(button_click, drawer_state):
    if button_click:
        return not drawer_state


# Callback for Drawer (not docked)
@app.callback(
    dash.dependencies.Output('output7', 'open'),
    [dash.dependencies.Input('input7', 'n_clicks'),
     dash.dependencies.Input('close-input7', 'n_clicks')],
    [dash.dependencies.State('output7', 'open')])
def operate_drawer(button_click, menu_item_click, drawer_state):
    if not drawer_state:
        if button_click:
            return True
    if menu_item_click:
        return False


# Callback for Checkbox
@app.callback(
    dash.dependencies.Output('output8', 'children'),
    [dash.dependencies.Input('input8', 'checked')])
def use_clickbox(checkbox):
    if checkbox:
        return ['Box is checked']
    else:
        return ['Box is unchecked']


# Callback for Toggle
@app.callback(
    dash.dependencies.Output('output9', 'children'),
    [dash.dependencies.Input('input9', 'toggled')])
def use_toggle(switch):
    if switch:
        return ['Flame on!']
    else:
        return ['Flame off']


# Callback for Snackbar
@app.callback(
    dash.dependencies.Output('snackbar', 'open'),
    [dash.dependencies.Input('input10', 'n_clicks')])
def open_snackbar(button_click: int):
    if button_click is not None and button_click > 0:
        return True
    else:
        return False


# Callback for Snackbar's action
@app.callback(
    dash.dependencies.Output('output10', 'children'),
    [dash.dependencies.Input('snackbar', 'n_clicks')])
def click_snackbar(snackbar_click: str):
    if snackbar_click is not None and snackbar_click > 0:
        return ['Found you!']
    else:
        return ['Looking...']


# Callback for DropdownMenu and MenuItem
@app.callback(
    dash.dependencies.Output('output11', 'children'),
    [dash.dependencies.Input('input11', 'value')],
    [dash.dependencies.State('input11', 'options')])
def dropdown_callback(value, options):
    return ['Selection is: {}, {}'.format(value, options[value - 1]['customData'])]


# Callback for List and ListItem
@app.callback(
    dash.dependencies.Output('output12', 'children'),
    [dash.dependencies.Input('input12-1', 'primaryText'),
     dash.dependencies.Input('input12-2', 'primaryText'),
     dash.dependencies.Input('input12-3', 'open')])
def list_items_callback(item1, item2, item3):
    selected = ''
    if item1:
        selected = item1
    elif item2:
        selected = item2
    elif item3:
        selected = item3
    return ['Selected list item is: {}'.format(selected)]


if __name__ == '__main__':
    app.run_server(debug=True)
