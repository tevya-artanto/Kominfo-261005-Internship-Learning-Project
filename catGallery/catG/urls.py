from django.urls import path
from catG import views

urlpatterns = [
    path("", views.index, name="index"),
    path("image/<str:pk>/", views.image, name="image"),
    path("image/<str:pk>/add-text", views.addText, name="addText")
]