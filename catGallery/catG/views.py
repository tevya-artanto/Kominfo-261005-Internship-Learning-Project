from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "catG/index.html")

def image(request):
    return render(request, "catG/post.html")

def addText(request):
    return render(request, "catG/addText.html")