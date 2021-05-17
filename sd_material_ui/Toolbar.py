# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Toolbar(Component):
    """A Toolbar component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Children to render inside of the Appbar.

- id (string; required):
    Appbar ID.

- className (string; default ''):
    CSS class name of the root element.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root   docked   paper   paperAnchorLeft
    paperAnchorRight   paperAnchorTop   paperAnchorBottom
    paperAnchorDockedLeft   paperAnchorDockedTop
    paperAnchorDockedRight   paperAnchorDockedBottom   modal.

    `classes` is a dict with keys:

    - root (string; optional)

    - positionFixed (string; optional)

    - positionAbsolute (string; optional)

    - positionSticky (string; optional)

    - positionStatic (string; optional)

    - positionRelative (string; optional)

    - colorDefault (string; optional)

    - colorPrimary (string; optional)

    - colorSecondary (string; optional)

    - colorInherit (string; optional)

    - colorTransparent (string; optional)

- component (string; default 'div'):
    The component used for the root node. Defaults to `div`.

- disableGutters (boolean; default False):
    If True, disables gutter padding.. Defaults to `False`.

- variant (default 'regular'):
    The variant to use. Defaults to `regular`."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.REQUIRED, classes=Component.UNDEFINED, className=Component.UNDEFINED, component=Component.UNDEFINED, disableGutters=Component.UNDEFINED, variant=Component.UNDEFINED, classNameRoot=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'classes', 'component', 'disableGutters', 'variant']
        self._type = 'Toolbar'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'classes', 'component', 'disableGutters', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Toolbar, self).__init__(children=children, **args)
