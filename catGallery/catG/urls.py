from django.urls import path
from catG import views

urlpatterns = [
    path("", views.index, name="index"),
    path("image/<int:pk>/", views.image, name="image"),
    path("image/<int:pk>/add-text", views.addText, name="addText")
]