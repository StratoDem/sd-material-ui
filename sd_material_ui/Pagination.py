# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Pagination(Component):
    """A Pagination component.
Material UI Pagination component

Keyword arguments:

- id (string; required):
    Component ID.

- count (number; required):
    Number of pages.

- page (number; default 1):
    Page number."""
    @_explicitize_args
    def __init__(self, id=Component.REQUIRED, page=Component.UNDEFINED, count=Component.REQUIRED, fireEvent=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'count', 'page']
        self._type = 'Pagination'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'count', 'page']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['id', 'count']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Pagination, self).__init__(**args)
