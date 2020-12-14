from django.urls import path

from .views import (ClientCreateView, ClientDeleteView, ClientDetailView,
                    ClientListView, ClientUpdateView)

urlpatterns = [
    path('', ClientListView.as_view()),
    path('create/', ClientCreateView.as_view()),
    path('<pk>/', ClientDetailView.as_view()),
    path('<pk>/update/', ClientUpdateView.as_view()),
    path('<pk>/delete/', ClientDeleteView.as_view())
]
