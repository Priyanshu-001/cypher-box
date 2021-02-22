from django.shortcuts import render
from .models import tool
from django.http import Http404

# Create your views here.

def home(req):

	return render(req, 'main/index.html')
	
def tools(req, toolname):
	try:
		cipher = tool.objects.get(urlName = toolname)
	except tool.DoesNotExist:
		raise Http404("Poll does not exist")
	
	data = {'title': cipher, 'variant':cipher.variations.all(), 'resource': cipher.resources.all() }
	return render(req, 'main/tools.html',data)