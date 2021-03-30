"""website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.views.generic.base import TemplateView
from django.urls import path
from main.views import home, tools, search, offline, gverify
urlpatterns = [
    path('admin/', admin.site.urls),
    path('google72554b0362b554d7.html',gverify),
    path('',home,name='home'),
    path('offline',offline, name='offline'),
    path('tool/<toolname>',tools, name='tools'),
    path('serviceworker.js', (TemplateView.as_view(template_name="serviceworker.js", content_type='application/javascript', )), name='sw.js'),
    path('search/',search,name='search'),


]
