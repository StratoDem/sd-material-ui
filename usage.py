import sd_material_ui
import dash
import flask
import dash_html_components as html
import time

app = dash.Dash('')

app.scripts.config.serve_locally = True

spacer = html.Div(children=[], style=dict(height=20))
final_spacer = html.Div(children=[], style=dict(height=400))


# Callback for BottomNavigation
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

    # Test SDDivider
    sd_material_ui.Divider(),

    spacer,

    sd_material_ui.Divider(inset=True),

    spacer,

    # Test SDSubheader
    sd_material_ui.Subheader(children=['This is a subheader']),

    spacer,

    sd_material_ui.Subheader(children=['This is a subheader with an inset'], inset=True),

    spacer,

    # Test SDPaper
    sd_material_ui.Paper(zDepth=5,
                         circle=True,
                         style=dict(height=100,
                                    width=100,
                                    margin=20,
                                    textAlign='center',
                                    display='inline-block',),
                         ),

    spacer,

    sd_material_ui.Paper(children=[sd_material_ui.FontIcon(className='material-icons',
                                                           iconName='help',
                                                           color='green',)],
                         zDepth=4,
                         rounded=False,
                         style=dict(height=100,
                                    width=100,
                                    margin=20,
                                    textAlign='center',
                                    display='inline-block', ),
                         ),

    spacer,

    # Test SDCircularProgress
    sd_material_ui.CircularProgress(mode='indeterminate'), # can only use indeterminate mode

    spacer,

    sd_material_ui.CircularProgress(mode='indeterminate', size=100, thickness=14),

    spacer,

    # Test FontIcon
    sd_material_ui.FontIcon(className="material-icons", iconName="settings", hoverColor='blue'), # only works for public icons

    spacer,

    # Test SDDialog (modal)
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

    # Test SDDialog (non-modal)
    sd_material_ui.Dialog(
        html.Div(children=[
            html.P('Non-modal dialog'),
        ]),
        id='non-modal-output',
        modal=False,
        open=False),
    html.Div(id='non-modal-input', children=[html.P('Share the page (non-modal)')]),

    spacer,

    # Test SDRaisedButton
    html.Div(children=[
        html.P(id='output4', children=['n_clicks value: . n_clicks_previous value: '])
    ]),
    html.Div(children=[
        sd_material_ui.RaisedButton(id='input4',
                                      label='Use',
                                      primary=True,
                                      buttonStyle=dict(width=50)),
    ], style=dict(backgroundColor='#1D3153')),

    spacer,

    # Test SDFlatButton
    html.Div(children=[
        html.P(id='output5', children=['n_clicks value: . n_clicks_previous value: '])
    ]),
    sd_material_ui.FlatButton(id='input5', label='Click me', backgroundColor='orange'),

    # Test SDIconButton
    html.Div(children=[
        html.P(id='output12', children=['n_clicks value: . n_clicks_previous value: '])
    ]),
    sd_material_ui.IconButton(id='input12',
                              iconClassName='glyphicon glyphicon-cog',
                              iconStyle={'color':'orange', 'width': 48, 'height': 48},
                              tooltip='click for more information', touch=True,
                              tooltipPosition='bottom-right'),


    # Test buttons together to see which was clicked
    html.Div(children=[
        html.P(id='output4-5-12',
               children=['Which button was clicked? ']),
        html.P(id='output4-5-12-b',
               children=['Clicked values for flat () and raised () and icon () buttons'])
    ]),

    spacer,

    # Test for SDDrawer (docked, secondary)
    sd_material_ui.Drawer(id='output6',
                            docked=True,
                            openSecondary=True,
                            style={'backgroundColor': '#444'},
                            children=[html.P(children='Drawer item')]),
    html.Div(id='input6', children=[
        html.P(children='Open or close the drawer (docked)')
    ]),

    spacer,

    # Test for SDDrawer (not docked)
    sd_material_ui.Drawer(id='output7', docked=False, open=False, children=[
        html.P(id='close-input7', children='Drawer item')]),
    html.Div(id='input7', children=[
        html.P(children='Open or close the drawer (not docked)')
    ]),

    spacer,

    # Test for SDRadioButtonGroup
    sd_material_ui.RadioButtonGroup(id='input14',
                                    name='test',
                                    defaultSelected='option3',
                                    options=[
                                        dict(value='option1', label='option 1'),
                                        dict(value='option2', label='option 2'),
                                        dict(value='option3', label='option 3'),
                                    ],
                                    ),

    spacer,

    html.Div(id='output14', children=['Selected item appears here.']),

    spacer,

    # Test for SDToggle
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

    # Test for SDAutoComplete
    sd_material_ui.AutoComplete(
        id='input13',
        anchorOrigin={'vertical': 'center', 'horizontal': 'middle'},
        animated=True,
        dashCallbackDelay=3000,
        dataSource=['orange', 'red', 'blue', 'peach'],
        fullWidth=True,
        floatingLabelText="Type here",
        filter='caseSensitiveFilter',),

    spacer,

    html.Div(id='output13', children=['Selected item appears here (should take 3 seconds to show up).']),

    spacer,

    # Test for SDAutoComplete with exactMatch
    sd_material_ui.AutoComplete(
        id='input-autocomplete-exactmatch',
        anchorOrigin={'vertical': 'center', 'horizontal': 'middle'},
        animated=True,
        exactMatch=True,
        dashCallbackDelay=3000,
        dataSource=[
            dict(label='pink', value=0),
            dict(label='magenta', value=1),
            dict(label='aqua', value={'testKey': 'testVal'}),
            dict(label='aquamarine', value=3),
        ],
        fullWidth=True,
        floatingLabelText="Type here",
        filter='caseSensitiveFilter'),

    spacer,

    html.Div(
        id='output-autocomplete-exactmatch',
        children=['Selected index appears here.']),

    spacer,

    # Test for SDPopover
    sd_material_ui.Popover(
        buttonLabel='Open up',
        buttonType='icon',
        buttonIcon='glyphicon glyphicon-cog',
        buttonStyle=dict(background='red'),
        children=html.Div(children=[
            html.P('This is the popover'),
            html.P('With some children inside'),
            # Test for SDCheckbox
            html.Div(id='output8', children=[
                html.P('Box is not checked')
            ]),
            sd_material_ui.Checkbox(id='input8', label='Check to change the text above.'),
        ])
    ),

    spacer,

    # Test for SDDropDownMenu and SDMenuItem (single selection)
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

    sd_material_ui.Card(
        initiallyExpanded=False,
        headerTitle='Test card header',
        headerSubtitle='Test subtitle',
        titleExpandable=True,
        titleTitle='Card content header',
        textExpandable=True,
        children=[
            sd_material_ui.Card(
                initiallyExpanded=False,
                headerTitle='Inner card header',
                headerSubtitle='Inner subtitle',
                titleExpandable=True,
                titleTitle='Inner card',
                textExpandable=True,
                children=[
                    html.P('YAY')
                ]
            ),
        ]
    ),

    spacer,

    sd_material_ui.Questions(
        id='questions-id',
        questionSectionProps=[
            dict(
                headerTitle='Test title',
                questionProps=[
                    dict(
                        questionText='How do I do something?',
                        questionType='Tag my question',
                        answerPrompt='Ask the question',
                        value='this-is-a-new-value'),
                ])
        ],
        value='',
    ),

    html.Div(id='question-output-id', children=''),
    html.Div(id='question-output-id2', children=''),

    spacer,

    # sd_material_ui.QuestionsTabs(
    #     id='questions-tabs-id',
    #     questionSectionProps=[
    #         dict(
    #             headerTitle='Test title tab 1',
    #             questionProps=[
    #                 dict(
    #                     questionText='How do I do something?',
    #                     value='this-is-a-new-value'),
    #             ]),
    #         dict(
    #             headerTitle='Test title tab 2',
    #             questionProps=[
    #                 dict(
    #                     questionText='How do I do something else?',
    #                     value='this-is-a-second-value'),
    #             ]),
    #     ],
    #     value='',
    # ),
    #
    # html.Div(id='question-output-id3', children=''),
    # html.Div(id='question-output-id4', children=''),
    #
    # spacer,
    #
    # sd_material_ui.Tabs(
    #     children=[
    #         html.Div('Tab 1'),
    #         html.Div('Tab 2'),
    #     ],
    #     tabPropsArray=[
    #         {'label': 'Tab 1 label'},
    #         {'label': 'Tab 2 label'},
    #     ]
    # ),

    sd_material_ui.AutoComplete(
        id='input-autocomplete-search',
        animated=False,
        exactMatch=True,
        dashCallbackDelay=250,
        dataSource=[],
        searchEndpointAPI='/my-search',
        searchJSONStructure={'version': 1, 'extra-args': {'more-fields': 'my-token-here'}},
        fullWidth=True,
        floatingLabelText="Type here"),
    html.Div('', id='output-autocomplete-search'),

    spacer,

    sd_material_ui.Stepper(
        id='input-stepper',
        activeStep=0,
        stepCount=4,
        stepLabels=['Step', 'right', 'this', 'way']
    ),

    html.Div('', id='output-stepper'),

    final_spacer,
])


@app.callback(
    dash.dependencies.Output('question-output-id', 'children'),
    [
        dash.dependencies.Input('questions-id', 'value'),
        dash.dependencies.Input('questions-id', 'n_clicks'),
     ],
    [dash.dependencies.State('questions-id', 'n_clicks_previous')])
def update_questions_output(value, n_clicks, n_clicks_previous):
    time.sleep(5)
    return '{} {} {}'.format(value, n_clicks, n_clicks_previous)


@app.callback(
    dash.dependencies.Output('question-output-id2', 'children'),
    [
        dash.dependencies.Input('questions-id', 'value'),
        dash.dependencies.Input('questions-id', 'n_clicks'),
     ],
    [dash.dependencies.State('questions-id', 'n_clicks_previous')])
def update_questions_output(value, n_clicks, n_clicks_previous):
    return '{} {} {}'.format(value, n_clicks, n_clicks_previous)


# @app.callback(
#     dash.dependencies.Output('question-output-id3', 'children'),
#     [
#         dash.dependencies.Input('questions-tabs-id', 'value'),
#         dash.dependencies.Input('questions-tabs-id', 'n_clicks'),
#      ],
#     [dash.dependencies.State('questions-tabs-id', 'n_clicks_previous')])
# def update_questions_output(value, n_clicks, n_clicks_previous):
#     return '{} {} {}'.format(value, n_clicks, n_clicks_previous)
#
#
# @app.callback(
#     dash.dependencies.Output('question-output-id4', 'children'),
#     [
#         dash.dependencies.Input('questions-tabs-id', 'value'),
#         dash.dependencies.Input('questions-tabs-id', 'n_clicks'),
#      ],
#     [dash.dependencies.State('questions-tabs-id', 'n_clicks_previous')])
# def update_questions_output(value, n_clicks, n_clicks_previous):
#     return '{} {} {}'.format(value, n_clicks, n_clicks_previous)


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
    [dash.dependencies.Input('input4', 'n_clicks')],
    [dash.dependencies.State('input4', 'n_clicks_previous')])
def display_clicks_raised(n_clicks_raised: int, n_clicks_raised_prev: int):
    if n_clicks_raised:
        return ['n_clicks value: {}. n_clicks_previous value: {}'.format(n_clicks_raised,
                                                                         n_clicks_raised_prev)]
    else:
        return ['n_clicks value: ']


# Callback for SDFlatButton
@app.callback(
    dash.dependencies.Output('output5', 'children'),
    [dash.dependencies.Input('input5', 'n_clicks')],
    [dash.dependencies.State('input5', 'n_clicks_previous')])
def display_clicks_flat(n_clicks_flat: int, n_clicks_flat_prev: int):
    if n_clicks_flat:
        return ['n_clicks value: {}. n_clicks_prev value: {}'.format(n_clicks_flat,
                                                                     n_clicks_flat_prev)]
    else:
        return ['n_clicks value: ']


# Callback for SDIconButton
@app.callback(
    dash.dependencies.Output('output12', 'children'),
    [dash.dependencies.Input('input12', 'n_clicks')],
    [dash.dependencies.State('input12', 'n_clicks_previous')])
def display_clicks_icon(n_clicks_icon: int, n_clicks_icon_prev: int):
    if n_clicks_icon:
        return ['n_clicks value: {}. n_clicks_prev value: {}'.format(n_clicks_icon,
                                                                     n_clicks_icon_prev)]
    else:
        return ['n_clicks value: ']


# Callback for combined button test
@app.callback(
    dash.dependencies.Output('output4-5-12', 'children'),
    [dash.dependencies.Input('input4', 'n_clicks'),
     dash.dependencies.Input('input5', 'n_clicks'),
     dash.dependencies.Input('input12', 'n_clicks')],
    [dash.dependencies.State('input4', 'n_clicks_previous'),
     dash.dependencies.State('input5', 'n_clicks_previous'),
     dash.dependencies.State('input12', 'n_clicks_previous')])
def determine_button_callback(raised_n_clicks: int, flat_n_clicks: int, icon_n_clicks: int,
                              raised_n_clicks_prev: int, flat_n_clicks_prev: int,
                              icon_n_clicks_prev: int) -> list:
    if raised_n_clicks is None and flat_n_clicks is None and icon_n_clicks is None:
        return ['Which button was clicked?']
    elif raised_n_clicks is not None and not raised_n_clicks_prev:
        return ['Which button was clicked? Raised button']
    elif flat_n_clicks is not None and not flat_n_clicks_prev:
        return ['Which button was clicked? Flat button']
    elif icon_n_clicks is not None and not icon_n_clicks_prev:
        return ['Which button was clicked? Icon button']
    elif raised_n_clicks > raised_n_clicks_prev:
        return ['Which button was clicked? Raised button']
    elif flat_n_clicks > flat_n_clicks_prev:
        return ['Which button was clicked? Flat button']
    elif icon_n_clicks > icon_n_clicks_prev:
        return ['Which button was clicked? Icon button']
    else:
        return ['Which button was clicked? ']


# Callback for combined button test secondary
@app.callback(
    dash.dependencies.Output('output4-5-12-b', 'children'),
    [dash.dependencies.Input('input4', 'n_clicks'),
     dash.dependencies.Input('input5', 'n_clicks'),
     dash.dependencies.Input('input12', 'n_clicks')],
    [dash.dependencies.State('input4', 'n_clicks_previous'),
     dash.dependencies.State('input5', 'n_clicks_previous'),
     dash.dependencies.State('input12', 'n_clicks_previous')])
def determine_button_callback(raised_n_clicks: int, flat_n_clicks: int, icon_n_clicks: int,
                              raised_n_clicks_prev: int, flat_n_clicks_prev: int,
                              icon_n_clicks_prev: int) -> list:
    return ['Clicked values for flat ({}-{}) and raised ({}-{}) and icon ({}-{}) buttons'.format(
        flat_n_clicks, flat_n_clicks_prev, raised_n_clicks,
        raised_n_clicks_prev, icon_n_clicks, icon_n_clicks_prev)]


# Callback for SDDrawer (docked, secondary)
@app.callback(
    dash.dependencies.Output('output6', 'open'),
    [dash.dependencies.Input('input6', 'n_clicks')],
    [dash.dependencies.State('output6', 'open')])
def operate_drawer(button_click, drawer_state):
    if button_click:
        return not drawer_state


# Callback for SDDrawer (not docked)
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


# Callback for SDCheckbox
@app.callback(
    dash.dependencies.Output('output8', 'children'),
    [dash.dependencies.Input('input8', 'checked')])
def use_clickbox(checkbox):
    if checkbox:
        return ['Box is checked']
    else:
        return ['Box is unchecked']


# Callback for SDToggle
@app.callback(
    dash.dependencies.Output('output9', 'children'),
    [dash.dependencies.Input('input9', 'toggled')])
def use_toggle(switch):
    if switch:
        return ['Flame on!']
    else:
        return ['Flame off']


# Callback for SDSnackbar
@app.callback(
    dash.dependencies.Output('snackbar', 'open'),
    [dash.dependencies.Input('input10', 'n_clicks')])
def open_snackbar(button_click: int):
    if button_click is not None and button_click > 0:
        return True
    else:
        return False


# Callback for SDSnackbar's action
@app.callback(
    dash.dependencies.Output('output10', 'children'),
    [dash.dependencies.Input('snackbar', 'n_clicks')])
def click_snackbar(snackbar_click: str):
    if snackbar_click is not None and snackbar_click > 0:
        return ['Found you!']
    else:
        return ['Looking...']


# Callback for SDDropdownMenu and SDMenuItem
@app.callback(
    dash.dependencies.Output('output11', 'children'),
    [dash.dependencies.Input('input11', 'value')],
    [dash.dependencies.State('input11', 'options')])
def dropdown_callback(value, options):
    return ['Selection is: {}, {}'.format(value, options[value - 1]['customData'])]


# Callback for SDAutoComplete
@app.callback(
    dash.dependencies.Output('output13', 'children'),
    [dash.dependencies.Input('input13', 'searchText')])
def autocomplete_callback(searchText: str):
    return ['Selection is (should take 3 seconds to show up) : {}'.format(searchText)]


# Callback for SDAutoComplete
@app.callback(
    dash.dependencies.Output('output-autocomplete-exactmatch', 'children'),
    [dash.dependencies.Input('input-autocomplete-exactmatch', 'searchValue')])
def autocomplete_callback(searchValue: int):
    return ['Selection is {}'.format(searchValue)]


# Callback for SDAutoComplete
@app.callback(
    dash.dependencies.Output('output-autocomplete-search', 'children'),
    [dash.dependencies.Input('input-autocomplete-search', 'searchValue')])
def autocomplete_callback(searchValue: int):
    return ['Selection is {}'.format(searchValue)]


# Callback for SDRadioButtonGroup
@app.callback(
    dash.dependencies.Output('output14', 'children'),
    [dash.dependencies.Input('input14', 'valueSelected')])
def radiobuttongroup_callback(valueSelected):
    return ['Selection is: {}'.format(valueSelected)]


# Callback for Stepper
@app.callback(
    dash.dependencies.Output('output-stepper', 'children'),
    [dash.dependencies.Input('input-stepper', 'activeStep')])
def stepper_callback(activeStep: int):
    return 'Current step number is {}'.format(activeStep)


@app.server.route('/my-search', methods=['POST'])
def black_box_search_engine():
    search_term = flask.request.get_json().get('searchTerm')

    assert isinstance(search_term, str)

    return flask.jsonify({
        'dataSource': [
            {'label': search_term, 'value': 'val 1'},
            {'label': 'val 2', 'value': {'a-dict-key': 'a value'}},
            {'label': 'val 3', 'value': 'val 3'},
            {'label': 'val 4', 'value': 'val 4'},
        ]})


if __name__ == '__main__':
    app.css.append_css({'external_url': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'})
    app.run_server(debug=True)
