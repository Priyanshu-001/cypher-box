from django.contrib import admin

# Register your models here.
from .models import tool, resources, variations

admin.site.register(tool)
admin.site.register(resources)
admin.site.register(variations)

