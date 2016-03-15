===================
django-base-project
===================
.. image:: https://travis-ci.org/codetigerco/django-base-project.svg?branch=master
    :target: https://travis-ci.org/codetigerco/django-base-project

.. image:: https://requires.io/github/codetigerco/django-base-project/requirements.svg?branch=master
     :target: https://requires.io/github/codetigerco/django-base-project/requirements/?branch=master
     :alt: Requirements Status

A template for creating Django projects quickly, inspired by `@pydanny <https://github.com/pydanny>`_  `@cookiecutter-django <https://github.com/pydanny/cookiecutter-django>`_ .

Features
--------

- For Django 1.9
- Python 3.4
- `UI Kit <http://getuikit.com/>`_
- `AngularJS <https://angularjs.org/>`_ (In the future)
- File to be used with TravisCI
- Optimized to be used with Digital Ocean
- Basic Static and Media Files configuration to be used with AWS
- SASS for CSS
- Gulp for Javascript Automation
- `Fabric <http://www.fabfile.org/>`_ for deployment automation
- Basic Caching Setup

Constraints
-----------
- PostgresSQL everywhere
- Enviroment variables for configuration (This won't work with Apache/mod_wsgi) 
- Only maintained 3rd party libraries are used

Django and Python Related
-------------------------
- You should use PiP and virtualenv
- Coverage
- Pylint
- pytest
- to be used with Nginx (as a reversed proxy) and gunicorn

Other Stuff
-----------
- The templates include a base.html, index.html and both a login.html and signup html.
- Different settings and requirements list are included to work with
  the different locations where the server will live (base, local, staging and production)

Installation
-----------

To create a new project with called 'recipes' using the template , run
the following command::

  $ django-admin startproject --template https://github.com/codetigerco/django-base-project/archive/master.zip recipes

To install psycopg2 on the virtualenv on a Mac first you need to setup your PATH::

	$ PATH=$PATH:/Applications/Postgres.app/Contents/Versions/(latest-version)/bin

To setup the database do the following::

	Open the postgress app 
	$ CREATE DATABASE name-of-database;
	$ \c name-of-database
	$ CREATE USER name-of-user;

