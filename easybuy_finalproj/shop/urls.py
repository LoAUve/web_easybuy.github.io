from django.urls import path
from . import views

urlpatterns = [
    path('', views.page, {'template_name': 'index.html'}, name='index'),
    path('index.html', views.page, {'template_name': 'index.html'}, name='index_html'),
    path('order.html', views.page, {'template_name': 'order.html'}, name='order'),
    path('search.html', views.page, {'template_name': 'search.html'}, name='search'),
    path('member_login.html', views.page, {'template_name': 'member_login.html'}, name='member_login'),
    path('member_register.html', views.page, {'template_name': 'member_register.html'}, name='member_register'),
    path('member.html', views.page, {'template_name': 'member.html'}, name='member'),
    path('favorite.html', views.page, {'template_name': 'favorite.html'}, name='favorite'),

    path('api/products/', views.api_products, name='api_products'),
    path('api/members/register/', views.api_member_register, name='api_member_register'),
    path('api/members/login/', views.api_member_login, name='api_member_login'),
    path('api/members/info/', views.api_member_info, name='api_member_info'),
    path('api/members/add-points/', views.api_member_add_points, name='api_member_add_points'),
    path('api/members/redeem-points/', views.api_member_redeem_points, name='api_member_redeem_points'),
    path('api/orders/create/', views.api_order_create, name='api_order_create'),
    path('api/orders/search/', views.api_order_search, name='api_order_search'),
    path('api/orders/my/', views.api_my_orders, name='api_my_orders'),
    path('api/orders/cancel/', views.api_order_cancel, name='api_order_cancel'),
]
