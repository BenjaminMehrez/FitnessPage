from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet


router = DefaultRouter()
router.register(r'api/products', ProductViewSet, basename='products')


urlpatterns = [
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title='Products API')),
]


