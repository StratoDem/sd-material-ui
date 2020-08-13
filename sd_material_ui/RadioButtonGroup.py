# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class RadioButtonGroup(Component):
    """A RadioButtonGroup component.


Keyword arguments:
- className (string; default ''): the css class name of the root element
- classNameRoot (string; default ''): The classname for the root elements of each individual radio button
- id (string; required): the element's ID
- name (string; required): the name that will be applied to the group of radio buttons
- options (list; optional): used to create the RadioButtons to populate the RadioButtonGroup with. A Dash user passes in a
list of dict items, each one having at least a `value` and `label`. If that value is selected,
valueSelected will be updated
- valueSelected (string; required): Initial value selected"""
    @_explicitize_args
    def __init__(self, className=Component.UNDEFINED, classNameRoot=Component.UNDEFINED, fireEvent=Component.UNDEFINED, id=Component.REQUIRED, name=Component.REQUIRED, options=Component.UNDEFINED, valueSelected=Component.REQUIRED, **kwargs):
        self._prop_names = ['className', 'classNameRoot', 'id', 'name', 'options', 'valueSelected']
        self._type = 'RadioButtonGroup'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['className', 'classNameRoot', 'id', 'name', 'options', 'valueSelected']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id', 'name', 'valueSelected']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(RadioButtonGroup, self).__init__(**args)
