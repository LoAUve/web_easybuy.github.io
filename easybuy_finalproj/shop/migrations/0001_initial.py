# Generated for EASYBUY final project
from django.db import migrations, models
import django.db.models.deletion

class Migration(migrations.Migration):
    initial = True
    dependencies = []
    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50, unique=True, verbose_name='會員帳號')),
                ('password_hash', models.CharField(max_length=255, verbose_name='密碼雜湊')),
                ('name', models.CharField(max_length=100, verbose_name='會員姓名')),
                ('points', models.PositiveIntegerField(default=0, verbose_name='點數')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='註冊時間')),
            ],
            options={'verbose_name': '會員', 'verbose_name_plural': '會員'},
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('external_id', models.PositiveIntegerField(unique=True, verbose_name='前端商品ID')),
                ('name', models.CharField(max_length=100, verbose_name='商品名稱')),
                ('price', models.PositiveIntegerField(verbose_name='價格')),
                ('category', models.CharField(max_length=50, verbose_name='分類')),
                ('emoji', models.CharField(blank=True, max_length=20, verbose_name='圖示')),
                ('desc', models.CharField(blank=True, max_length=255, verbose_name='商品介紹')),
                ('stock', models.PositiveIntegerField(default=10, verbose_name='庫存')),
                ('is_active', models.BooleanField(default=True, verbose_name='上架')),
            ],
            options={'verbose_name': '商品', 'verbose_name_plural': '商品', 'ordering': ['external_id']},
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_no', models.CharField(max_length=30, unique=True, verbose_name='訂單編號')),
                ('customer_name', models.CharField(max_length=100, verbose_name='收件人')),
                ('phone', models.CharField(db_index=True, max_length=30, verbose_name='電話')),
                ('address', models.TextField(verbose_name='地址')),
                ('subtotal', models.PositiveIntegerField(default=0, verbose_name='小計')),
                ('discount', models.PositiveIntegerField(default=0, verbose_name='優惠折抵')),
                ('coupon', models.CharField(blank=True, max_length=50, verbose_name='優惠券')),
                ('shipping_fee', models.PositiveIntegerField(default=0, verbose_name='運費')),
                ('shipping_method', models.CharField(choices=[('store', '超商取貨'), ('home', '宅配到府'), ('fast', '快速到貨')], default='store', max_length=20, verbose_name='配送方式')),
                ('total', models.PositiveIntegerField(default=0, verbose_name='總金額')),
                ('status', models.CharField(choices=[('處理中', '處理中'), ('已出貨', '已出貨'), ('配送中', '配送中'), ('已送達', '已送達'), ('已取消', '已取消')], default='處理中', max_length=20, verbose_name='訂單狀態')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='建立時間')),
                ('member', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='shop.member', verbose_name='會員')),
            ],
            options={'verbose_name': '訂單', 'verbose_name_plural': '訂單', 'ordering': ['-created_at']},
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_external_id', models.PositiveIntegerField(verbose_name='前端商品ID')),
                ('name', models.CharField(max_length=100, verbose_name='商品名稱')),
                ('price', models.PositiveIntegerField(verbose_name='單價')),
                ('quantity', models.PositiveIntegerField(verbose_name='數量')),
                ('emoji', models.CharField(blank=True, max_length=20, verbose_name='圖示')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='shop.order', verbose_name='訂單')),
                ('product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='shop.product', verbose_name='商品')),
            ],
            options={'verbose_name': '訂單明細', 'verbose_name_plural': '訂單明細'},
        ),
    ]
