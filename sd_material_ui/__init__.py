"""
StratoDem Analytics : __init__
Principal Author(s) : Michael Clawar
Secondary Author(s) : 
Description :

Notes : 

December 28, 2017
"""

import os as _os
import dash as _dash
import sys as _sys
from .version import __version__

_current_path = _os.path.dirname(_os.path.abspath(__file__))

_components = _dash.development.component_loader.load_components(
    _os.path.join(_current_path, 'metadata.json'),
    'sd_material_ui'
)

_this_module = _sys.modules[__name__]


_js_dist = [
    {
        "relative_package_path": "bundle.js",
        "external_url": (
            "https://unpkg.com/sd-material-ui@{}"
            "/sd_material_ui/bundle.js"
        ).format(__version__),
        "namespace": "sd_material_ui"
    }
]

_css_dist = []


for _component in _components:
    setattr(_this_module, _component.__name__, _component)
    setattr(_component, '_js_dist', _js_dist)
setattr(_component, '_css_dist', _css_dist)
