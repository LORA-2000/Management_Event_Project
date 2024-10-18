from django.urls import path
from .views import get_events,create_events

urlpatterns = [
    path('events/',get_events,name='get_events'),
    path('events/create/',create_events,name='create_events')
]
