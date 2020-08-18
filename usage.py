import sd_material_ui
import dash
import flask
import dash_html_components as html
import time

app = dash.Dash(
    '',
    external_stylesheets=[
        'https://fonts.googleapis.com/icon?family=Material+Icons',
    ]
)

app.scripts.config.serve_locally = True

spacer = html.Div(children=[], style=dict(height=20, width=50))
final_spacer = html.Div(children=[], style=dict(height=400))

app.layout = html.Div([

    html.Div([
        spacer,
    ]),

    sd_material_ui.Subheader(['Sample Subheader']),

    sd_material_ui.Divider(),

    html.Div([
        spacer,
    ]),

    html.Div([
        html.Div([

            html.Div([
                html.P([html.Strong('Test for drawer')]),
                sd_material_ui.Drawer(
                    id='drawer',
                    open=False,
                    children=[
                        html.P(id='drawer-close-input', children='X'),
                        html.H4(children='Drawer items'),
                        html.Ul(children=[
                            html.Li(children=['Item 1']),
                            html.Li(children=['Item 2']),
                            html.Li(children=['Item 3']),
                        ]),
                    ]),
                html.Div(id='drawer-input', children=[
                    html.Button(children='Open or close the drawer (left)')
                ]),
            ]),

            spacer,

            html.Div([
                html.P([html.Strong('Test for radio buttons')]),
                sd_material_ui.RadioButtonGroup(
                    id='radio',
                    name='radio test',
                    options=[
                        dict(label='option 1', value='1'),
                        dict(label='option 2', value='2'),
                        dict(label='option 3', value='3'),
                    ],
                    valueSelected='1',
                ),
                html.P(id='radio-output', children='Selection is: '),
            ]),

            spacer,

            html.Div([
                html.P([html.Strong('Test for dialog')]),
                sd_material_ui.Dialog([
                    html.H3('Sample Dialog'),
                    html.Div(html.Button('Close Dialog'), id='closer')
                ], id='output2'),
                html.Div(id='input2', children=[
                    html.Button(children='Open the dialog')
                ]),
            ]),

            spacer,

            html.Div([
                html.P([html.Strong('Sample FontIcon')]),
                sd_material_ui.FontIcon(id='fonticon', iconName='insert_emoticon'),
            ]),

            spacer,

            html.Div([
                html.P([html.Strong('Test for toggle switch')]),
                sd_material_ui.Toggle(
                    id='toggle-input',
                    label='Johnny?',
                    toggled=False,
                ),
                html.P(id='toggle-output', children=['Flame off']),
            ]),

            spacer,

            html.Div([
                html.P([html.Strong('Test for Snackbar')]),
                html.Button('Open/Close Snackbar', id='snackbar-button'),
                sd_material_ui.Snackbar(id='snackbar',
                                        message='You opened the Snackbar!')
            ]),

        ], style=dict(display='flex', flexWrap='wrap')),
    ]),

    sd_material_ui.Divider(),

    html.Div([
        spacer,
    ]),

    html.Div([
        html.Div([

            html.Div([

                html.P([html.Strong('Sample for Paper/Card')]),
                sd_material_ui.Paper([
                    html.H3('Paper Title'),
                    sd_material_ui.Card([
                        html.P('Card Text')
                    ]),
                ])
            ]),

            spacer,

            html.Div([
                html.P([html.Strong('Test for BottomNavigation')]),
                sd_material_ui.BottomNavigation(
                    id='bottom-nav',
                    navItems=[dict(label=f'Item {x}',
                                   value=x,
                                   targetId=f'nav-item-{x}') for x in range(3)],
                    selectedValue=0,
                    displayLabels=True,
                ),
                spacer,
                html.P(id='bottom-nav-output')
            ]),

            spacer,

            html.Div([
                html.P([html.Strong('Test for buttons')]),

                sd_material_ui.Button(html.P('This is a Raised Button'),
                                      id='button1',
                                      disableShadow=False,
                                      useIcon=False,
                                      variant='contained'),

                spacer,

                sd_material_ui.Button(html.P('This is a Flat Button'),
                                      id='button2',
                                      disableShadow=False,
                                      useIcon=False,
                                      variant='outlined',
                                      classes={'root': 'SAMPLE_ROOT_CLASS',
                                               'label': 'SAMPLE_LABEL_CLASS', }),

                spacer,

                sd_material_ui.Button('Text Button',
                                      id='button3',
                                      variant='text', ),

                spacer,

                sd_material_ui.Button(useIcon=True,
                                      id='button4',
                                      iconClass="glyphicon glyphicon-asterisk"),

                html.P(id='output-button')

            ]),

            spacer,

            html.Div([

                html.P([html.Strong('Test for Checkbox')]),

                sd_material_ui.Checkbox(id='checkbox1', label='Apple', name='Apple'),
                sd_material_ui.Checkbox(id='checkbox2', label='2', name='2'),
                sd_material_ui.Checkbox(id='checkbox3', label=5, name='5'),

                html.P(id='checkbox-output'),
                html.Button('Clear Selections', id='clear-checks')
            ]),
        ], style=dict(display='flex', flexWrap='wrap')),
    ]),

    sd_material_ui.Divider(),

    html.Div([
        html.Div([
            html.P([html.Strong('Test for dropdown menu')]),
            sd_material_ui.DropDownMenu(
                id='dropdown-input',
                labelText='Test',
                labelId='dropdown-label',
                value=1,
                useGrouping=True,
                options=[
                    dict(grouping='Group A'),
                    dict(primaryText='Option 1', value=1),
                    dict(primaryText='Option 2', value=2),
                    dict(grouping='Group B'),
                    dict(primaryText='Option 3', value=3),
                    dict(grouping='Group C'),
                    dict(primaryText='Option 4', value=4),
                ]),

            html.P(id='dropdown-output'),
        ]),

        spacer,

        html.Div([
            html.P([html.Strong('Sample for CircularProgress')]),
            sd_material_ui.CircularProgress(color='#00f2ff',
                                            thickness=5),
        ]),

        final_spacer,
    ], style=dict(display='flex', flexWrap='wrap')),

])


@app.callback(
    dash.dependencies.Output('snackbar', 'open'),
    [dash.dependencies.Input('snackbar-button', 'n_clicks')],
    [dash.dependencies.State('snackbar', 'open')])
def callback_snackbar(n: int, _open: bool):
    if not n:
        raise dash.exceptions.PreventUpdate
    return not _open


@app.callback(dash.dependencies.Output('bottom-nav-output', 'children'),
              [dash.dependencies.Input('bottom-nav', 'selectedValue')],
              [dash.dependencies.State('bottom-nav', 'selectedValue')], )
def callback_bottom_nav(value, state_value):
    if value is None:
        return 'Value Selected: '
    return f'Value Selected: Item {value}'


# @app.callback(
#     dash.dependencies.Output('question-output-id', 'children'),
#     [
#         dash.dependencies.Input('questions-id', 'value'),
#         dash.dependencies.Input('questions-id', 'n_clicks'),
#      ],
#     [dash.dependencies.State('questions-id', 'n_clicks_previous')])
# def update_questions_output(value, n_clicks, n_clicks_previous):
#     time.sleep(5)
#     return '{} {} {}'.format(value, n_clicks, n_clicks_previous)
#
#
# @app.callback(
#     dash.dependencies.Output('question-output-id2', 'children'),
#     [
#         dash.dependencies.Input('questions-id', 'value'),
#         dash.dependencies.Input('questions-id', 'n_clicks'),
#      ],
#     [dash.dependencies.State('questions-id', 'n_clicks_previous')])
# def update_questions_output(value, n_clicks, n_clicks_previous):
#     return '{} {} {}'.format(value, n_clicks, n_clicks_previous)
#
#
# # @app.callback(
# #     dash.dependencies.Output('question-output-id3', 'children'),
# #     [
# #         dash.dependencies.Input('questions-tabs-id', 'value'),
# #         dash.dependencies.Input('questions-tabs-id', 'n_clicks'),
# #      ],
# #     [dash.dependencies.State('questions-tabs-id', 'n_clicks_previous')])
# # def update_questions_output(value, n_clicks, n_clicks_previous):
# #     return '{} {} {}'.format(value, n_clicks, n_clicks_previous)
# #
# #
# # @app.callback(
# #     dash.dependencies.Output('question-output-id4', 'children'),
# #     [
# #         dash.dependencies.Input('questions-tabs-id', 'value'),
# #         dash.dependencies.Input('questions-tabs-id', 'n_clicks'),
# #      ],
# #     [dash.dependencies.State('questions-tabs-id', 'n_clicks_previous')])
# # def update_questions_output(value, n_clicks, n_clicks_previous):
# #     return '{} {} {}'.format(value, n_clicks, n_clicks_previous)
#
#
# @app.callback(
#     dash.dependencies.Output('tab-output', 'children'),
#     [dash.dependencies.Input('tab-input', 'value')])
# def show_selected_tab_value(value):
#     return 'Selected tab: {}'.format(value)
#
#
# @app.callback(
#     dash.dependencies.Output('output', 'children'),
#     [dash.dependencies.Input('input', 'selectedIndex')])
# def display_output(value):
#     return 'You have entered {}'.format(value)
#
#
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


@app.callback(
    dash.dependencies.Output('checkbox-output', 'children'),
    [dash.dependencies.Input('checkbox1', 'checked'),
     dash.dependencies.Input('checkbox2', 'checked'),
     dash.dependencies.Input('checkbox3', 'checked')],
    [dash.dependencies.State('checkbox1', 'name'),
     dash.dependencies.State('checkbox2', 'name'),
     dash.dependencies.State('checkbox3', 'name')])
def callback_checkboxes(check_1: bool, check_2: bool, check_3: bool,
                        name_1: str, name_2: str, name_3: str, ):
    output = []
    if check_1:
        output.append(name_1)
    if check_2:
        output.append(name_2)
    if check_3:
        output.append(name_3)
    return f'{output}'


@app.callback(
    [dash.dependencies.Output('checkbox1', 'checked'),
     dash.dependencies.Output('checkbox2', 'checked'),
     dash.dependencies.Output('checkbox3', 'checked')],
    [dash.dependencies.Input('clear-checks', 'n_clicks')])
def callback_checkboxes(n: int):
    if not n:
        raise dash.exceptions.PreventUpdate
    return False, False, False


#
#
# # Callback for SDDialog (non-modal)
# @app.callback(
#     dash.dependencies.Output('non-modal-output', 'open'),
#     [dash.dependencies.Input('non-modal-input', 'n_clicks')],
#     [dash.dependencies.State('non-modal-output', 'open')])
# def show_non_modal_dialog(non_modal_click: int, open_state: bool):
#     if non_modal_click and non_modal_click > 0:
#         if not open_state:
#             return True
#     else:
#         return False
#
#
# # Callback for SDRaisedButton
# @app.callback(
#     dash.dependencies.Output('output4', 'children'),
#     [dash.dependencies.Input('input4', 'n_clicks')],
#     [dash.dependencies.State('input4', 'n_clicks_previous')])
# def display_clicks_raised(n_clicks_raised: int, n_clicks_raised_prev: int):
#     if n_clicks_raised:
#         return ['n_clicks value: {}. n_clicks_previous value: {}'.format(n_clicks_raised,
#                                                                          n_clicks_raised_prev)]
#     else:
#         return ['n_clicks value: ']
#
#
# # Callback for SDFlatButton
# @app.callback(
#     dash.dependencies.Output('output5', 'children'),
#     [dash.dependencies.Input('input5', 'n_clicks')],
#     [dash.dependencies.State('input5', 'n_clicks_previous')])
# def display_clicks_flat(n_clicks_flat: int, n_clicks_flat_prev: int):
#     if n_clicks_flat:
#         return ['n_clicks value: {}. n_clicks_prev value: {}'.format(n_clicks_flat,
#                                                                      n_clicks_flat_prev)]
#     else:
#         return ['n_clicks value: ']
#
#
# # Callback for SDIconButton
# @app.callback(
#     dash.dependencies.Output('output12', 'children'),
#     [dash.dependencies.Input('input12', 'n_clicks')],
#     [dash.dependencies.State('input12', 'n_clicks_previous')])
# def display_clicks_icon(n_clicks_icon: int, n_clicks_icon_prev: int):
#     if n_clicks_icon:
#         return ['n_clicks value: {}. n_clicks_prev value: {}'.format(n_clicks_icon,
#                                                                      n_clicks_icon_prev)]
#     else:
#         return ['n_clicks value: ']


# Callback for SDDrawer (not docked)
@app.callback(
    dash.dependencies.Output('drawer', 'open'),
    [dash.dependencies.Input('drawer-input', 'n_clicks'),
     dash.dependencies.Input('drawer-close-input', 'n_clicks')],
    [dash.dependencies.State('drawer', 'open')])
def operate_drawer(button_click, menu_item_click, drawer_state):
    if not drawer_state:
        if button_click:
            return True
    if menu_item_click:
        return False


# Callback for SDToggle
@app.callback(
    dash.dependencies.Output('toggle-output', 'children'),
    [dash.dependencies.Input('toggle-input', 'toggled')])
def use_toggle(switch):
    if switch:
        return ['Flame on!']
    else:
        return ['Flame off']


#
#
# # Callback for SDSnackbar
# @app.callback(
#     dash.dependencies.Output('snackbar', 'open'),
#     [dash.dependencies.Input('input10', 'n_clicks')])
# def open_snackbar(button_click: int):
#     if button_click is not None and button_click > 0:
#         return True
#     else:
#         return False
#
#
# # Callback for SDSnackbar's action
# @app.callback(
#     dash.dependencies.Output('output10', 'children'),
#     [dash.dependencies.Input('snackbar', 'n_clicks')])
# def click_snackbar(snackbar_click: str):
#     if snackbar_click is not None and snackbar_click > 0:
#         return ['Found you!']
#     else:
#         return ['Looking...']
#
#
# Callback for SDDropdownMenu and SDMenuItem
@app.callback(
    dash.dependencies.Output('dropdown-output', 'children'),
    [dash.dependencies.Input('dropdown-input', 'value')])
def dropdown_callback(value):
    return ['Selection is: {}'.format(value)]
#
#
# # Callback for SDAutoComplete
# @app.callback(
#     dash.dependencies.Output('output13', 'children'),
#     [dash.dependencies.Input('input13', 'searchText')])
# def autocomplete_callback(searchText: str):
#     return ['Selection is (should take 3 seconds to show up) : {}'.format(searchText)]
#
#
# # Callback for SDAutoComplete
# @app.callback(
#     dash.dependencies.Output('output-autocomplete-exactmatch', 'children'),
#     [dash.dependencies.Input('input-autocomplete-exactmatch', 'searchValue')])
# def autocomplete_callback(searchValue: int):
#     return ['Selection is {}'.format(searchValue)]
#
#
# # Callback for SDAutoComplete
# @app.callback(
#     dash.dependencies.Output('output-autocomplete-search', 'children'),
#     [dash.dependencies.Input('input-autocomplete-search', 'searchValue')])
# def autocomplete_callback(searchValue: int):
#     return ['Selection is {}'.format(searchValue)]
#
#
# Callback for SDRadioButtonGroup
@app.callback(
    dash.dependencies.Output('radio-output', 'children'),
    [dash.dependencies.Input('radio', 'value')])
def radiobuttongroup_callback(value):
    return ['Selection is: {}'.format(value)]


#
#
# # Callback for Stepper
# @app.callback(
#     dash.dependencies.Output('output-stepper', 'children'),
#     [dash.dependencies.Input('input-stepper', 'activeStep')])
# def stepper_callback(activeStep: int):
#     return 'Current step number is {}'.format(activeStep)
#
#
# @app.server.route('/my-search', methods=['POST'])
# def black_box_search_engine():
#     search_term = flask.request.get_json().get('searchTerm')
#
#     assert isinstance(search_term, str)
#
#     return flask.jsonify({
#         'dataSource': [
#             {'label': search_term, 'value': 'val 1'},
#             {'label': 'val 2', 'value': {'a-dict-key': 'a value'}},
#             {'label': 'val 3', 'value': 'val 3'},
#             {'label': 'val 4', 'value': 'val 4'},
#         ]})


if __name__ == '__main__':
    app.run_server(debug=True)
