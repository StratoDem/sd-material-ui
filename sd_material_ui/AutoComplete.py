# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AutoComplete(Component):
    """A AutoComplete component.
Material UI AutoComplete component

Keyword arguments:
- anchorOrigin (optional): Location of the anchor for the auto complete. anchorOrigin has the following type: dict containing keys 'vertical', 'horizontal'.
  Those keys have the following types:
  - vertical (optional)
  - horizontal (optional)
- animated (boolean; optional): If true, auto complete is animated as it is toggled
- dashCallbackDelay (number; optional): Dash callback delay in ms - default is 500 ms
- dataSource (list of boolean | number | string | dict | lists; optional): Array of strings or nodes used to populate the list
Alternatively, an Array of Objects with a structure like
{label: 'My label to render', value: 'My value to ship on match'}
- dataSourceConfig (dict; optional): Config for objects list dataSource
- disableFocusRipple (boolean; optional): Disables focus ripple when true
- errorStyle (dict; optional): Override style prop for error
- errorText (a list of or a singular dash component, string or number; optional): The error content to display
- exactMatch (boolean; optional): Should the search text have to match exactly to update props server side?
- filter (optional): String name for filter to be applied to user input.
will later be mapped to function
- floatingLabelText (a list of or a singular dash component, string or number; optional): The content to use for adding floating label element
- fullWidth (boolean; optional): If true, field receives the property width: 100%
- hintText (a list of or a singular dash component, string or number; optional): The hint content to display
- id (string; required): Autocomplete ID
- listStyle (dict; optional): Override style for list
- maxSearchResults (number; optional): The max number of search results to be shown. By default it shows
all the items which matches filter
- menuCloseDelay (number; optional): Delay for closing time of the menu
- menuProps (dict; optional): Props to be passed to menu
- menuStyle (dict; optional): Override style for menu
- open (boolean; optional): Auto complete menu is open if true
- openOnFocus (boolean; optional): If true, the list item is showed when a focus event triggers
- popoverProps (dict; optional): Props to be passed to popover
- searchText (string; optional): Text being input to auto complete
- searchValue (bool | number | str | dict | list; optional): Value in the dataSource found by using searchText
NOTE exactMatch must be true for this to work
- style (dict; optional): Override the inline-styles of the root element
- targetOrigin (optional): Origin for location of target. targetOrigin has the following type: dict containing keys 'vertical', 'horizontal'.
  Those keys have the following types:
  - vertical (optional)
  - horizontal (optional)
- textFieldStyle (dict; optional): Override the inline-styles of AutoComplete's TextField element
- searchEndpointAPI (string; optional): If defined, the AutoComplete component hits this URL to search instead of string matching
- searchJSONStructure (dict; optional): General JSON structure to send to the server"""
    @_explicitize_args
    def __init__(self, anchorOrigin=Component.UNDEFINED, animated=Component.UNDEFINED, dashCallbackDelay=Component.UNDEFINED, dataSource=Component.UNDEFINED, dataSourceConfig=Component.UNDEFINED, disableFocusRipple=Component.UNDEFINED, errorStyle=Component.UNDEFINED, errorText=Component.UNDEFINED, exactMatch=Component.UNDEFINED, filter=Component.UNDEFINED, fireEvent=Component.UNDEFINED, floatingLabelText=Component.UNDEFINED, fullWidth=Component.UNDEFINED, hintText=Component.UNDEFINED, id=Component.REQUIRED, listStyle=Component.UNDEFINED, maxSearchResults=Component.UNDEFINED, menuCloseDelay=Component.UNDEFINED, menuProps=Component.UNDEFINED, menuStyle=Component.UNDEFINED, open=Component.UNDEFINED, openOnFocus=Component.UNDEFINED, popoverProps=Component.UNDEFINED, searchText=Component.UNDEFINED, searchValue=Component.UNDEFINED, style=Component.UNDEFINED, targetOrigin=Component.UNDEFINED, textFieldStyle=Component.UNDEFINED, searchEndpointAPI=Component.UNDEFINED, searchJSONStructure=Component.UNDEFINED, **kwargs):
        self._prop_names = ['anchorOrigin', 'animated', 'dashCallbackDelay', 'dataSource', 'dataSourceConfig', 'disableFocusRipple', 'errorStyle', 'errorText', 'exactMatch', 'filter', 'floatingLabelText', 'fullWidth', 'hintText', 'id', 'listStyle', 'maxSearchResults', 'menuCloseDelay', 'menuProps', 'menuStyle', 'open', 'openOnFocus', 'popoverProps', 'searchText', 'searchValue', 'style', 'targetOrigin', 'textFieldStyle', 'searchEndpointAPI', 'searchJSONStructure']
        self._type = 'AutoComplete'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['anchorOrigin', 'animated', 'dashCallbackDelay', 'dataSource', 'dataSourceConfig', 'disableFocusRipple', 'errorStyle', 'errorText', 'exactMatch', 'filter', 'floatingLabelText', 'fullWidth', 'hintText', 'id', 'listStyle', 'maxSearchResults', 'menuCloseDelay', 'menuProps', 'menuStyle', 'open', 'openOnFocus', 'popoverProps', 'searchText', 'searchValue', 'style', 'targetOrigin', 'textFieldStyle', 'searchEndpointAPI', 'searchJSONStructure']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AutoComplete, self).__init__(**args)
