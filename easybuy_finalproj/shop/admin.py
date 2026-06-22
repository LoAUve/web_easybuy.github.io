from django.contrib import admin
from .models import Product, Member, Order, OrderItem

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('external_id', 'name', 'category', 'price', 'stock', 'is_active')
    list_filter = ('category', 'is_active')
    search_fields = ('name', 'desc')

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('username', 'name', 'points', 'created_at')
    search_fields = ('username', 'name')
    readonly_fields = ('created_at', 'password_hash')

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = ('product', 'product_external_id', 'name', 'price', 'quantity', 'emoji')

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('order_no', 'customer_name', 'phone', 'member', 'total', 'status', 'created_at')
    list_filter = ('status', 'shipping_method', 'created_at')
    search_fields = ('order_no', 'customer_name', 'phone', 'member__username')
    inlines = [OrderItemInline]
