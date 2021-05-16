# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Dialog(Component):
    """A Dialog component.
Material UI Dialog component

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Children to render inside of the Dialog.

- id (string; required):
    Dialog ID.

- ariaLabelledBy (string; default ''):
    List of space separated id's of elements to use as aria labels.

- autoScrollBodyContent (boolean; default False):
    If set to True, the body content of the Dialog will be scrollable.

- className (string; default ''):
    CSS class name of the root element.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root   container   paper   scrollPaper
    scrollBody   paperScrollPaper   paperScrollBody   paperWidthFalse
    paperWidthXs   paperWidthSm   paperWidthMd   paperWidthLg
    paperWidthXl   paperFullWidth   paperFullScreen.

    `classes` is a dict with keys:

    - root (string; optional)

    - container (string; optional)

    - paper (string; optional)

    - scrollPaper (string; optional)

    - scrollBody (string; optional)

    - paperScrollPaper (string; optional)

    - paperScrollBody (string; optional)

    - paperWidthFalse (string; optional)

    - paperWidthXs (string; optional)

    - paperWidthSm (string; optional)

    - paperWidthMd (string; optional)

    - paperWidthLg (string; optional)

    - paperWidthXl (string; optional)

    - paperFullWidth (string; optional)

    - paperFullScreen (string; optional)

- componentContainerClassName (string; optional):
    The className to add to the component container.

- fullWidth (boolean; default True):
    The className to add to the content container.

- open (boolean; default False):
    Is the dialog open?  IMPORTANT: When using this component in Dash,
    a listener must be set up (either as state or an input) for this
    component's props.open value in order to achieve the desired
    behavior. If such a listener is not in place, the non-modal
    version of this dialog will contaminate other callbacks in the
    browser.

- scroll (dict; default 'body'):
    \"paper\" or \"body\", Determines scroll container.

- style (dict; optional):
    Styles to be implemented as inline css.

- useBrowserSideClose (boolean; default False):
    If set to True, the Close Icon will show in the upper right corner
    of the dialog, closing the Dialog browser side."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.REQUIRED, ariaLabelledBy=Component.UNDEFINED, classes=Component.UNDEFINED, className=Component.UNDEFINED, open=Component.UNDEFINED, autoScrollBodyContent=Component.UNDEFINED, componentContainerClassName=Component.UNDEFINED, fullWidth=Component.UNDEFINED, useBrowserSideClose=Component.UNDEFINED, scroll=Component.UNDEFINED, style=Component.UNDEFINED, actions=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'ariaLabelledBy', 'autoScrollBodyContent', 'className', 'classes', 'componentContainerClassName', 'fullWidth', 'open', 'scroll', 'style', 'useBrowserSideClose']
        self._type = 'Dialog'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'ariaLabelledBy', 'autoScrollBodyContent', 'className', 'classes', 'componentContainerClassName', 'fullWidth', 'open', 'scroll', 'style', 'useBrowserSideClose']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Dialog, self).__init__(children=children, **args)
