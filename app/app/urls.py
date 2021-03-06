from django.conf import settings
from django.conf.urls import patterns, include, url
from django.contrib import admin
from app.views import HomePageView
from django.views.static import serve

urlpatterns = [
    # Examples:
    url(r'^$', HomePageView.as_view(), name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
]

if settings.DEBUG:
    # static files (images, css, javascript, etc.)
    urlpatterns += [
        url(r'^media/(?P<path>.*)$', serve, {
        'document_root': settings.MEDIA_ROOT})]

