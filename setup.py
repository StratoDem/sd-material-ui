from setuptools import setup

exec (open('sd_material_ui/version.py').read())

setup(
    name='sd_material_ui',
    version=__version__,
    author='StratoDem',
    packages=['sd_material_ui'],
    include_package_data=True,
    license='MIT',
    description='StratoDem Analytics Dash implementation of material-ui components',
    install_requires=[]
)
