from django.shortcuts import render
from .models import tool
from django.http import Http404
from django.db.models import CharField
from django.db.models.functions import Lower

CharField.register_lookup(Lower)
# CharField.register_lookup(trigram_similar)

# Create your views here.

def home(req):

	return render(req, 'main/index.html')
	
def tools(req, toolname):
	try:
		cipher = tool.objects.get(urlName = toolname)
	except tool.DoesNotExist:
		raise Http404(f" {toolname} does not exist")
	
	data = {'title': cipher, 'variant':cipher.variations.all(), 'resource': cipher.resources.all(), 'desc': str(str("encode/decode using ")+ str(cipher.name) +str(" at cypher-box")) }
	return render(req, 'main/tools.html',data)

def search(req):
	trun = req.GET.get('trun', 75)
	query = req.GET.get('q','')
	data = {}
	results = tool.objects.filter(urlName__icontains = query)
	
	return render(req,'main/search.html', {'results': results, 'q': query, 'T': trun})



