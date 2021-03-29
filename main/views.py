from django.shortcuts import render
from .models import tool
from django.http import Http404
from django.db.models import CharField
from django.db.models.functions import Lower

CharField.register_lookup(Lower)
# CharField.register_lookup(trigram_similar)

# Create your views here.

def home(req):
	allTools = tool.objects.filter(isReady=True)

	return render(req, 'newUI.html',{'Ciphers': allTools})
	
def tools(req, toolname):
	try:
		cipher = tool.objects.get(urlName = toolname)
	except tool.DoesNotExist:
		raise Http404(f" {toolname} does not exist")
	filename = cipher.link.split('/')[1].split('.')[0]
	filename = 'snippets/'+filename+'.js'
	data = {'cypher': cipher, 'variant':cipher.variations.all(),'filename': filename, 'resource': cipher.resources.all(), 'desc': str(str("encode/decode using ")+ str(cipher.name) +str(" at cypher-box")) }
	return render(req, 'tools.html',data)

def search(req):
	trun = req.GET.get('trun', 75)
	query = req.GET.get('q','')
	data = {}
	results = tool.objects.filter(urlName__icontains = query)
	
	return render(req,'main/search.html', {'results': results, 'q': query, 'T': trun})

def offline(req):

	return render(req, 'main/offline.html')

