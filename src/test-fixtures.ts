export const exampleManifestData = {
  include: ['*.md', 'vg/**/*', '.circleci/*'],
  exclude: ['**/test_*.py'],
  includeOverridingGitignore: ['vg.egg-info/*'],
  rename: [{from: 'CHANGELOG.md', to: 'CHCHCHCHCHANGES.md'}]
}

export const examplePaths = [
  '.git/COMMIT_EDITMSG',
  '.git/FETCH_HEAD',
  '.git/HEAD',
  '.circleci/config.yml',
  '.circleci/.DS_Store',
  '.coverage',
  '.coveragerc',
  '.gitignore',
  '.pytest_cache',
  '.vscode/settings.json',
  'CHANGELOG.md',
  'Dockerfile',
  'LICENSE',
  'MANIFEST.in',
  'README.md',
  'dev.py',
  'now.json',
  'requirements.txt',
  'requirements_dev_common.txt',
  'requirements_dev_py2.txt',
  'requirements_dev_py3.txt',
  'setup.py',
  'dist/vg-1.0.0.tar.gz',
  'doc/_static/.gitkeep',
  'doc/conf.py',
  'doc/requirements.txt',
  'doc/index.md',
  'htmlcov/coverage_html.js',
  'htmlcov/index.html',
  'htmlcov/jquery.ba-throttle-debounce.min.js',
  'htmlcov/jquery.hotkeys.js',
  'htmlcov/jquery.isonscreen.js',
  'htmlcov/jquery.min.js',
  'htmlcov/jquery.tablesorter.min.js',
  'htmlcov/keybd_closed.png',
  'htmlcov/keybd_open.png',
  'htmlcov/style.css',
  'htmlcov/status.json',
  'htmlcov/vg___init___py.html',
  'htmlcov/vg_core_py.html',
  'vector_shortcuts.egg-info/PKG-INFO',
  'vector_shortcuts.egg-info/SOURCES.txt',
  'vector_shortcuts.egg-info/dependency_links.txt',
  'vector_shortcuts.egg-info/requires.txt',
  'vector_shortcuts.egg-info/top_level.txt',
  'vg.egg-info/PKG-INFO',
  'vg.egg-info/dependency_links.txt',
  'vg.egg-info/requires.txt',
  'vg.egg-info/SOURCES.txt',
  'vg.egg-info/top_level.txt',
  'vg/__init__.py',
  'vg/_helpers.py',
  'vg/_helpers.pyc',
  'vg/__init__.pyc',
  'vg/core.py',
  'vg/core.pyc',
  'vg/matrix.py',
  'vg/matrix.pyc',
  'vg/package_version.py',
  'vg/package_version.pyc',
  'vg/shape.py',
  'vg/shape.pyc',
  'vg/test_almost_collinear.py',
  'vg/test_almost_equal.py',
  'vg/test_almost_unit_length.py',
  'vg/test_almost_zero.py',
  'vg/test_angle.py',
  'vg/test_apex.py',
  'vg/test_basis.py',
  'vg/test_core.pyc',
  'vg/test_farthest.py',
  'vg/test_internal.py',
  'vg/test_magnitude.py',
  'vg/test_matrix_pad_with_ones.py',
  'vg/test_matrix_unpad.py',
  'vg/test_matrix_transform.py',
  'vg/test_normalize.py',
  'vg/test_pca.py',
  'vg/test_perpendicular.py',
  'vg/test_project.py',
  'vg/test_reject.py',
  'vg/test_reject_axis.py',
  'vg/test_rotate.py',
  'vg/test_shape.py',
  'vg/test_signed_angle.py',
  'doc/build/.buildinfo',
  'doc/build/index.html',
  'doc/build/objects.inv',
  'vg/__pycache__/__init__.cpython-37.pyc',
  'vg/__pycache__/_helpers.cpython-37.pyc',
  'vg/__pycache__/core.cpython-37.pyc',
  'vg/__pycache__/matrix.cpython-37.pyc',
  'vg/__pycache__/package_version.cpython-37.pyc',
  'vg/__pycache__/shape.cpython-37.pyc',
  'vg/__pycache__/test_almost_collinear.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_almost_collinear.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_almost_equal.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_almost_equal.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_almost_unit_length.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_almost_unit_length.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_almost_zero.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_almost_zero.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_angle.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_angle.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_angle.cpython-37.pyc',
  'vg/__pycache__/test_apex.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_apex.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_apply_homogeneous.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_apply_homogeneous.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_basis.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_basis.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_constants.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_core.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_core.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_core.cpython-37.pyc',
  'vg/__pycache__/test_farthest.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_farthest.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_internal.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_internal.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_magnitude.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_magnitude.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_matrix_pad_with_ones.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_matrix_pad_with_ones.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_matrix_transform.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_matrix_transform.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_matrix_unpad.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_matrix_unpad.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_normalize.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_normalize.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_pad_with_ones.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_pad_with_ones.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_pca.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_pca.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_pca.cpython-37.pyc',
  'vg/__pycache__/test_perpendicular.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_perpendicular.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_proj.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_proj.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_project.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_project.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_reject.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_reject.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_reject_axis.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_reject_axis.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_rotate.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_rotate.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_shape.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_shape.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_signed_angle.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_signed_angle.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_unpad.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_unpad.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_within.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_within.cpython-37-PYTEST.pyc',
  'doc/build/_static/ajax-loader.gif',
  'doc/build/_static/alabaster.css',
  'doc/build/_static/basic.css',
  'doc/build/_static/comment-bright.png',
  'doc/build/_static/comment-close.png',
  'doc/build/_static/comment.png',
  'doc/build/_static/custom.css',
  'doc/build/_static/doctools.js',
  'doc/build/_static/documentation_options.js',
  'doc/build/_static/down-pressed.png',
  'doc/build/_static/down.png',
  'doc/build/_static/file.png',
  'doc/build/_static/jquery-3.2.1.js',
  'doc/build/_static/jquery.js',
  'doc/build/_static/language_data.js',
  'doc/build/_static/minus.png',
  'doc/build/_static/plus.png',
  'doc/build/_static/pygments.css',
  'doc/build/_static/searchtools.js',
  'doc/build/_static/underscore-1.3.1.js',
  'doc/build/_static/underscore.js',
  'doc/build/_static/up-pressed.png',
  'doc/build/_static/up.png',
  'doc/build/_static/websupport.js',
]

export const examplePathsWithoutGlobalIgnores = examplePaths.filter(
  path => !path.startsWith('.git/')
)

export const exampleGitignore = `
# Created by https://www.gitignore.io/api/osx,python

### OSX ###
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon

# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

### Python ###
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# PyInstaller
#  Usually these files are written by a python script from a template
#  before PyInstaller builds the exe, so as to inject date/other infos into it.
*.manifest
*.spec

# Installer logs
pip-log.txt
pip-delete-this-directory.txt

# Unit test / coverage reports
htmlcov/
.tox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
.hypothesis/
.pytest_cache/

# Translations
*.mo
*.pot

# Django stuff:
*.log
local_settings.py
db.sqlite3

# Flask stuff:
instance/
.webassets-cache

# Scrapy stuff:
.scrapy

# Sphinx documentation
docs/_build/

# PyBuilder
target/

# Jupyter Notebook
.ipynb_checkpoints

# IPython
profile_default/
ipython_config.py

# pyenv
.python-version

# celery beat schedule file
celerybeat-schedule

# SageMath parsed files
*.sage.py

# Environments
.env
.venv
env/
venv/
ENV/
env.bak/
venv.bak/

# Spyder project settings
.spyderproject
.spyproject

# Rope project settings
.ropeproject

# mkdocs documentation
/site

# mypy
.mypy_cache/
.dmypy.json
dmypy.json

### Python Patch ###
.venv/

### Python.VirtualEnv Stack ###
# Virtualenv
# http://iamzed.com/2009/05/07/a-primer-on-virtualenv/
[Bb]in
[Ii]nclude
[Ll]ib
[Ll]ib64
[Ll]ocal
[Ss]cripts
pyvenv.cfg
pip-selfcheck.json


# End of https://www.gitignore.io/api/osx,python

doc/api/
`

export const expectedGitignoredPaths = [
  '.coverage',
  '.circleci/.DS_Store',
  'dist/vg-1.0.0.tar.gz',
  'htmlcov/coverage_html.js',
  'htmlcov/index.html',
  'htmlcov/jquery.ba-throttle-debounce.min.js',
  'htmlcov/jquery.hotkeys.js',
  'htmlcov/jquery.isonscreen.js',
  'htmlcov/jquery.min.js',
  'htmlcov/jquery.tablesorter.min.js',
  'htmlcov/keybd_closed.png',
  'htmlcov/keybd_open.png',
  'htmlcov/status.json',
  'htmlcov/style.css',
  'htmlcov/vg___init___py.html',
  'htmlcov/vg_core_py.html',
  'vector_shortcuts.egg-info/PKG-INFO',
  'vector_shortcuts.egg-info/SOURCES.txt',
  'vector_shortcuts.egg-info/dependency_links.txt',
  'vector_shortcuts.egg-info/requires.txt',
  'vector_shortcuts.egg-info/top_level.txt',
  'vg/__init__.pyc',
  'vg/_helpers.pyc',
  'vg/core.pyc',
  'vg/matrix.pyc',
  'vg/package_version.pyc',
  'vg/shape.pyc',
  'vg/test_core.pyc',
  'doc/build/index.html',
  'doc/build/objects.inv',
  'vg.egg-info/PKG-INFO',
  'vg.egg-info/SOURCES.txt',
  'vg.egg-info/dependency_links.txt',
  'vg.egg-info/requires.txt',
  'vg.egg-info/top_level.txt',
  'vg/__pycache__/__init__.cpython-37.pyc',
  'vg/__pycache__/_helpers.cpython-37.pyc',
  'vg/__pycache__/core.cpython-37.pyc',
  'vg/__pycache__/matrix.cpython-37.pyc',
  'vg/__pycache__/package_version.cpython-37.pyc',
  'vg/__pycache__/shape.cpython-37.pyc',
  'vg/__pycache__/test_almost_collinear.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_almost_collinear.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_almost_equal.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_almost_equal.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_almost_unit_length.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_almost_unit_length.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_almost_zero.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_almost_zero.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_angle.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_angle.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_angle.cpython-37.pyc',
  'vg/__pycache__/test_apex.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_apex.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_apply_homogeneous.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_apply_homogeneous.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_basis.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_basis.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_constants.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_core.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_core.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_core.cpython-37.pyc',
  'vg/__pycache__/test_farthest.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_farthest.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_internal.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_internal.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_magnitude.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_magnitude.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_matrix_pad_with_ones.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_matrix_pad_with_ones.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_matrix_transform.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_matrix_transform.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_matrix_unpad.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_matrix_unpad.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_normalize.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_normalize.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_pad_with_ones.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_pad_with_ones.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_pca.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_pca.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_pca.cpython-37.pyc',
  'vg/__pycache__/test_perpendicular.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_perpendicular.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_proj.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_proj.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_project.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_project.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_reject.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_reject.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_reject_axis.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_reject_axis.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_rotate.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_rotate.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_shape.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_shape.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_signed_angle.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_signed_angle.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_unpad.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_unpad.cpython-37-PYTEST.pyc',
  'vg/__pycache__/test_within.cpython-27-PYTEST.pyc',
  'vg/__pycache__/test_within.cpython-37-PYTEST.pyc',
  'doc/build/.buildinfo',
  'doc/build/_static/ajax-loader.gif',
  'doc/build/_static/alabaster.css',
  'doc/build/_static/basic.css',
  'doc/build/_static/comment-bright.png',
  'doc/build/_static/comment-close.png',
  'doc/build/_static/comment.png',
  'doc/build/_static/custom.css',
  'doc/build/_static/doctools.js',
  'doc/build/_static/documentation_options.js',
  'doc/build/_static/down-pressed.png',
  'doc/build/_static/down.png',
  'doc/build/_static/file.png',
  'doc/build/_static/jquery-3.2.1.js',
  'doc/build/_static/jquery.js',
  'doc/build/_static/language_data.js',
  'doc/build/_static/minus.png',
  'doc/build/_static/plus.png',
  'doc/build/_static/pygments.css',
  'doc/build/_static/searchtools.js',
  'doc/build/_static/underscore-1.3.1.js',
  'doc/build/_static/underscore.js',
  'doc/build/_static/up-pressed.png',
  'doc/build/_static/up.png',
  'doc/build/_static/websupport.js',
]

export const globResult = {
  allPaths: examplePathsWithoutGlobalIgnores,
  gitignoredPaths: expectedGitignoredPaths,
}

export const expectedMatchResult = {
  toRename: [
    'CHANGELOG.md',
  ],
  includedByManifest: [
    'README.md',
    'vg/__init__.py',
    'vg/_helpers.py',
    'vg/core.py',
    'vg/matrix.py',
    'vg/package_version.py',
    'vg/shape.py',
    '.circleci/config.yml',
  ],
  excludedByManifest: [
    'vg/test_almost_collinear.py',
    'vg/test_almost_equal.py',
    'vg/test_almost_unit_length.py',
    'vg/test_almost_zero.py',
    'vg/test_angle.py',
    'vg/test_apex.py',
    'vg/test_basis.py',
    'vg/test_farthest.py',
    'vg/test_internal.py',
    'vg/test_magnitude.py',
    'vg/test_matrix_pad_with_ones.py',
    'vg/test_matrix_unpad.py',
    'vg/test_matrix_transform.py',
    'vg/test_normalize.py',
    'vg/test_pca.py',
    'vg/test_perpendicular.py',
    'vg/test_project.py',
    'vg/test_reject.py',
    'vg/test_reject_axis.py',
    'vg/test_rotate.py',
    'vg/test_shape.py',
    'vg/test_signed_angle.py',
  ],
  excludedByGitignore: [
    '.circleci/.DS_Store',
    'vg/__init__.pyc',
    'vg/_helpers.pyc',
    'vg/core.pyc',
    'vg/matrix.pyc',
    'vg/package_version.pyc',
    'vg/shape.pyc',
    'vg/test_core.pyc',
    'vg/__pycache__/__init__.cpython-37.pyc',
    'vg/__pycache__/_helpers.cpython-37.pyc',
    'vg/__pycache__/core.cpython-37.pyc',
    'vg/__pycache__/matrix.cpython-37.pyc',
    'vg/__pycache__/package_version.cpython-37.pyc',
    'vg/__pycache__/shape.cpython-37.pyc',
    'vg/__pycache__/test_almost_collinear.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_almost_collinear.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_almost_equal.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_almost_equal.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_almost_unit_length.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_almost_unit_length.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_almost_zero.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_almost_zero.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_angle.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_angle.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_angle.cpython-37.pyc',
    'vg/__pycache__/test_apex.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_apex.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_apply_homogeneous.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_apply_homogeneous.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_basis.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_basis.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_constants.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_core.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_core.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_core.cpython-37.pyc',
    'vg/__pycache__/test_farthest.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_farthest.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_internal.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_internal.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_magnitude.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_magnitude.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_matrix_pad_with_ones.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_matrix_pad_with_ones.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_matrix_transform.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_matrix_transform.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_matrix_unpad.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_matrix_unpad.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_normalize.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_normalize.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_pad_with_ones.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_pad_with_ones.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_pca.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_pca.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_pca.cpython-37.pyc',
    'vg/__pycache__/test_perpendicular.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_perpendicular.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_proj.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_proj.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_project.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_project.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_reject.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_reject.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_reject_axis.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_reject_axis.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_rotate.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_rotate.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_shape.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_shape.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_signed_angle.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_signed_angle.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_unpad.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_unpad.cpython-37-PYTEST.pyc',
    'vg/__pycache__/test_within.cpython-27-PYTEST.pyc',
    'vg/__pycache__/test_within.cpython-37-PYTEST.pyc',
  ],
  includedByManifestOverride: [
    'vg.egg-info/PKG-INFO',
    'vg.egg-info/dependency_links.txt',
    'vg.egg-info/requires.txt',
    'vg.egg-info/SOURCES.txt',
    'vg.egg-info/top_level.txt',
  ],
  notInManifest: [
    '.coveragerc',
    '.gitignore',
    '.pytest_cache',
    '.vscode/settings.json',
    'Dockerfile',
    'LICENSE',
    'MANIFEST.in',
    'dev.py',
    'now.json',
    'requirements.txt',
    'requirements_dev_common.txt',
    'requirements_dev_py2.txt',
    'requirements_dev_py3.txt',
    'setup.py',
    'doc/_static/.gitkeep',
    'doc/conf.py',
    'doc/requirements.txt',
    'doc/index.md',
  ],
  gitignoredAndNotInManifest: [
    '.coverage',
    'dist/vg-1.0.0.tar.gz',
    'htmlcov/coverage_html.js',
    'htmlcov/index.html',
    'htmlcov/jquery.ba-throttle-debounce.min.js',
    'htmlcov/jquery.hotkeys.js',
    'htmlcov/jquery.isonscreen.js',
    'htmlcov/jquery.min.js',
    'htmlcov/jquery.tablesorter.min.js',
    'htmlcov/keybd_closed.png',
    'htmlcov/keybd_open.png',
    'htmlcov/style.css',
    'htmlcov/status.json',
    'htmlcov/vg___init___py.html',
    'htmlcov/vg_core_py.html',
    'vector_shortcuts.egg-info/PKG-INFO',
    'vector_shortcuts.egg-info/SOURCES.txt',
    'vector_shortcuts.egg-info/dependency_links.txt',
    'vector_shortcuts.egg-info/requires.txt',
    'vector_shortcuts.egg-info/top_level.txt',
    'doc/build/.buildinfo',
    'doc/build/index.html',
    'doc/build/objects.inv',
    'doc/build/_static/ajax-loader.gif',
    'doc/build/_static/alabaster.css',
    'doc/build/_static/basic.css',
    'doc/build/_static/comment-bright.png',
    'doc/build/_static/comment-close.png',
    'doc/build/_static/comment.png',
    'doc/build/_static/custom.css',
    'doc/build/_static/doctools.js',
    'doc/build/_static/documentation_options.js',
    'doc/build/_static/down-pressed.png',
    'doc/build/_static/down.png',
    'doc/build/_static/file.png',
    'doc/build/_static/jquery-3.2.1.js',
    'doc/build/_static/jquery.js',
    'doc/build/_static/language_data.js',
    'doc/build/_static/minus.png',
    'doc/build/_static/plus.png',
    'doc/build/_static/pygments.css',
    'doc/build/_static/searchtools.js',
    'doc/build/_static/underscore-1.3.1.js',
    'doc/build/_static/underscore.js',
    'doc/build/_static/up-pressed.png',
    'doc/build/_static/up.png',
    'doc/build/_static/websupport.js',
  ],
}
