import dash
import dash_html_components as html
import sd_material_ui

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
                html.Div(children=['Snackbar button clicks: None'], id='snackbar-output'),
                sd_material_ui.Snackbar(
                    id='snackbar',
                    action='Update text',
                    actionStyles=dict(color='white'),
                    message='sample message',
                    # children=html.P('You opened the Snackbar!'),
                )]),


            spacer,

            html.Div([
                    html.P([html.Strong('Sample for AutoComplete')]),
                    sd_material_ui.AutoComplete(
                        id='autocomplete',
                        dataSource=[{'label': 'Austin, TX', 'value': 'Austin'},
                                    {'label': 'Houston, TX', 'value': 'Houston'},
                                    {'label': 'New York, NY', 'value': 'New York'},
                                    {'label': 'Denver, CO', 'value': 'Denver'},
                                    {'label': 'Chicago, IL', 'value': 'Chicago'},
                                    {'label': 'Detroit, MI', 'value': 'Detroit'},
                                    {'label': 'Los Angeles, CA', 'value': 'Los Angeles'}],
                        dashCallbackDelay=3000
                    ),
                    html.P(id='autocomplete-output'),
                    html.Br(),
                    html.Br(),
                    html.Br(),
                    html.P(id='autocomplete-search'),
                ]),

            spacer,

            html.Div([
                html.P([html.Strong('Test for Accordion')]),

                sd_material_ui.Accordion(
                    id='accordion1',
                    label='Accordion 1',
                    expanded=False,
                    children=html.P('Text inside the accordion')),
                sd_material_ui.Accordion(
                    id='accordion2',
                    label='Accordion 2',
                    expanded=False,
                    square=True,
                    children=html.Div([
                        html.P('Line of text'),
                        html.P('Another line of text'),
                    ])),
                sd_material_ui.Accordion(
                    id='accordion3',
                    label='Accordion 3',
                    disabled=False,
                    expanded=False,
                    square=True,
                    children=html.P('Text')),
                sd_material_ui.Button(
                    children='Open Accordion 1', variant='contained', id='accordion-input'),
                sd_material_ui.Toggle(
                    id='accordion-toggle-input',
                    label='3 is Disabled',
                    toggled=False,
                    secondaryLabel='3 is Enabled')
            ]),

            spacer,

            html.Div([
                html.P([html.Strong('Test for buttons')]),

                sd_material_ui.Button(
                    children=html.P('This is a Raised Button'),
                    id='button1',
                    disableShadow=False,
                    useIcon=False,
                    variant='contained'),

                spacer,

                sd_material_ui.Button(
                    children=html.P('This is a Flat Button'),
                    id='button2',
                    disableShadow=False,
                    useIcon=False,
                    variant='outlined',
                    classes={'root': 'SAMPLE_ROOT_CLASS',
                             'label': 'SAMPLE_LABEL_CLASS', }),

                spacer,

                sd_material_ui.Button(
                    children='Text Button',
                    id='button3',
                    variant='text', ),

                spacer,

                sd_material_ui.Button(
                    useIcon=True, id='button4', iconClass="glyphicon glyphicon-asterisk"),

                html.P(id='output-button')

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
                html.P([html.Strong('Test for Collapse Transition and Paper/Card')]),
                sd_material_ui.CollapseTransition(id='transition-collapse', visible=True, children=[
                    sd_material_ui.Paper([
                        html.H3('Paper Title'),
                        sd_material_ui.Card([
                            html.P('Card Text')
                        ]),
                    ])
                ]),
                sd_material_ui.Toggle(id='transition-input', toggled=True, label='Show element?'),
            ]),

            spacer,

            html.Div([
                html.P([html.Strong('Test for Fade Transition')]),
                sd_material_ui.FadeTransition(id='transition-fade', visible=True, children=[
                    sd_material_ui.Card([
                        html.P('Card Text')
                    ]),
                ]),
                sd_material_ui.Toggle(
                    id='transition-fade-input', toggled=True, label='Show element?'),
            ]),

            spacer,

            html.Div([
                html.P([html.Strong('Test for Grow Transition')]),
                sd_material_ui.GrowTransition(id='transition-grow', visible=True, children=[
                    sd_material_ui.Card([
                        html.P('Card Text')
                    ]),
                ]),
                sd_material_ui.Toggle(
                    id='transition-grow-input', toggled=True, label='Show element?'),
            ]),

            spacer,

            html.Div([
                html.P([html.Strong('Test for Slide Transition')]),
                sd_material_ui.SlideTransition(id='transition-slide', visible=True, children=[
                    sd_material_ui.Card([
                        html.P('Card Text')
                    ]),
                ]),
                sd_material_ui.Toggle(
                    id='transition-slide-input', toggled=True, label='Show element?'),
            ]),

            spacer,

            html.Div([
                html.P([html.Strong('Test for Zoom Transition')]),
                sd_material_ui.ZoomTransition(id='transition-zoom', visible=True, children=[
                    sd_material_ui.Card([
                        html.P('Card Text')
                    ]),
                ]),
                sd_material_ui.Toggle(
                    id='transition-zoom-input', toggled=True, label='Show element?'),
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
                html.P([html.Strong('Test for Checkbox')]),

                sd_material_ui.Checkbox(id='checkbox1', label='Apple', name='Apple'),
                sd_material_ui.Checkbox(id='checkbox2', label='2', name='2'),
                sd_material_ui.Checkbox(id='checkbox3', label=5, name='5'),

                html.P(id='checkbox-output'),
                html.Button('Clear Selections', id='clear-checks')
            ]),

            spacer,

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

            sd_material_ui.CircularProgress(color='inherit',
                                            thickness=5),
        ]),

        spacer,

        html.Div([
            html.P([html.Strong('Example of Popover')]),

            sd_material_ui.Popover(
                children=[html.P('This is a Popover', style={'margin': 0})],
                buttonType='flat',
                buttonLabel='Open Popover',
                open=False),
        ]),

        spacer,

        html.Div([
            html.P([html.Strong('Sample for Tabs')]),
            sd_material_ui.Tabs([
                html.H3('Header Tab 1'),
                html.H3('Header Tab 2'),
                html.H3('Header Tab 3'),
            ], tabPropsArray=[{'value': 0, 'label': 'Tab 0'},
                              {'value': 1, 'label': 'Tab 1'},
                              {'value': 2, 'label': 'Tab 2'}],
                id='tabs'),
            html.Button('Reset Tab', id='reset-tab', style={'marginRight': '14px'}),
            html.P(id='tabs-output', style={'display': 'contents'}),
        ]),

        spacer,

        html.Div([
                    html.P([html.Strong('Sample for Stepper')]),
                    sd_material_ui.Stepper(id='stepper',
                                           style={'background': 'inherit'},
                                           # nextButtonStyle={'display': 'None'},
                                           # backButtonStyle={'display': 'None'},
                                           # finishedButtonStyle={'display': 'None'},
                                           activeStep=0
                                           ),
                    html.Button('Add one step', id='stepper-button'),
                    html.P(id='stepper-output')
                ]),


        spacer,

        html.Div([
                    html.P([html.Strong('Sample for Date Picker')]),
                    sd_material_ui.Picker(id='date-picker',
                                          value='2020-12-25T13:11:00.000Z',
                                          type='date',
                                          label='This is a date picker'),
                    html.P(id='date-picker-output')

                ]),

        html.Div([
                    html.P([html.Strong('Sample for Time Picker')]),
                    sd_material_ui.Picker(id='time-picker',
                                          value='2020-12-25T13:11:00.000Z',
                                          type='time',
                                          label='This is a time picker'),

                    html.P(id='time-picker-output')
                ]),
    ], style=dict(display='flex', flexWrap='wrap')),

    sd_material_ui.Divider(),

    html.Div([
        sd_material_ui.Tooltip(
            children=html.Button('This button has a tooltip', id='tooltip-button'),
            title='Hovering over the button shows the tooltip',
        ),
        html.P(['Tooltip button clicks: ', html.Span('0', id='tooltip-button-output')]),

        sd_material_ui.Pagination(
            id='pagination-component',
            page=5,
            count=10
        ),
        html.Div([], id='pagination-page-number'),
    ], style=dict(display='flex', flexWrap='wrap')),

    final_spacer
    ], style={'listStyleType': 'none'})


@app.callback(
    [dash.dependencies.Output('stepper-output', 'children'),
     dash.dependencies.Output('stepper', 'activeStep')],
    [dash.dependencies.Input('stepper-button', 'n_clicks')],
    [
        dash.dependencies.State('stepper', 'activeStep')
    ])
def callback_stepper(n_clicks: int,
                     step: int):
    return f'Step {step}', step + 1

@app.callback(
    dash.dependencies.Output('time-picker-output', 'children'),
    [dash.dependencies.Input('time-picker', 'value')],)
def callback_time_picker(_datetime: str):
    _date, _time = _datetime.split('T')
    hours = int(_time.split(':')[0]) + 19
    hours = hours if hours < 24 else hours - 24
    if hours >= 12:
        tag = 'PM'
    else:
        tag = 'AM'
    if hours > 12:
        hours = hours - 12

    return f'Selected time is {hours}:{_time.split(":")[1]} {tag}'\

@app.callback(
    dash.dependencies.Output('date-picker-output', 'children'),
    [dash.dependencies.Input('date-picker', 'value')],)
def callback_time_picker(_datetime: str):
    _date, _time = _datetime.split('T')
    return f'Selected date is {_date.split("-")[1]}/{_date.split("-")[2]}/{_date.split("-")[0]}'

@app.callback(
    dash.dependencies.Output('tabs', 'value'),
    [dash.dependencies.Input('reset-tab', 'n_clicks')],)
def callback_reset_tab(n: int):
    if not n:
        raise dash.exceptions.PreventUpdate
    return False


@app.callback(
    dash.dependencies.Output('tabs-output', 'children'),
    [dash.dependencies.Input('tabs', 'value')],)
def callback_tab(val: int):
    if not val and isinstance(val, bool):
        return ''
    return f'Value Selected: {val}'


@app.callback(
    dash.dependencies.Output('snackbar', 'open'),
    [dash.dependencies.Input('snackbar-button', 'n_clicks')],
    [dash.dependencies.State('snackbar', 'open')])
def callback_snackbar(n: int, _open: bool):
    if not n:
        raise dash.exceptions.PreventUpdate
    return not _open


@app.callback(
    dash.dependencies.Output('snackbar-output', 'children'),
    [dash.dependencies.Input('snackbar', 'n_clicks')])
def callback_snackbar_text(n: int):
    if not n:
        raise dash.exceptions.PreventUpdate
    return f"Snackbar button clicks: {n}"


@app.callback(
    dash.dependencies.Output('transition-collapse', 'visible'),
    [dash.dependencies.Input('transition-input', 'toggled')])
def callback_func_transition_collapse(toggled: bool):
    if toggled is None:
        return True
    return toggled


@app.callback(
    dash.dependencies.Output('transition-fade', 'visible'),
    [dash.dependencies.Input('transition-fade-input', 'toggled')])
def callback_func_transition_fade(toggled: bool):
    if toggled is None:
        return True
    return toggled


@app.callback(
    dash.dependencies.Output('transition-grow', 'visible'),
    [dash.dependencies.Input('transition-grow-input', 'toggled')])
def callback_func_transition_grow(toggled: bool):
    if toggled is None:
        return True
    return toggled


@app.callback(
    dash.dependencies.Output('transition-slide', 'visible'),
    [dash.dependencies.Input('transition-slide-input', 'toggled')])
def callback_func_transition_slide(toggled: bool):
    if toggled is None:
        return True
    return toggled


@app.callback(
    dash.dependencies.Output('transition-zoom', 'visible'),
    [dash.dependencies.Input('transition-zoom-input', 'toggled')])
def callback_func_transition_zoom(toggled: bool):
    if toggled is None:
        return True
    return toggled


@app.callback(dash.dependencies.Output('bottom-nav-output', 'children'),
              [dash.dependencies.Input('bottom-nav', 'selectedValue')],
              [dash.dependencies.State('bottom-nav', 'selectedValue')], )
def callback_bottom_nav(value, state_value):
    if value is None:
        return 'Value Selected: '
    return f'Value Selected: Item {value}'


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


@app.callback(
    [dash.dependencies.Output('accordion1', 'expanded'),
     dash.dependencies.Output('accordion2', 'expanded'),
     dash.dependencies.Output('accordion3', 'expanded')],
    [dash.dependencies.Input('accordion-input', 'n_clicks')])
def callback_accordions(clicks):
    if not clicks:
        raise dash.exceptions.PreventUpdate
    return [True, False, False]


@app.callback(
    dash.dependencies.Output('accordion3', 'disabled'),
    [dash.dependencies.Input('accordion-toggle-input', 'toggled')])
def callback_accordion_disable(toggle_status):
    if toggle_status is None:
        return False
    return not toggle_status


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


# Callback for SDDropdownMenu and SDMenuItem
@app.callback(
    dash.dependencies.Output('dropdown-output', 'children'),
    [dash.dependencies.Input('dropdown-input', 'value')])
def dropdown_callback(value):
    return ['Selection is: {}'.format(value)]


# Callback for SDAutoComplete
@app.callback(
    dash.dependencies.Output('autocomplete-search', 'children'),
    [dash.dependencies.Input('autocomplete', 'searchText')])
def autocomplete_callback(searchText: str):
    return ['Selection is (should take 3 seconds to show up) : {}'.format(searchText)]


# Callback for SDAutoComplete
@app.callback(
    dash.dependencies.Output('autocomplete-output', 'children'),
    [dash.dependencies.Input('autocomplete', 'selectedValue')])
def autocomplete_callback(searchValue: int):
    return ['Selection is {}'.format(searchValue if searchValue else '')]
#
#
# Callback for SDRadioButtonGroup
@app.callback(
    dash.dependencies.Output('radio-output', 'children'),
    [dash.dependencies.Input('radio', 'value')])
def radiobuttongroup_callback(value):
    return ['Selection is: {}'.format(value)]

@app.callback(
    dash.dependencies.Output('pagination-page-number', 'children'),
    [dash.dependencies.Input('pagination-component', 'page')])
def pagination_component_page_number_callback(page_num: int) -> str:
    return f'Page number selected: {page_num}'


@app.callback(
    dash.dependencies.Output('tooltip-button-output', 'children'),
    [dash.dependencies.Input('tooltip-button', 'n_clicks')])
def tooltip_button_callback(clicks: int) -> str:
    return clicks


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
