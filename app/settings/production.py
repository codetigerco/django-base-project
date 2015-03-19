from .base import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'myproductiondatabase',
        'USER': 'postgres',
        'PASSWORD': '',
        'HOST': 'LOCALHOST',
        'PORT': '',
    }
}
