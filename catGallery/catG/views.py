from django.shortcuts import render, get_object_or_404
from .models import Image, Comment

# Create your views here.
def index(request):
    return render(request, "catG/index.html")

def image(request, pk):
    image = get_object_or_404(Image, pk=pk)
    return render(request, "catG/post.html")

def addText(request):
    return render(request, "catG/addText.html")