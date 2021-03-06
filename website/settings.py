"""
Django settings for website project.

Generated by 'django-admin startproject' using Django 3.1.5.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""
import django_heroku
import os
from pathlib import Path
import dj_database_url
URI = os.environ.get('DATABASE_URL')

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'iq8hup@q(2n-opc7e)jwg+z@rh5m7l-j)3(--%x_1z20l!c@(r'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']
DEBUG_PROPAGATE_EXCEPTIONS = True

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
   
    'main',

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',

]


ROOT_URLCONF = 'website.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'website.wsgi.app'


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases
DATABASES = {}

if 'DATABASE_URL' in os.environ:
    DEBUG = False
    DATABASES['default'] = dj_database_url.config()
    SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
    SECURE_SSL_REDIRECT = True
else:
    DATABASES ={

            'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }

    }
# DATABASES = {
# #     # 'default': {
# #     #     'ENGINE': 'django.db.backends.sqlite3',
# #     #     'NAME': BASE_DIR / 'db.sqlite3',
# #     # }
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'daih6q3kum9id7',
#         'USER': 'naiwbkcolqzwfu',
#         'PASSWORD': '97f2c9e7ab1eef74010972c7452d24c47cb677f5103245a79f71fcb04b8fa711',
#         'HOST': 'ec2-54-220-35-19.eu-west-1.compute.amazonaws.com',
#         'PORT': '5432',
#         'DATABASE_URL': 'postgres://naiwbkcolqzwfu:97f2c9e7ab1eef74010972c7452d24c47cb677f5103245a79f71fcb04b8fa711@ec2-54-220-35-19.eu-west-1.compute.amazonaws.com:5432/daih6q3kum9id7'
#     }
# }


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'

STATICFILES_DIRS = [BASE_DIR.joinpath('static')]
STATICFILES_STORAGE = 'my_project.storage.WhiteNoiseStaticFilesStorage'
django_heroku.settings(locals())