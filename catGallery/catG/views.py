from django.shortcuts import render, get_object_or_404, redirect
from .models import Image, Comment


# main cat gallery page
def index(request):

    # gets all cats stored in the database
    images = Image.objects.all()

    return render(
        request,
        "catG/index.html",
        {
            "images": images
        }
    )


# cat details page
def image(request, pk):

    # gets the selected cat using its ID
    image = get_object_or_404(
        Image,
        pk=pk
    )


    # checks if the comment form was submitted
    if request.method == "POST":

        username = request.POST.get("username")
        comment_text = request.POST.get("comment")


        # only saves if both fields have something
        if username and comment_text:

            Comment.objects.create(
                image=image,
                user=username,
                content=comment_text
            )


            # reloads the same cat page after posting
            return redirect(
                "image",
                pk=image.pk
            )


    return render(
        request,
        "catG/post.html",
        {
            "image": image
        }
    )


# add text page
def addText(request, pk):

    # gets the selected cat using its ID
    image = get_object_or_404(
        Image,
        pk=pk
    )

    return render(
        request,
        "catG/addText.html",
        {
            "image": image
        }
    )