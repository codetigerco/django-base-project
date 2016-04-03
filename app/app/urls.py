from django.conf import settings
from django.conf.urls import patterns, include, url
from django.contrib import admin
from app import views as AppViews
from django import views as DjangoViews

urlpatterns = [
    # Examples:
    url(r'^$', AppViews.home, name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
]

if settings.DEBUG:
    # static files (images, css, javascript, etc.)
    urlpatterns += [
        url(r'^media/(?P<path>.*)$', DjangoViews.static.serve, {
        'document_root': settings.MEDIA_ROOT})]
