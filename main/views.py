from django.shortcuts import render
from .models import tool,cryptUser
from django.http import Http404, HttpResponse
from django.shortcuts import redirect
from django.db.models import CharField
from django.db.models.functions import Lower
from .forms import login as loginForm
from django.contrib.auth import authenticate
# CharField.register_lookup(Lower)
# CharField.register_lookup(trigram_similar)

# Create your views here.

def login(req):
	# print('hiii')
	if req.method == 'POST':
		print(req)
		Loginform = loginForm(req.POST)
		if Loginform.is_valid():
			User = authenticate(username=req.POST.get('username'), password=req.POST.get('password'))
			if (User is not None) or len(cryptUser.objects.filter( user_id = User.id))>0:
					return HttpResponse('you are valid')
	else:
		Loginform = loginForm()
	return render(req,'login.html',{'form':Loginform})
def myProfile(req):
	if req.user.is_authenticated:
		current = cryptUser.objects.filter( user_id = req.user.id)
		if len(current) == 1:
			return render(req,'me.html',{'user': req.user,'cryptUser': current[0]})
	return redirect('/')
def profile(req,username):
	return HttpResponse(f'hii {username}')
def gverify(req):
	return HttpResponse('google-site-verification: google72554b0362b554d7.html')
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
	generalDesc = 'Cypher-Box contains encryption/decryption tools needed for a deciphering adventure.'
	data = {'cypher': cipher, 'variant':cipher.variations.all(),'filename': filename, 'resource': cipher.resources.all(), 'desc': str(str("Encrypt or decrypt using ")+ str(cipher.name) +str(" at cypher-box.")+ generalDesc) }
	return render(req, 'tools.html',data)

def search(req):
	trun = req.GET.get('trun', 75)
	query = req.GET.get('q','')
	data = {}
	results = tool.objects.filter(urlName__icontains = query)
	
	return render(req,'main/search.html', {'results': results, 'q': query, 'T': trun})

def offline(req):
	return render(req, 'main/offline.html')



