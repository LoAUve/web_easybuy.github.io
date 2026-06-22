from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class Product(models.Model):
    external_id = models.PositiveIntegerField(unique=True, verbose_name='前端商品ID')
    name = models.CharField(max_length=100, verbose_name='商品名稱')
    price = models.PositiveIntegerField(verbose_name='價格')
    category = models.CharField(max_length=50, verbose_name='分類')
    emoji = models.CharField(max_length=20, blank=True, verbose_name='圖示')
    desc = models.CharField(max_length=255, blank=True, verbose_name='商品介紹')
    stock = models.PositiveIntegerField(default=10, verbose_name='庫存')
    is_active = models.BooleanField(default=True, verbose_name='上架')

    class Meta:
        ordering = ['external_id']
        verbose_name = '商品'
        verbose_name_plural = '商品'

    def __str__(self):
        return f'{self.external_id}. {self.name}'

class Member(models.Model):
    username = models.CharField(max_length=50, unique=True, verbose_name='會員帳號')
    password_hash = models.CharField(max_length=255, verbose_name='密碼雜湊')
    name = models.CharField(max_length=100, verbose_name='會員姓名')
    points = models.PositiveIntegerField(default=0, verbose_name='點數')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='註冊時間')

    class Meta:
        verbose_name = '會員'
        verbose_name_plural = '會員'

    def set_password(self, raw_password):
        self.password_hash = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password_hash)

    def __str__(self):
        return self.username

class Order(models.Model):
    STATUS_PROCESSING = '處理中'
    STATUS_SHIPPED = '已出貨'
    STATUS_DELIVERING = '配送中'
    STATUS_DELIVERED = '已送達'
    STATUS_CANCELLED = '已取消'
    STATUS_CHOICES = [
        (STATUS_PROCESSING, '處理中'),
        (STATUS_SHIPPED, '已出貨'),
        (STATUS_DELIVERING, '配送中'),
        (STATUS_DELIVERED, '已送達'),
        (STATUS_CANCELLED, '已取消'),
    ]
    SHIPPING_CHOICES = [
        ('store', '超商取貨'),
        ('home', '宅配到府'),
        ('fast', '快速到貨'),
    ]

    order_no = models.CharField(max_length=30, unique=True, verbose_name='訂單編號')
    member = models.ForeignKey(Member, null=True, blank=True, on_delete=models.SET_NULL, verbose_name='會員')
    customer_name = models.CharField(max_length=100, verbose_name='收件人')
    phone = models.CharField(max_length=30, db_index=True, verbose_name='電話')
    address = models.TextField(verbose_name='地址')
    subtotal = models.PositiveIntegerField(default=0, verbose_name='小計')
    discount = models.PositiveIntegerField(default=0, verbose_name='優惠折抵')
    coupon = models.CharField(max_length=50, blank=True, verbose_name='優惠券')
    shipping_fee = models.PositiveIntegerField(default=0, verbose_name='運費')
    shipping_method = models.CharField(max_length=20, choices=SHIPPING_CHOICES, default='store', verbose_name='配送方式')
    total = models.PositiveIntegerField(default=0, verbose_name='總金額')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=STATUS_PROCESSING, verbose_name='訂單狀態')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='建立時間')

    class Meta:
        ordering = ['-created_at']
        verbose_name = '訂單'
        verbose_name_plural = '訂單'

    @property
    def cancelled(self):
        return self.status == self.STATUS_CANCELLED

    def can_cancel(self):
        # 後端核心規則：商品只要已出貨，就不允許取消。
        return self.status == self.STATUS_PROCESSING

    def __str__(self):
        return self.order_no

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE, verbose_name='訂單')
    product = models.ForeignKey(Product, null=True, blank=True, on_delete=models.SET_NULL, verbose_name='商品')
    product_external_id = models.PositiveIntegerField(verbose_name='前端商品ID')
    name = models.CharField(max_length=100, verbose_name='商品名稱')
    price = models.PositiveIntegerField(verbose_name='單價')
    quantity = models.PositiveIntegerField(verbose_name='數量')
    emoji = models.CharField(max_length=20, blank=True, verbose_name='圖示')

    class Meta:
        verbose_name = '訂單明細'
        verbose_name_plural = '訂單明細'

    def __str__(self):
        return f'{self.name} x {self.quantity}'
