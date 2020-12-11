from django.urls import path

from .views import ClientListView, ClientDetailView

urlpatterns = [
    path('', ClientListView.as_view(), ),
    path('detail/<int:pk>/', ClientListView.as_view()),
]