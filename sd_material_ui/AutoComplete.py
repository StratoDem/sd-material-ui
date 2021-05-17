# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AutoComplete(Component):
    """An AutoComplete component.
Material UI AutoComplete component

Keyword arguments:

- id (string; required):
    Autocomplete ID.

- className (string; optional):
    CSS class name of the root element.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root   fullWidth   focus   tag   tagSizeSmall
    hasPopupIcon   hasClearIcon   inputRoot   input   inputFocused
    endAdornment   clearIndicator   clearIndicatorDirty
    popupIndicator   popupIndicatorOpen   popper   popperDisablePortal
    paper   listbox   loading   noOptions   option   groupLabel
    groupUl.

    `classes` is a dict with keys:

    - root (string; optional)

    - fullWidth (string; optional)

    - focus (string; optional)

    - tag (string; optional)

    - tagSizeSmall (string; optional)

    - hasPopupIcon (string; optional)

    - hasClearIcon (string; optional)

    - inputRoot (string; optional)

    - input (string; optional)

    - inputFocused (string; optional)

    - endAdornment (string; optional)

    - clearIndicator (string; optional)

    - clearIndicatorDirty (string; optional)

    - popupIndicator (string; optional)

    - popupIndicatorOpen (string; optional)

    - popper (string; optional)

    - popperDisablePortal (string; optional)

    - paper (string; optional)

    - listbox (string; optional)

    - loading (string; optional)

    - noOptions (string; optional)

    - option (string; optional)

    - groupLabel (string; optional)

    - groupUl (string; optional)

- dashCallbackDelay (number; default 500):
    Dash callback delay in ms - default is 500 ms.

- dataSource (list of boolean | number | string | dict | lists; optional):
    Array of strings or nodes used to populate the list Alternatively,
    an Array of Objects with a structure like {label: 'My label to
    render', value: 'My value to ship on match'}.

- filter (default "defaultFilter"):
    String name for filter to be applied to user input. will later be
    mapped to function.

- hintText (a list of or a singular dash component, string or number; default "Search Here"):
    The hint content to display.

- maxSearchResults (number; default 5):
    The max number of search results to be shown. By default it shows
    all the items which matches filter.

- open (boolean; optional):
    Auto complete menu is open if True.

- openOnFocus (boolean; default False):
    If True, the list item is showed when a focus event triggers.

- searchEndpointAPI (string; optional):
    If defined, the AutoComplete component hits this URL to search
    instead of string matching.

- searchJSONStructure (dict; optional):
    General JSON structure to send to the server.

- searchText (string; default ""):
    Text being input to auto complete.

- selectedValue (bool | number | str | dict | list; optional):
    The selected value of the input.

- style (dict; optional):
    Override the inline-styles of the root element."""
    @_explicitize_args
    def __init__(self, classes=Component.UNDEFINED, className=Component.UNDEFINED, dashCallbackDelay=Component.UNDEFINED, dataSource=Component.UNDEFINED, filter=Component.UNDEFINED, fireEvent=Component.UNDEFINED, hintText=Component.UNDEFINED, id=Component.REQUIRED, maxSearchResults=Component.UNDEFINED, open=Component.UNDEFINED, openOnFocus=Component.UNDEFINED, searchText=Component.UNDEFINED, style=Component.UNDEFINED, searchEndpointAPI=Component.UNDEFINED, searchJSONStructure=Component.UNDEFINED, selectedValue=Component.UNDEFINED, menuCloseDelay=Component.UNDEFINED, searchValue=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'classes', 'dashCallbackDelay', 'dataSource', 'filter', 'hintText', 'maxSearchResults', 'open', 'openOnFocus', 'searchEndpointAPI', 'searchJSONStructure', 'searchText', 'selectedValue', 'style']
        self._type = 'AutoComplete'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'classes', 'dashCallbackDelay', 'dataSource', 'filter', 'hintText', 'maxSearchResults', 'open', 'openOnFocus', 'searchEndpointAPI', 'searchJSONStructure', 'searchText', 'selectedValue', 'style']
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
